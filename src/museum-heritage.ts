import * as THREE from 'three';
export type HeritageId='fountain'|'wolf'|'lantern'|'clock'|'roses'|'umbrellas'|'beer';
export interface HeritageModel {group:THREE.Group;animate:(time:number,active:boolean)=>void;}

/** Small sculptural interpretations, built from volume rather than image planes. */
export function createHeritage(id:HeritageId):HeritageModel {
 const group=new THREE.Group(); group.userData={action:'story',id};
 const stone=new THREE.MeshStandardMaterial({color:0xd6c5ac,roughness:.7});
 const brass=new THREE.MeshStandardMaterial({color:0xa68140,metalness:.65,roughness:.3});
 const bronze=new THREE.MeshStandardMaterial({color:0x61594c,metalness:.7,roughness:.45});
 const green=new THREE.MeshStandardMaterial({color:0x536b46,roughness:.8});
 const water=new THREE.MeshStandardMaterial({color:0x254e5b,metalness:.35,roughness:.18});
 const cream=new THREE.MeshStandardMaterial({color:0xf5e8d5,roughness:.75});
 const piece=(geometry:THREE.BufferGeometry,material:THREE.Material,x=0,y=0,z=0)=>{const m=new THREE.Mesh(geometry,material);m.position.set(x,y,z);m.castShadow=true;m.receiveShadow=true;group.add(m);return m;};
 const sphere=(r:number,mat:THREE.Material,x:number,y:number,z:number,sx=1,sy=1,sz=1)=>{const m=piece(new THREE.SphereGeometry(r,16,10),mat,x,y,z);m.scale.set(sx,sy,sz);return m;};
 const cylinder=(r:number,h:number,mat:THREE.Material,x=0,y=h/2,z=0)=>piece(new THREE.CylinderGeometry(r,r,h,32),mat,x,y,z);
 let animate:HeritageModel['animate']=()=>{};
 if(id==='fountain'){
  cylinder(1.23,.22,stone);cylinder(1.08,.12,water,0,.27);cylinder(.26,.72,stone,0,.6);cylinder(.67,.13,stone,0,.98);cylinder(.56,.06,water,0,1.07);
  const fishes:THREE.Object3D[]=[];
  for(let i=0;i<4;i++){const a=i*Math.PI/2,x=Math.cos(a)*.7,z=Math.sin(a)*.7;const fish=sphere(.24,bronze,x,.52,z,1,.5,.45);fish.rotation.y=-a;fishes.push(fish);const tail=piece(new THREE.ConeGeometry(.15,.28,3),bronze,x-Math.cos(a)*.25,.52,z-Math.sin(a)*.25);tail.rotation.z=-Math.PI/2;}
  const stream=piece(new THREE.CylinderGeometry(.025,.07,.65,10),new THREE.MeshStandardMaterial({color:0x9ec8cf,transparent:true,opacity:.7}),0,1.4,0);
  animate=(t,a)=>{fishes.forEach((f,i)=>f.position.y=.52+Math.sin(t*(a?3:.8)+i)*.035);stream.scale.y=1+Math.sin(t*2)*.04;};
 }else if(id==='wolf'){
  piece(new THREE.BoxGeometry(1.7,.27,.8),stone,0,.14);const body=sphere(.51,bronze,0,.95,0,1.1,.62,.42);
  for(const x of [-.36,.34])for(const z of [-.16,.16]){const leg=piece(new THREE.CylinderGeometry(.065,.085,.63,10),bronze,x,.56,z);leg.rotation.z=x<0?.14:-.1;}
  const head=new THREE.Group();head.position.set(.53,1.22,0);group.add(head);
  const skull=new THREE.Mesh(new THREE.SphereGeometry(.24,16,12),bronze);skull.scale.set(1,.9,.75);head.add(skull);
  const snout=new THREE.Mesh(new THREE.ConeGeometry(.13,.38,10),bronze);snout.rotation.z=-Math.PI/2;snout.position.set(.23,-.05,0);head.add(snout);
  for(const z of [-.12,.12]){const ear=new THREE.Mesh(new THREE.ConeGeometry(.1,.25,3),bronze);ear.position.set(-.04,.24,z);head.add(ear);}
  const tail=piece(new THREE.CylinderGeometry(.035,.06,.6,8),bronze,-.62,.92,0);tail.rotation.z=-.85;
  for(const x of [-.18,.18]){sphere(.11,bronze,x,.37,.16);sphere(.075,bronze,x,.55,.16);}
  animate=(t,a)=>{body.scale.y=.62+Math.sin(t*(a?1.6:.8))*.016;head.rotation.y=Math.sin(t*.6)*(a?.3:.06);};
 }else if(id==='lantern'){
  cylinder(.35,.15,stone);cylinder(.1,2.22,bronze,0,1.18);cylinder(.18,.08,brass,0,2.3);
  const glow=new THREE.MeshStandardMaterial({color:0xffe4a0,emissive:0xffbd5e,emissiveIntensity:.8,roughness:.3});
  piece(new THREE.BoxGeometry(.42,.65,.42),glow,0,2.6);
  for(const x of [-.25,.25])for(const z of [-.25,.25])piece(new THREE.BoxGeometry(.045,.75,.045),bronze,x,2.6,z);
  const cap=piece(new THREE.ConeGeometry(.44,.35,4),bronze,0,3.1);cap.rotation.y=Math.PI/4;cylinder(.3,.08,bronze,0,2.22);
  const light=new THREE.PointLight(0xffd795,1,5);light.position.set(0,2.6,0);group.add(light);
  animate=(t,a)=>{glow.emissiveIntensity=a?1.25+Math.sin(t*1.8)*.15:.55;light.intensity=a?2:1;};
 }else if(id==='clock'){
  const base=cylinder(1.1,.2,stone);base.position.y=.1;const face=cylinder(.98,.06,green,0,.23);
  const hands:THREE.Mesh[]=[];
  for(let i=0;i<12;i++){const a=i*Math.PI/6;const rose=sphere(.075,new THREE.MeshStandardMaterial({color:i%2?0xd4ae73:0xae5b57}),Math.sin(a)*.83,.3,Math.cos(a)*.83);rose.scale.y=.45;}
  for(const length of [.55,.76]){const h=piece(new THREE.BoxGeometry(.045,.025,length),brass,0,.32,-length/2);const pivot=new THREE.Group();pivot.position.y=.32;h.position.y=0;group.remove(h);pivot.add(h);group.add(pivot);hands.push(h);}
  cylinder(.085,.05,brass,0,.36);
  animate=(t,a)=>{hands[0].parent!.rotation.y=.9+(a?t*.09:t*.005);hands[1].parent!.rotation.y=2.4+(a?t*.24:t*.01);face.rotation.y=0;};
 }else if(id==='roses'){
  piece(new THREE.BoxGeometry(1.45,.42,.65),stone,0,.21);const flowers:THREE.Mesh[]=[];
  for(let i=0;i<7;i++){const x=(i%4-.5)*.3-.3,z=i<4?-.12:.12,h=.7+(i%3)*.18;piece(new THREE.CylinderGeometry(.018,.024,h,7),green,x,.4+h/2,z);const roseMat=new THREE.MeshStandardMaterial({color:i%2?0xba5d66:0xdc9387,roughness:.65});const f=sphere(.15,roseMat,x,.4+h,z);flowers.push(f);for(let k=0;k<5;k++){const a=k*Math.PI*.4;sphere(.1,roseMat,x+Math.cos(a)*.105,.4+h+.02,z+Math.sin(a)*.105,1,.7,1);}sphere(.1,green,x+.1,.4+h/2,z,1,.3,1);}
  animate=(t,a)=>flowers.forEach((f,i)=>f.scale.setScalar(1+Math.sin(t*(a?1:.2)+i)*(a?.12:.02)));
 }else if(id==='umbrellas'){
  const umbrellas:THREE.Group[]=[];
  [0xd98b74,0x84aa9c,0xe3bf68,0xae9abd,0x83a8bb].forEach((color,i)=>{
   const u=new THREE.Group();u.position.set((i%3-1)*.7,1.6+(i%2)*.35,(Math.floor(i/3)-.5)*.7);group.add(u);umbrellas.push(u);
   const canopy=new THREE.Mesh(new THREE.ConeGeometry(.53,.22,10,1,true),new THREE.MeshStandardMaterial({color,side:THREE.DoubleSide,roughness:.8}));u.add(canopy);
   const shaft=new THREE.Mesh(new THREE.CylinderGeometry(.013,.013,.7,6),brass);shaft.position.y=-.3;u.add(shaft);
   const hook=new THREE.Mesh(new THREE.TorusGeometry(.09,.013,5,12,Math.PI),brass);hook.position.set(.09,-.64,0);hook.rotation.z=Math.PI;u.add(hook);
  });
  animate=(t,a)=>umbrellas.forEach((u,i)=>{u.rotation.z=Math.sin(t*(a?1.1:.35)+i)*(a?.15:.04);});
 }else if(id==='beer'){
  cylinder(.65,.2,stone);const amber=new THREE.MeshStandardMaterial({color:0xb77721,metalness:.05,roughness:.25});
  cylinder(.41,1.02,amber,0,.73);cylinder(.43,.17,cream,0,1.28);
  const handle=piece(new THREE.TorusGeometry(.34,.07,9,24),brass,.48,.77,0);handle.scale.y=1.15;
  const bubbles:THREE.Mesh[]=[];
  for(let i=0;i<9;i++){const b=sphere(.035+(i%3)*.01,cream,(Math.random()-.5)*.5,.4+(i%4)*.2,.35);bubbles.push(b);}
  animate=(t,a)=>bubbles.forEach((b,i)=>{b.position.y=.35+((t*(a?.3:.08)+i*.13)%1)*.82;b.scale.setScalar(a?1:.7);});
 }
 return {group,animate};
}
