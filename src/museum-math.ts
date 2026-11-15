/** Pure spatial rules shared by the museum and navigation checks. */
export interface Point2 {x:number;z:number;}
export interface Bounds2 {minX:number;maxX:number;minZ:number;maxZ:number;}
export interface NearbyPicture {id:string;distance:number;dot:number;}

/** Swept small steps prevent furniture tunnelling; independent axes permit sliding. */
export function resolveMovement(position:Point2,delta:Point2,bounds:Bounds2,obstacles:Bounds2[],radius=.3):Point2 {
 const result={...position};
 const steps=Math.max(1,Math.ceil(Math.hypot(delta.x,delta.z)/Math.max(.06,radius*.45)));
 const canStand=(x:number,z:number)=>!obstacles.some(o=>x>o.minX-radius&&x<o.maxX+radius&&z>o.minZ-radius&&z<o.maxZ+radius);
 for(let i=0;i<steps;i++){
  const x=Math.max(bounds.minX+radius,Math.min(bounds.maxX-radius,result.x+delta.x/steps));
  if(canStand(x,result.z))result.x=x;
  const z=Math.max(bounds.minZ+radius,Math.min(bounds.maxZ-radius,result.z+delta.z/steps));
  if(canStand(result.x,z))result.z=z;
 }
 return result;
}

/** Keep the current frame through a wider exit cone and distance to avoid flicker. */
export function chooseNearbyPicture(candidates:NearbyPicture[],previousId:string|null,enter=2.15,exit=2.6):string|null {
 const held=candidates.find(c=>c.id===previousId&&c.distance<=exit&&c.dot>=.52);
 if(held)return held.id;
 return candidates.filter(c=>c.distance<=enter&&c.dot>=.72).sort((a,b)=>(a.distance+(1-a.dot)*2)-(b.distance+(1-b.dot)*2))[0]?.id??null;
}

export function createRoomLayout(count:number){
 const width=12,rows=Math.ceil(count/2),length=Math.max(12,rows*3.2+4);
 return {width,length,frames:Array.from({length:count},(_,i)=>({x:i%2===0?-width/2+.24:width/2-.24,z:-length/2+3+Math.floor(i/2)*3.2,rotation:i%2===0?Math.PI/2:-Math.PI/2}))};
}

/** Three's positive Z rotation runs counterclockwise when the wheel faces the camera. */
export function wheelAngleRadians(angle:number):number{return angle===0?0:-angle*Math.PI/180;}

/** One original viewpoint per narration session, even when two UI paths select it. */
export function createStorySession<T>(capture:()=>T,restore:(snapshot:T)=>void){
 let original:{snapshot:T}|null=null,active:string|null=null;
 return {
  get active(){return active;},
  start(id:string){if(active===id)return false;if(!original)original={snapshot:capture()};active=id;return true;},
  end(){if(!original)return;const snapshot=original.snapshot;original=null;active=null;restore(snapshot);},
 };
}
