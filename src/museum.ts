import * as THREE from 'three';
import type {Activity,Category,Lang,MuseumController,MuseumOptions} from './types';
import {createHeritage,type HeritageId,type HeritageModel} from './museum-heritage';
import {chooseNearbyPicture,createRoomLayout,resolveMovement,wheelAngleRadians,createStorySession,type Bounds2} from './museum-math';

interface RoomSpec {id:string;x:number;z:number;width:number;depth:number;side:'left'|'right'|'back';}
interface SavedCamera {x:number;z:number;yaw:number;pitch:number;}
interface Exhibit {activity:Activity;group:THREE.Group;frame:THREE.MeshStandardMaterial;position:THREE.Vector3;url?:string;}
const savedCameras=new Map<string,SavedCamera>();
let lastVisitedCategory:string|undefined;
const roomSpecs:RoomSpec[]=[
 {id:'adventure',x:-9.6,z:9,width:8.4,depth:7.2,side:'left'},
 {id:'kids',x:-9.6,z:1.6,width:8.4,depth:7.2,side:'left'},
 {id:'nature',x:-9.6,z:-5.8,width:8.4,depth:7.2,side:'left'},
 {id:'relax',x:-9.2,z:-13.2,width:9.2,depth:7.2,side:'back'},
 {id:'night',x:0,z:-13.2,width:9.2,depth:7.2,side:'back'},
 {id:'cafes',x:9.2,z:-13.2,width:9.2,depth:7.2,side:'back'},
 {id:'food',x:9.6,z:-5.8,width:8.4,depth:7.2,side:'right'},
 {id:'culture',x:9.6,z:1.6,width:8.4,depth:7.2,side:'right'},
 {id:'history',x:9.6,z:9,width:8.4,depth:7.2,side:'right'},
];
const copy:Record<Lang,{scene:string;reset:string;move:string;look:string;zoomIn:string;zoomOut:string;wheel:string;map:string;exit:string;focus:string}>= {
 ro:{scene:'Muzeu imaginar în trei dimensiuni',reset:'Încadrează tot planul',move:'Mergi',look:'Glisează pentru a privi · Q / E pentru rotire',zoomIn:'Apropie',zoomOut:'Depărtează',wheel:'Roata descoperirilor',map:'Harta orașului',exit:'Înapoi la plan',focus:'Privește tabloul apropiat'},
 en:{scene:'Imaginary three-dimensional museum',reset:'Fit the whole plan',move:'Move',look:'Drag to look · Q / E to turn',zoomIn:'Zoom in',zoomOut:'Zoom out',wheel:'Discovery wheel',map:'City map',exit:'Back to the plan',focus:'Look at a nearby photograph'},
 it:{scene:'Museo immaginario in tre dimensioni',reset:'Mostra tutta la pianta',move:'Cammina',look:'Trascina per guardare · Q / E per ruotare',zoomIn:'Avvicina',zoomOut:'Allontana',wheel:'Ruota delle scoperte',map:'Mappa della città',exit:'Torna alla pianta',focus:'Guarda una fotografia vicina'},
 fr:{scene:'Musée imaginaire en trois dimensions',reset:'Afficher tout le plan',move:'Avancer',look:'Glissez pour regarder · Q / E pour tourner',zoomIn:'Rapprocher',zoomOut:'Éloigner',wheel:'Roue des découvertes',map:'Plan de la ville',exit:'Retour au plan',focus:'Regardez une photographie proche'},
 es:{scene:'Museo imaginario en tres dimensiones',reset:'Ver todo el plano',move:'Camina',look:'Arrastra para mirar · Q / E para girar',zoomIn:'Acercar',zoomOut:'Alejar',wheel:'Ruleta de descubrimientos',map:'Mapa de la ciudad',exit:'Volver al plano',focus:'Mira una fotografía cercana'},
 'zh-Hans':{scene:'虚构的三维博物馆',reset:'显示完整平面图',move:'移动',look:'拖动环视 · Q / E 转向',zoomIn:'放大',zoomOut:'缩小',wheel:'探索转盘',map:'城市地图',exit:'返回平面图',focus:'观看附近的照片'},
};

export function mountMuseum(container:HTMLElement,options:MuseumOptions):MuseumController {
 let disposed=false,fallbackCalled=false;
 const fallback=()=>{if(!disposed&&!fallbackCalled){fallbackCalled=true;options.onFallback();}};
 let renderer:THREE.WebGLRenderer;
 try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}catch{queueMicrotask(fallback);return {dispose(){disposed=true;}};}
 const scene=new THREE.Scene();scene.background=new THREE.Color(0xe7e1d6);
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65));renderer.outputColorSpace=THREE.SRGBColorSpace;
 renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.15;
 renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 const canvas=renderer.domElement;canvas.className='museum-canvas';canvas.tabIndex=0;canvas.setAttribute('role','img');canvas.setAttribute('aria-label',copy[options.lang].scene);
 Object.assign(canvas.style,{display:'block',width:'100%',height:'100%',touchAction:'none',outlineOffset:'-4px'});
 const oldPosition=container.style.position;if(!getComputedStyle(container).position||getComputedStyle(container).position==='static')container.style.position='relative';
 container.append(canvas);
 const overlay=document.createElement('div');overlay.className='museum-controls';Object.assign(overlay.style,{position:'absolute',inset:'0',pointerEvents:'none',overflow:'hidden'});container.append(overlay);
 const style=document.createElement('style');style.textContent=`
 .museum-controls button{font:500 11px/1.2 system-ui,sans-serif;color:#352e26;background:#f9f4e9;border:1px solid #b6a58d;box-shadow:0 2px 5px #332c2520;pointer-events:auto;cursor:pointer;min-height:44px;border-radius:3px;padding:6px 9px}
 .museum-controls button:focus-visible{outline:3px solid #245b65;outline-offset:3px}.museum-controls .museum-room-label{position:absolute;transform:translate(-50%,-50%);width:116px;max-width:24%;text-align:center;border-top:3px solid var(--room-accent);letter-spacing:.02em;transition:background .15s}
 .museum-controls .museum-room-label:hover{background:#fffdf7}.museum-controls .museum-room-label b{font-family:Georgia,serif;font-size:15px;margin-right:4px;font-weight:400}
 .museum-controls .museum-view-tools{position:absolute;right:14px;bottom:16px;display:flex;gap:6px;pointer-events:none}.museum-controls .museum-view-tools button{min-width:44px;font-size:18px}.museum-controls .museum-view-tools .fit{font-size:11px;max-width:130px}
 .museum-controls .museum-crosshair{position:absolute;left:50%;top:50%;width:8px;height:8px;margin:-4px;border-radius:50%;border:1px solid #fff;background:#273b3c55;box-shadow:0 0 3px #0005;pointer-events:none}
 .museum-controls .museum-look-hint{position:absolute;bottom:16px;left:50%;transform:translateX(-50%);font:11px/1.35 system-ui,sans-serif;max-width:60%;text-align:center;color:#40392f;background:#fcf8eddd;padding:7px 12px;border-radius:2px;pointer-events:none}
 .museum-controls .museum-joystick{position:absolute;width:106px;height:106px;border-radius:50%;bottom:24px;left:22px;background:#f7f0e0bb;border:1px solid #aa9575;box-shadow:inset 0 0 0 20px #fff7;pointer-events:auto;touch-action:none;display:none;color:#65513b;align-items:center;justify-content:center;font:11px system-ui}
 .museum-controls .museum-joystick:before{content:'↑';position:absolute;top:5px;font-size:18px}.museum-controls .museum-joystick:after{content:'↓';position:absolute;bottom:5px;font-size:18px}.museum-controls .museum-joystick span{display:block;background:#bba88780;width:38px;height:38px;border-radius:50%;border:1px solid #8d7756;pointer-events:none}
 @media(pointer:coarse){.museum-controls .museum-joystick{display:flex}.museum-controls .museum-look-hint{left:auto;right:15px;transform:none;max-width:47%;bottom:28px}}
 @media(max-width:550px){.museum-controls .museum-room-label{font-size:9px;width:95px;padding:5px 4px;min-height:44px}.museum-controls .museum-room-label{width:44px;height:44px;min-height:44px;border-radius:50%;padding:0;max-width:none}.museum-controls .museum-room-label span{display:none}.museum-controls .museum-room-label b{font-size:17px;margin:0}.museum-controls .museum-view-tools{right:9px;bottom:9px}.museum-controls .museum-view-tools .fit{max-width:94px;font-size:9px}}
 `;container.append(style);
 const cleanups:Array<()=>void>=[];
 function listen(target:EventTarget,name:string,fn:EventListener,opts?:AddEventListenerOptions){target.addEventListener(name,fn,opts);cleanups.push(()=>target.removeEventListener(name,fn,opts));}
 const mat=(color:THREE.ColorRepresentation,roughness=.75,metalness=0)=>new THREE.MeshStandardMaterial({color,roughness,metalness});
 const ivory=mat(0xe9deca),pale=mat(0xf6eddf),brass=mat(0xb08b4b,.32,.65),dark=mat(0x293f43,.42),wood=mat(0x665043,.75),linen=mat(0xd8c8af,.95),stone=mat(0xc9baa4);
 function mesh(geometry:THREE.BufferGeometry,material:THREE.Material,parent:THREE.Object3D=scene){const m=new THREE.Mesh(geometry,material);m.castShadow=true;m.receiveShadow=true;parent.add(m);return m;}
 function box(w:number,h:number,d:number,x:number,y:number,z:number,material:THREE.Material=ivory,parent:THREE.Object3D=scene){const m=mesh(new THREE.BoxGeometry(w,h,d),material,parent);m.position.set(x,y,z);return m;}
 function cylinder(r:number,h:number,x:number,y:number,z:number,material:THREE.Material=brass,parent:THREE.Object3D=scene){const m=mesh(new THREE.CylinderGeometry(r,r,h,24),material,parent);m.position.set(x,y,z);return m;}
 const ambient=new THREE.HemisphereLight(0xfff2dc,0xa8a9a2,2.6);scene.add(ambient);
 const sun=new THREE.DirectionalLight(0xffe1b7,4.2);sun.position.set(-14,28,20);sun.castShadow=true;sun.shadow.mapSize.set(1536,1536);sun.shadow.camera.left=-25;sun.shadow.camera.right=25;sun.shadow.camera.top=25;sun.shadow.camera.bottom=-25;sun.shadow.normalBias=.035;sun.shadow.bias=-.0001;scene.add(sun);
 const fill=new THREE.DirectionalLight(0xc9dbe0,1.35);fill.position.set(18,14,-15);scene.add(fill);
 const ortho=new THREE.OrthographicCamera(-22,22,22,-22,.1,150);
 const perspective=new THREE.PerspectiveCamera(58,1,.06,140);
 let camera:THREE.Camera=options.mode==='lobby'?ortho:perspective;
 let lobbyAzimuth=.45,lobbyZoom=1,width=1,height=1;const lobbyTarget=new THREE.Vector3(0,0,-2);
 let wheelDisk:THREE.Group|undefined,wheelCenter=new THREE.Vector3(2.6,2.15,8.5),spin:{from:number;to:number;start:number;duration:number}|undefined;
 const raycaster=new THREE.Raycaster(),pointer=new THREE.Vector2();
 const exhibits:Exhibit[]=[],heritage:Array<HeritageModel&{id:HeritageId}> =[];
 const obstacles:Bounds2[]=[];
 let roomBounds:Bounds2={minX:-6,maxX:6,minZ:-6,maxZ:6},yaw=0,pitch=0,activePicture:string|null=null,activeHeritage:HeritageId|null=null,heritageStarted=0;
 const keys=new Set<string>();let joystick={x:0,z:0},hoverAction:THREE.Object3D|null=null;
 const roomButtons:Array<{button:HTMLButtonElement;room:RoomSpec;category:Category}>=[];
 const translated:Array<{element:HTMLElement;key:keyof typeof copy[Lang];attribute?:string}>=[];
 function button(key:keyof typeof copy[Lang],handler:()=>void,parent:HTMLElement=overlay,text?:string){const b=document.createElement('button');b.type='button';b.textContent=text??copy[options.lang][key];b.setAttribute('aria-label',copy[options.lang][key]);parent.append(b);b.addEventListener('click',handler);translated.push({element:b,key,attribute:text?'aria-label':undefined});return b;}
 function exit(){container.dispatchEvent(new CustomEvent('museum-exit',{bubbles:true}));}
 function tagged(group:THREE.Object3D,action:string,id?:string){group.userData={...group.userData,action,id};return group;}
 function addHeritage(id:HeritageId,x:number,z:number,scale=1){const model=createHeritage(id);model.group.position.set(x,.05,z);model.group.scale.setScalar(scale);scene.add(model.group);heritage.push({...model,id});return model;}
 function arch(x:number,z:number,rotation=0,scale=1){const group=new THREE.Group();group.position.set(x,0,z);group.rotation.y=rotation;group.scale.setScalar(scale);scene.add(group);for(const sx of [-1.05,1.05]){box(.25,1.7,.46,sx,.85,0,pale,group);box(.4,.16,.6,sx,.1,0,stone,group);box(.36,.13,.56,sx,1.67,0,brass,group);}const curve=mesh(new THREE.TorusGeometry(1.05,.14,8,30,Math.PI),pale,group);curve.position.y=1.7;const line=mesh(new THREE.TorusGeometry(1.05,.025,5,30,Math.PI),brass,group);line.position.set(0,1.7,.17);return group;}
 function plant(x:number,z:number,s=1,parent:THREE.Object3D=scene){const p=new THREE.Group();p.position.set(x,0,z);p.scale.setScalar(s);parent.add(p);const pot=mesh(new THREE.CylinderGeometry(.3,.23,.55,18),stone,p);pot.position.y=.27;const leafMat=mat(0x657654);for(let i=0;i<7;i++){const leaf=mesh(new THREE.SphereGeometry(.28,10,8),leafMat,p);const a=i*2.4;leaf.position.set(Math.sin(a)*.25,.65+(i%3)*.18,Math.cos(a)*.25);leaf.scale.set(.65,1.8,.45);leaf.rotation.z=Math.sin(a)*.5;}}
 function sofa(x:number,z:number,rotation=0,scale=1){const g=new THREE.Group();g.position.set(x,0,z);g.rotation.y=rotation;g.scale.setScalar(scale);scene.add(g);box(2.5,.25,.85,0,.35,0,linen,g);box(2.5,.65,.22,0,.72,-.43,linen,g);for(const sx of [-1.17,1.17])box(.22,.48,.9,sx,.56,0,linen,g);for(const sx of [-.9,.9])for(const sz of [-.3,.3])cylinder(.035,.25,sx,.13,sz,brass,g);for(const sx of [-.6,.2,.8]){const cushion=box(.64,.17,.65,sx,.54,0,pale,g);cushion.rotation.z=sx*.03;}return g;}
 function labelTexture(text:string,color='#554838',size=192){const cv=document.createElement('canvas');cv.width=size;cv.height=size;const ctx=cv.getContext('2d')!;ctx.clearRect(0,0,size,size);ctx.fillStyle=color;ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`${size*.45}px Georgia, serif`;ctx.fillText(text,size/2,size/2);const t=new THREE.CanvasTexture(cv);t.colorSpace=THREE.SRGBColorSpace;return t;}
 function makeWheel(){const wheel=new THREE.Group();wheel.position.copy(wheelCenter);scene.add(wheel);tagged(wheel,'wheel');
  const stand=box(.34,2,.38,0,-1.7,-.15,brass,wheel);stand.castShadow=true;box(2.6,.19,1.1,0,-2.15,0,dark,wheel);cylinder(.2,.22,0,-.8,-.1,brass,wheel);
  wheelDisk=new THREE.Group();wheel.add(wheelDisk);
  const back=mesh(new THREE.CylinderGeometry(1.72,1.72,.32,64),dark,wheelDisk);back.rotation.x=Math.PI/2;
  options.categories.forEach((category,i)=>{const angle=Math.PI/2-i*2*Math.PI/9,half=Math.PI/9;const shape=new THREE.Shape();shape.moveTo(0,0);shape.lineTo(Math.cos(angle-half)*1.63,Math.sin(angle-half)*1.63);shape.absarc(0,0,1.63,angle-half,angle+half,false);shape.lineTo(0,0);const seg=mesh(new THREE.ExtrudeGeometry(shape,{depth:.11,bevelEnabled:true,bevelSize:.015,bevelThickness:.015,bevelSegments:1,curveSegments:12}),mat(category.color,.6),wheelDisk);seg.position.z=.19;
   const number=mesh(new THREE.PlaneGeometry(.39,.39),new THREE.MeshBasicMaterial({map:labelTexture(String(category.number),'#302820'),transparent:true}),wheelDisk);number.position.set(Math.cos(angle)*1.2,Math.sin(angle)*1.2,.33);number.rotation.z=angle-Math.PI/2;
  });
  const rim=mesh(new THREE.TorusGeometry(1.7,.065,10,72),brass,wheelDisk);rim.position.z=.24;const hub=mesh(new THREE.CylinderGeometry(.23,.23,.32,32),brass,wheelDisk);hub.rotation.x=Math.PI/2;hub.position.z=.34;
  const pointerShape=new THREE.Shape();pointerShape.moveTo(-.16,0);pointerShape.lineTo(.16,0);pointerShape.lineTo(0,-.36);pointerShape.closePath();const pointerMesh=mesh(new THREE.ExtrudeGeometry(pointerShape,{depth:.13,bevelEnabled:false}),brass,wheel);pointerMesh.position.set(0,1.94,.36);
 }

 function makeLobby(){
  box(29.3,.45,30.5,0,-.38,-2.1,stone);box(28.6,.12,29.8,0,-.08,-2.1,pale);
  box(10.7,.09,23.4,0,.015,1.25,mat(0xd9cbb6));
  for(let z=-8;z<13;z+=1.6){box(.025,.008,20.9,-4.8,.075,2,brass);box(10.1,.008,.018,0,.075,z,brass);}
  for(const spec of roomSpecs){const roomStart=scene.children.length;const category=options.categories.find(c=>c.id===spec.id);if(!category)continue;
   const accent=new THREE.Color(category.color),floorMat=mat(accent.clone().lerp(new THREE.Color(0xf4ecde),.74));
   if(lastVisitedCategory===spec.id){floorMat.emissive.set(0xb49a6c);floorMat.emissiveIntensity=.11;}
   const floor=box(spec.width-.22,.1,spec.depth-.18,spec.x,.055,spec.z,floorMat);tagged(floor,'category',spec.id);
   const wallMat=mat(accent.clone().lerp(new THREE.Color(0xf7eddf),.86));
   const left=spec.x-spec.width/2,right=spec.x+spec.width/2,back=spec.z-spec.depth/2,front=spec.z+spec.depth/2;
   const wallHeight=2.3;
   box(spec.width,.11,.31,spec.x,wallHeight+.05,back,pale);box(spec.width,wallHeight,.32,spec.x,wallHeight/2,back,wallMat);
   if(spec.side==='back'){
    box(.32,wallHeight,spec.depth,left,wallHeight/2,spec.z,wallMat);box(.32,wallHeight,spec.depth,right,wallHeight/2,spec.z,wallMat);
    const wing=(spec.width-2.5)/2;for(const sign of [-1,1])box(wing,1.2,.32,spec.x+sign*(1.25+wing/2),.6,front,wallMat);arch(spec.x,front,0,.95);
   }else{
    const outer=spec.side==='left'?left:right,inner=spec.side==='left'?right:left;
    box(.32,wallHeight,spec.depth,outer,wallHeight/2,spec.z,wallMat);box(spec.width,1.1,.3,spec.x,.55,front,wallMat);
    const wing=(spec.depth-2.5)/2;for(const sign of [-1,1])box(.32,wallHeight,wing,inner,wallHeight/2,spec.z+sign*(1.25+wing/2),wallMat);arch(inner,spec.z,Math.PI/2,.95);
    box(.4,.14,spec.depth,outer,wallHeight+.03,spec.z,pale);
   }
   box(spec.width,.1,.12,spec.x,.21,back+.2,brass);
   const medallion=mesh(new THREE.CircleGeometry(.55,32),mat(category.color,.65));medallion.rotation.x=-Math.PI/2;medallion.position.set(spec.x,.13,spec.z+1.75);
   const num=mesh(new THREE.PlaneGeometry(.67,.67),new THREE.MeshBasicMaterial({map:labelTexture(String(category.number)),transparent:true}));num.rotation.x=-Math.PI/2;num.position.set(spec.x,.14,spec.z+1.75);
   for(const [i,z] of [spec.z-1.6,spec.z+.6].entries()){
    const frame=box(2,.95,.11,spec.x-1.9+i*3.8,1.25,back+.25,brass);const image=box(1.78,.74,.04,frame.position.x,1.25,back+.33,mat(accent.clone().lerp(new THREE.Color(0xe2d4bd),.5)));image.userData.decorative=true;
   }
   if(['cafes','relax','culture'].includes(spec.id))sofa(spec.x,spec.z,0,.75);
   if(spec.id==='nature'){for(const dx of [-2.7,2.7])plant(spec.x+dx,spec.z,.95);}
   if(spec.id==='kids'){for(let k=0;k<3;k++)box(.65,.65,.65,spec.x-1+k*.9,.45,spec.z,mat([0xe7c66f,0x8aaea4,0xc7a0a2][k]));}
   if(spec.id==='night'){const lamp=new THREE.PointLight(0xeeb3ac,3,8);lamp.position.set(spec.x,2,spec.z);scene.add(lamp);cylinder(.8,.1,spec.x,.2,spec.z,dark);}
   if(spec.id==='food')addHeritage('beer',spec.x+.9,spec.z,.9);
   if(spec.id==='history'){for(const dx of [-2,2])cylinder(.2,1.5,spec.x+dx,.75,spec.z,stone);}
   for(const object of scene.children.slice(roomStart)){if(!object.userData.action)tagged(object,'category',spec.id);}
   const b=document.createElement('button');b.type='button';b.className='museum-room-label';b.style.setProperty('--room-accent',category.color);b.innerHTML=`<b>${category.number.toString()}. </b><span></span>`;b.querySelector('span')!.textContent=category.name[options.lang];b.setAttribute('aria-label',`${category.number}. ${category.name[options.lang]}`);b.addEventListener('click',()=>options.onCategory(category.id));overlay.append(b);roomButtons.push({button:b,room:spec,category});
  }
  // Evening Bega: curved dark inlay, brass embankment, and the river's reflected lights.
  const curve=new THREE.CatmullRomCurve3([new THREE.Vector3(-1,.11,12),new THREE.Vector3(-2,.11,8),new THREE.Vector3(-.2,.11,3),new THREE.Vector3(-1.5,.11,-2),new THREE.Vector3(.3,.11,-8)]);
  const river=mesh(new THREE.TubeGeometry(curve,80,.52,12,false),mat(0x1c424b,.2,.4));river.scale.y=.06;river.position.y=.13;
  const edgeCurve=curve.clone();edgeCurve.points=edgeCurve.points.map(p=>p.clone().add(new THREE.Vector3(.66,0,0)));const edge=mesh(new THREE.TubeGeometry(edgeCurve,64,.025,5,false),brass);edge.position.y=.015;
  for(let i=0;i<15;i++){const p=edgeCurve.getPoint(i/14);const bulb=mesh(new THREE.SphereGeometry(.07,8,6),new THREE.MeshStandardMaterial({color:0xffe3a7,emissive:0xffc769,emissiveIntensity:1.6}));bulb.position.set(p.x,.2,p.z);const reflection=box(.06,.008,.32,p.x-.3,.133,p.z+.18,mat(0xa79c71,.18,.4));reflection.rotation.y=.2;}
  // Curved reception follows the same river line.
  const receptionCurve=new THREE.CatmullRomCurve3([new THREE.Vector3(-3.9,.55,9.7),new THREE.Vector3(-3.5,.55,8.5),new THREE.Vector3(-3.65,.55,7.3),new THREE.Vector3(-3.2,.55,6.3)]);
  const desk=mesh(new THREE.TubeGeometry(receptionCurve,30,.43,8,false),dark);desk.scale.y=1.1;const top=mesh(new THREE.TubeGeometry(receptionCurve,30,.47,8,false),brass);top.position.y=.42;top.scale.y=.13;
  sofa(2.5,4.6,Math.PI/2,.95);cylinder(.56,.09,1.8,.52,3.1,wood);cylinder(.06,.47,1.8,.25,3.1,brass);
  // Table map is independent from the surrounding room and has its own raycast target.
  const map=new THREE.Group();map.position.set(3.25,0,.3);scene.add(map);tagged(map,'map');box(2.15,.16,1.8,0,.88,0,brass,map);box(1.96,.025,1.61,0,.98,0,pale,map);
  for(const sx of [-.7,.7])for(const sz of [-.55,.55])box(.08,.86,.08,sx,.43,sz,brass,map);
  for(let i=0;i<6;i++){const road=box(1.7,.012,.02,0,1.005,-.58+i*.23,stone,map);road.rotation.y=(i%2?1:-1)*.24;}
  for(let i=0;i<5;i++){const point=cylinder(.055,.045,-.62+i*.29,1.025,(i%3-1)*.38,mat(0x9f6453),map);point.castShadow=false;}
  addHeritage('fountain',-.4,-3.5,.8);addHeritage('wolf',-3.25,1.6,1.1);addHeritage('lantern',-3.3,-6.6,.82);addHeritage('clock',2.8,-5.5,.9);addHeritage('roses',2.4,-2.8,.8);addHeritage('umbrellas',-.2,6.2,1.05);
  for(const z of [-8.8,-1.8,5.5,12.6])for(const x of [-5.2,5.2]){box(.55,2.9,.55,x,1.45,z,pale);box(.75,.16,.75,x,.12,z,stone);box(.72,.13,.72,x,2.86,z,brass);}
  for(const x of [-4.4,4.4])plant(x,11.8,.9);
  const chandelier=new THREE.Group();chandelier.position.set(0,3.9,.5);scene.add(chandelier);
  for(let i=0;i<12;i++){const a=i*Math.PI/6;const glass=box(.085,.6+(i%3)*.15,.085,Math.cos(a)*.65,-.2-(i%3)*.1,Math.sin(a)*.65,new THREE.MeshStandardMaterial({color:0xffe7b7,emissive:0xb68c47,emissiveIntensity:.25,metalness:.15,roughness:.2}),chandelier);glass.castShadow=false;}
  const ring=mesh(new THREE.TorusGeometry(.66,.035,7,32),brass,chandelier);ring.rotation.x=Math.PI/2;makeWheel();
  const tools=document.createElement('div');tools.className='museum-view-tools';overlay.append(tools);
  button('zoomOut',()=>{lobbyZoom=Math.max(.85,lobbyZoom-.15);updateCamera();positionLabels();},tools,'−');button('zoomIn',()=>{lobbyZoom=Math.min(2.2,lobbyZoom+.15);updateCamera();positionLabels();},tools,'+');button('reset',()=>{lobbyZoom=1;lobbyAzimuth=.45;lobbyTarget.set(0,0,-2);updateCamera();positionLabels();},tools).className='fit';
 }
 function makeRoom(){
  const category=options.categories.find(c=>c.id===options.categoryId)??options.categories[0];lastVisitedCategory=category?.id;
  const activities=options.activities.filter(a=>a.categories.includes(category?.id??''));
  const layout=createRoomLayout(activities.length),halfW=layout.width/2,halfL=layout.length/2;
  roomBounds={minX:-halfW+.18,maxX:halfW-.18,minZ:-halfL+.18,maxZ:halfL-.18};
  const accent=new THREE.Color(category?.color??'#DEC7BD'),night=category?.id==='night';
  const wallMat=mat(night?0x444354:accent.clone().lerp(new THREE.Color(0xf0e6d6),.82));
  const floorMat=mat(category?.id==='cafes'?0x8e7764:0xcbbca6,.8);
  box(layout.width+.8,.25,layout.length+.8,0,-.18,0,stone);box(layout.width,.1,layout.length,0,-.02,0,floorMat);
  const wallH=3.8;
  for(const x of [-halfW,halfW]){box(.35,wallH,layout.length,x,wallH/2,0,wallMat);box(.17,.22,layout.length,x+(x<0?.22:-.22),.17,0,pale);box(.23,.16,layout.length,x+(x<0?.22:-.22),3.35,0,brass);box(.25,.23,layout.length,x+(x<0?.22:-.22),3.56,0,pale);}
  box(layout.width,wallH,.35,0,wallH/2,-halfL,wallMat);box(layout.width,wallH,.35,0,wallH/2,halfL,wallMat);
  box(layout.width,.15,layout.length,0,wallH+.05,0,mat(0xece0ca));
  for(let z=-halfL+1.6;z<halfL;z+=3.2){box(layout.width-.5,.007,.025,0,.04,z,brass);for(const x of [-halfW+.4,halfW-.4])box(.025,.007,layout.length-.4,x,.04,0,brass);}
  const carpet=box(2.35,.018,layout.length-3,0,.055,0,mat(accent.clone().lerp(new THREE.Color(0x847767),.6),.95));carpet.receiveShadow=true;
  for(const x of [-halfW+.22,halfW-.22])for(let z=-halfL+1;z<halfL;z+=6.4){box(.3,3.1,.34,x,1.55,z,pale);box(.4,.12,.46,x,3.1,z,brass);}
  activities.forEach((activity,i)=>{
   const f=layout.frames[i],group=new THREE.Group();group.position.set(f.x,1.7,f.z);group.rotation.y=f.rotation;scene.add(group);
   const frameMat=mat(category?.id==='cafes'?0x75563c:0xbca37b,.42,.32);
   box(2.42,1.83,.12,0,0,0,frameMat,group);box(2.29,1.7,.07,0,0,.08,pale,group);box(2.16,1.56,.055,0,0,.13,frameMat,group);
   const neutral=new THREE.MeshStandardMaterial({color:0xd8d0c1,roughness:.95});
   const image=mesh(new THREE.PlaneGeometry(2.04,1.44),neutral,group);image.position.z=.164;image.castShadow=false;
   const venue=activity.venues.find(v=>v.verified&&v.url&&/^https?:\/\//.test(v.url));
   group.userData={action:'picture',id:activity.id,url:venue?.url,activity};
   const entry:Exhibit={activity,group,frame:frameMat,position:group.position.clone(),url:venue?.url};exhibits.push(entry);
   // Never replace an absent documentary photograph with a stock or generated image.
   if(activity.photo?.path&&!/^(https?:)?\/\//.test(activity.photo.path)){
    const path=`${import.meta.env.BASE_URL}${activity.photo.path.replace(/^\/+/, '')}`;
    new THREE.TextureLoader().load(path,texture=>{
     if(disposed){texture.dispose();return;}texture.colorSpace=THREE.SRGBColorSpace;texture.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());
     const ratio=texture.image.width/texture.image.height,target=2.04/1.44;
     if(ratio>target){texture.repeat.x=target/ratio;texture.offset.x=(1-texture.repeat.x)/2;}else{texture.repeat.y=ratio/target;texture.offset.y=(1-texture.repeat.y)/2;}
     neutral.map=texture;neutral.color.set(0xffffff);neutral.needsUpdate=true;
    },undefined,()=>{});
   }
   const sconce=new THREE.Group();sconce.position.set(f.x+(f.x<0?.08:-.08),2.85,f.z);sconce.rotation.y=f.rotation;scene.add(sconce);box(.55,.07,.2,0,0,.18,brass,sconce);const lightMaterial=new THREE.MeshStandardMaterial({color:0xffe4a6,emissive:0xffce76,emissiveIntensity:.8});box(.4,.04,.14,0,-.04,.18,lightMaterial,sconce);
  });
  // Keep the long culinary circuit clear: benches occupy only the centre strip.
  if(activities.length>8){for(let z=-halfL+6;z<halfL-4;z+=9.6){box(1.7,.15,.72,0,.48,z,linen);for(const x of [-.64,.64])box(.07,.43,.5,x,.22,z,brass);obstacles.push({minX:-.85,maxX:.85,minZ:z-.36,maxZ:z+.36});}}
  else{sofa(0,0,0,.8);obstacles.push({minX:-1.1,maxX:1.1,minZ:-.65,maxZ:.65});}
  for(const x of [-halfW+1,halfW-1]){plant(x,-halfL+1,.9);obstacles.push({minX:x-.35,maxX:x+.35,minZ:-halfL+.65,maxZ:-halfL+1.35});}
  if(category?.id==='food'){addHeritage('beer',0,-halfL+2.5,1);obstacles.push({minX:-.7,maxX:.7,minZ:-halfL+1.8,maxZ:-halfL+3.2});}
  if(category?.id==='nature'){addHeritage('roses',0,-halfL+2.2,.85);obstacles.push({minX:-.8,maxX:.8,minZ:-halfL+1.8,maxZ:-halfL+2.6});}
  if(category?.id==='history'){addHeritage('wolf',0,-halfL+2.2,.95);obstacles.push({minX:-.9,maxX:.9,minZ:-halfL+1.65,maxZ:-halfL+2.75});}
  if(category?.id==='relax'){addHeritage('fountain',0,-halfL+2.3,.7);obstacles.push({minX:-.9,maxX:.9,minZ:-halfL+1.4,maxZ:-halfL+3.2});}
  if(category?.id==='kids')addHeritage('umbrellas',0,-halfL+1.8,1);
  if(category?.id==='culture'){addHeritage('clock',0,-halfL+2.2,.85);obstacles.push({minX:-1,maxX:1,minZ:-halfL+1.2,maxZ:-halfL+3.2});}
  if(category?.id==='night'){addHeritage('lantern',0,-halfL+2.2,.85);obstacles.push({minX:-.4,maxX:.4,minZ:-halfL+1.8,maxZ:-halfL+2.6});}
  const exitDoor=box(2.1,2.8,.08,0,1.4,halfL-.22,dark);tagged(exitDoor,'exit');arch(0,halfL-.35,0,1);
  for(let i=0;i<3;i++){const lamp=new THREE.PointLight(night?0xe6b9ac:0xffdfab,night?5:4,Math.max(12,layout.length/1.5),1.3);lamp.position.set(0,3.2,-halfL+(i+.5)*layout.length/3);scene.add(lamp);}
  const previous=savedCameras.get(category?.id??'');
  if(previous){perspective.position.set(previous.x,1.65,previous.z);yaw=previous.yaw;pitch=previous.pitch;}else{perspective.position.set(-2.7,1.65,halfL-2);const nearest=layout.frames.filter(f=>f.x<0).sort((a,b)=>Math.abs(a.z-perspective.position.z)-Math.abs(b.z-perspective.position.z))[0];yaw=nearest?Math.atan2(perspective.position.x-nearest.x,perspective.position.z-nearest.z):0;pitch=0;}
  perspective.rotation.order='YXZ';perspective.rotation.set(pitch,yaw,0);
  const crosshair=document.createElement('div');crosshair.className='museum-crosshair';crosshair.setAttribute('aria-hidden','true');overlay.append(crosshair);
  const hint=document.createElement('div');hint.className='museum-look-hint';hint.textContent=copy[options.lang].look;overlay.append(hint);translated.push({element:hint,key:'look'});
  const joystickPad=document.createElement('div');joystickPad.className='museum-joystick';joystickPad.setAttribute('aria-hidden','true');const knob=document.createElement('span');joystickPad.append(knob);overlay.append(joystickPad);
  let joystickPointer:number|null=null;
  const moveJoystick=(event:PointerEvent)=>{const rect=joystickPad.getBoundingClientRect(),dx=(event.clientX-rect.left-rect.width/2)/38,dz=(event.clientY-rect.top-rect.height/2)/38,length=Math.max(1,Math.hypot(dx,dz));joystick={x:dx/length,z:dz/length};knob.style.transform=`translate(${joystick.x*23}px,${joystick.z*23}px)`;};
  listen(joystickPad,'pointerdown',((event:PointerEvent)=>{if(suspended())return;event.preventDefault();joystickPointer=event.pointerId;joystickPad.setPointerCapture(event.pointerId);moveJoystick(event);}) as EventListener);
  listen(joystickPad,'pointermove',((event:PointerEvent)=>{if(event.pointerId===joystickPointer)moveJoystick(event);}) as EventListener);
  const stopJoystick=()=>{joystick={x:0,z:0};joystickPointer=null;knob.style.transform='';};listen(joystickPad,'pointerup',stopJoystick);listen(joystickPad,'pointercancel',stopJoystick);listen(joystickPad,'lostpointercapture',stopJoystick);
 }

 function updateCamera(){
  const aspect=width/height;
  if(options.mode==='lobby'){
   // Frustum fit accounts for both plan axes after their projection into the view.
   const span=aspect<.7?44:39,viewH=Math.max(span,span/Math.max(aspect,.2));
   ortho.left=-viewH*aspect/2/lobbyZoom;ortho.right=viewH*aspect/2/lobbyZoom;ortho.top=viewH/2/lobbyZoom;ortho.bottom=-viewH/2/lobbyZoom;
   ortho.position.copy(lobbyTarget).add(new THREE.Vector3(Math.sin(lobbyAzimuth)*47,54,Math.cos(lobbyAzimuth)*47));ortho.lookAt(lobbyTarget);ortho.updateProjectionMatrix();ortho.updateMatrixWorld(true);
  }else{
   perspective.aspect=aspect;
   if(options.mode==='wheel'){const distance=aspect<.75?6.4/aspect*.7:6.8;perspective.position.copy(wheelCenter).add(new THREE.Vector3(0,.15,distance));perspective.lookAt(wheelCenter);perspective.fov=48;}
   perspective.updateProjectionMatrix();
  }
 }
 function resize(){const rect=container.getBoundingClientRect();width=Math.max(1,rect.width);height=Math.max(1,rect.height||500);renderer.setSize(width,height,false);updateCamera();positionLabels();}
 function positionLabels(){if(options.mode!=='lobby')return;for(const {button,room}of roomButtons){const p=new THREE.Vector3(room.x,.45,room.z+.4).project(camera);button.style.left=`${(p.x*.5+.5)*100}%`;button.style.top=`${(-p.y*.5+.5)*100}%`;button.style.display=p.z>1?'none':'';}}
 function suspended(){return disposed||document.hidden||activeHeritage!==null||!!document.querySelector('dialog[open]');}
 function pick(clientX:number,clientY:number){const rect=canvas.getBoundingClientRect();pointer.set((clientX-rect.left)/rect.width*2-1,-(clientY-rect.top)/rect.height*2+1);raycaster.setFromCamera(pointer,camera);const hits=raycaster.intersectObjects(scene.children,true);for(const hit of hits){let object:THREE.Object3D|null=hit.object;while(object&&!object.userData.action)object=object.parent;if(object?.userData.action)return object;return null;}return null;}
 function disposeTree(root:THREE.Object3D){
  const geometries=new Set<THREE.BufferGeometry>(),materials=new Set<THREE.Material>(),textures=new Set<THREE.Texture>();
  root.traverse(object=>{if(object instanceof THREE.Mesh){geometries.add(object.geometry);const list=Array.isArray(object.material)?object.material:[object.material];list.forEach(material=>materials.add(material));}});
  materials.forEach(material=>{for(const value of Object.values(material)){if(value instanceof THREE.Texture)textures.add(value);}material.dispose();});geometries.forEach(g=>g.dispose());textures.forEach(t=>t.dispose());
 }
 let storyPreview:(HeritageModel&{id:HeritageId})|undefined;
 const storySession=createStorySession(()=>({
  room:{x:perspective.position.x,y:perspective.position.y,z:perspective.position.z,yaw,pitch},
  lobby:{azimuth:lobbyAzimuth,zoom:lobbyZoom,target:lobbyTarget.clone()},
 }),snapshot=>{
  perspective.position.set(snapshot.room.x,snapshot.room.y,snapshot.room.z);yaw=snapshot.room.yaw;pitch=snapshot.room.pitch;perspective.rotation.set(pitch,yaw,0);
  lobbyAzimuth=snapshot.lobby.azimuth;lobbyZoom=snapshot.lobby.zoom;lobbyTarget.copy(snapshot.lobby.target);updateCamera();positionLabels();
 });
 function releaseStoryPreview(){if(!storyPreview)return;const index=heritage.indexOf(storyPreview);if(index>=0)heritage.splice(index,1);storyPreview.group.removeFromParent();disposeTree(storyPreview.group);storyPreview=undefined;}
 function startStory(id:string){
  if(disposed||options.mode==='wheel'||!['fountain','wolf','lantern','clock','roses','umbrellas','beer'].includes(id)||!storySession.start(id))return;
  clearInput();releaseStoryPreview();let model=heritage.find(item=>item.id===id);
  // The accessible story list can select a sculpture from another room: bring a
  // temporary original model into view, then remove it when narration ends.
  if(!model){const created=createHeritage(id as HeritageId);created.group.position.set(0,.05,Math.max(roomBounds.minZ+2,Math.min(roomBounds.maxZ-2,perspective.position.z-2.5)));created.group.scale.setScalar(.85);scene.add(created.group);storyPreview={...created,id:id as HeritageId};heritage.push(storyPreview);model=storyPreview;}
  activeHeritage=id as HeritageId;heritageStarted=performance.now();
  const target=new THREE.Box3().setFromObject(model.group).getCenter(new THREE.Vector3());
  if(options.mode==='lobby'){lobbyTarget.copy(target);lobbyZoom=2;updateCamera();positionLabels();}
  else {yaw=Math.atan2(perspective.position.x-target.x,perspective.position.z-target.z);pitch=Math.max(-.95,Math.min(.95,Math.atan2(target.y-perspective.position.y,Math.hypot(target.x-perspective.position.x,target.z-perspective.position.z))));perspective.rotation.set(pitch,yaw,0);}
 }
 function endStory(){if(disposed)return;activeHeritage=null;heritageStarted=0;releaseStoryPreview();heritage.forEach(model=>model.animate(0,false));storySession.end();clearInput();if(options.mode==='room')updateProximity();}
 function invoke(object:THREE.Object3D|null){if(!object||suspended())return;const {action,id,url}=object.userData;
  if(action==='picture'){if(url){window.open(url,'_blank','noopener,noreferrer');}return;}
  keys.clear();joystick={x:0,z:0};
  if(action==='category')options.onCategory(id);else if(action==='wheel')options.onWheel();else if(action==='map')options.onMap();else if(action==='story'){startStory(id);options.onStory(id);}else if(action==='exit')exit();
 }
 let drag:{id:number;x:number;y:number;lastX:number;lastY:number;moved:boolean}|null=null;
 listen(canvas,'pointerdown',((event:PointerEvent)=>{if(suspended()||event.button!==0)return;canvas.focus({preventScroll:true});drag={id:event.pointerId,x:event.clientX,y:event.clientY,lastX:event.clientX,lastY:event.clientY,moved:false};canvas.setPointerCapture(event.pointerId);}) as EventListener);
 listen(canvas,'pointermove',((event:PointerEvent)=>{
  if(suspended()){drag=null;return;}
  if(drag&&drag.id===event.pointerId){const dx=event.clientX-drag.lastX,dy=event.clientY-drag.lastY;drag.lastX=event.clientX;drag.lastY=event.clientY;if(Math.hypot(event.clientX-drag.x,event.clientY-drag.y)>5)drag.moved=true;
   if(drag.moved){if(options.mode==='room'){yaw-=dx*.004;pitch=Math.max(-.95,Math.min(.95,pitch-dy*.003));}else if(options.mode==='lobby'){lobbyAzimuth-=dx*.004;updateCamera();positionLabels();}}
  }else{hoverAction=pick(event.clientX,event.clientY);canvas.style.cursor=hoverAction&&(hoverAction.userData.action!=='picture'||hoverAction.userData.url)?'pointer':options.mode==='room'?'grab':'default';}
 }) as EventListener);
 listen(canvas,'pointerup',((event:PointerEvent)=>{if(drag&&drag.id===event.pointerId){const wasDrag=drag.moved;drag=null;if(!wasDrag)invoke(pick(event.clientX,event.clientY));}if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);}) as EventListener);
 listen(canvas,'pointercancel',()=>{drag=null;});
 listen(canvas,'wheel',((event:WheelEvent)=>{if(options.mode!=='lobby'||suspended())return;event.preventDefault();lobbyZoom=Math.min(2.2,Math.max(.85,lobbyZoom-event.deltaY*.001));updateCamera();positionLabels();}) as EventListener,{passive:false});
 const isTextInput=(target:EventTarget|null)=>target instanceof HTMLElement&&(target.matches('input,select,textarea')||target.isContentEditable);
 const inputKeys=['ArrowUp','ArrowDown','ArrowLeft','ArrowRight','w','a','s','d','q','e','W','A','S','D','Q','E'];
 listen(window,'keydown',((event:KeyboardEvent)=>{
  if(suspended()||isTextInput(event.target))return;
  if(event.key==='Escape'){keys.clear();exit();return;}
  if(options.mode==='room'&&inputKeys.includes(event.key)){event.preventDefault();keys.add(event.key.toLowerCase());}
  if(event.key==='Enter'&&event.target===canvas&&activePicture){event.preventDefault();invoke(exhibits.find(e=>e.activity.id===activePicture)?.group??null);}
 }) as EventListener);
 listen(window,'keyup',((event:KeyboardEvent)=>{keys.delete(event.key.toLowerCase());}) as EventListener);
 const clearInput=()=>{keys.clear();joystick={x:0,z:0};drag=null;};listen(window,'blur',clearInput);listen(document,'visibilitychange',clearInput);
 listen(canvas,'webglcontextlost',((event:Event)=>{event.preventDefault();clearInput();fallback();}) as EventListener);
 const observer=new MutationObserver(()=>{if(document.querySelector('dialog[open]'))clearInput();});observer.observe(document.body,{subtree:true,attributes:true,attributeFilter:['open']});cleanups.push(()=>observer.disconnect());
 if(options.mode==='room')makeRoom();else if(options.mode==='wheel'){makeWheel();box(200,.3,200,0,-.2,0,mat(0xdfd4c2));scene.background=new THREE.Color(0xe4dac9);}else makeLobby();
 const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(container);cleanups.push(()=>resizeObserver.disconnect());resize();
 let animation=0,last=performance.now(),proximityTime=0;
 const worldDirection=new THREE.Vector3(),difference=new THREE.Vector3();
 function updateProximity(){perspective.getWorldDirection(worldDirection);const candidates=exhibits.map(e=>{difference.copy(e.position).sub(perspective.position);const distance=difference.length(),dot=difference.normalize().dot(worldDirection);return{id:e.activity.id,distance,dot};});const next=chooseNearbyPicture(candidates,activePicture);if(next===activePicture)return;activePicture=next;for(const e of exhibits){const active=e.activity.id===next;e.frame.emissive.set(active?0xd8ad5c:0x000000);e.frame.emissiveIntensity=active?.28:0;}canvas.setAttribute('aria-label',next?`${copy[options.lang].scene}. ${exhibits.find(e=>e.activity.id===next)!.activity.name[options.lang]}`:copy[options.lang].scene);options.onProximity(exhibits.find(e=>e.activity.id===next)?.activity??null);}
 function frame(now:number){if(disposed)return;animation=requestAnimationFrame(frame);const dt=Math.min(.05,(now-last)/1000);last=now;
  const paused=suspended();
  if(options.mode==='room'&&!paused){
   yaw+=((keys.has('q')?1:0)-(keys.has('e')?1:0))*dt*1.65;
   let strafe=(keys.has('d')||keys.has('arrowright')?1:0)-(keys.has('a')||keys.has('arrowleft')?1:0)+joystick.x;
   let forward=(keys.has('w')||keys.has('arrowup')?1:0)-(keys.has('s')||keys.has('arrowdown')?1:0)-joystick.z;
   const scale=Math.max(1,Math.hypot(strafe,forward));strafe/=scale;forward/=scale;
   const speed=2.6*dt,delta={x:(Math.cos(yaw)*strafe-Math.sin(yaw)*forward)*speed,z:(-Math.sin(yaw)*strafe-Math.cos(yaw)*forward)*speed};
   const position=resolveMovement({x:perspective.position.x,z:perspective.position.z},delta,roomBounds,obstacles,.28);perspective.position.x=position.x;perspective.position.z=position.z;perspective.rotation.set(pitch,yaw,0);
   if(now-proximityTime>90){updateProximity();proximityTime=now;}
  }
  if(spin&&wheelDisk){const t=Math.min(1,(now-spin.start)/spin.duration),eased=t<.12?Math.pow(t/.12,2)*.018:1-Math.pow(1-(t-.12)/.88,3)*.982;wheelDisk.rotation.z=spin.from+(spin.to-spin.from)*eased;if(t>=1)spin=undefined;}
  if(!document.hidden){const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;heritage.forEach(model=>model.animate(reduce?0:now/1000,model.id===activeHeritage&&now-heritageStarted<22000));renderer.render(scene,camera);}
 }
 animation=requestAnimationFrame(frame);
 return {
  startStory,endStory,
  capture(){renderer.render(scene,camera);return canvas.toDataURL('image/png');},
  spinTo(angle:number,duration:number){if(disposed||!wheelDisk)return;const to=wheelAngleRadians(angle),reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;if(reduce||duration<=0){wheelDisk.rotation.z=to;spin=undefined;}else spin={from:wheelDisk.rotation.z,to,start:performance.now(),duration};},
  setLanguage(lang:Lang){options.lang=lang;canvas.setAttribute('aria-label',copy[lang].scene);for(const {element,key,attribute}of translated){if(attribute)element.setAttribute(attribute,copy[lang][key]);else{element.textContent=copy[lang][key];element.setAttribute('aria-label',copy[lang][key]);}}for(const {button,category}of roomButtons){button.querySelector('span')!.textContent=category.name[lang];button.setAttribute('aria-label',`${category.number}. ${category.name[lang]}`);}if(activePicture)options.onProximity(exhibits.find(e=>e.activity.id===activePicture)?.activity??null);},
  dispose(){if(disposed)return;endStory();disposed=true;cancelAnimationFrame(animation);clearInput();cleanups.forEach(fn=>fn());
   if(options.mode==='room'&&options.categoryId)savedCameras.set(options.categoryId,{x:perspective.position.x,z:perspective.position.z,yaw,pitch});
   options.onProximity(null);disposeTree(scene);renderer.dispose();renderer.forceContextLoss();canvas.remove();overlay.remove();style.remove();container.style.position=oldPosition;scene.clear();
  },
 };
}
