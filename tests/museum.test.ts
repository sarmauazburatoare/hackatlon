import {describe,expect,it} from 'vitest';
import {resolveMovement,chooseNearbyPicture,createRoomLayout,wheelAngleRadians} from '../src/museum-math';

describe('museum navigation',()=>{
 it('stops before all wall boundaries while allowing motion along a wall',()=>{
  const bounds={minX:-5,maxX:5,minZ:-6,maxZ:6};
  expect(resolveMovement({x:4.7,z:0},{x:2,z:1},bounds,[],.3)).toEqual({x:4.7,z:1});
  expect(resolveMovement({x:0,z:-5.7},{x:1,z:-2},bounds,[],.3)).toEqual({x:1,z:-5.7});
 });
 it('prevents tunnelling through furniture and lets the visitor slide around it',()=>{
  const bounds={minX:-8,maxX:8,minZ:-8,maxZ:8};
  const obstacle={minX:-1,maxX:1,minZ:-1,maxZ:1};
  const stopped=resolveMovement({x:-3,z:0},{x:7,z:0},bounds,[obstacle],.3);
  expect(stopped.x).toBeLessThanOrEqual(-1.3);
  expect(resolveMovement({x:-1.4,z:0},{x:1,z:2},bounds,[obstacle],.3).z).toBeGreaterThan(1.8);
 });
 it('holds one looked-at picture through the exit threshold before switching',()=>{
  const seen=[{id:'first',distance:2.3,dot:.9},{id:'second',distance:1.9,dot:.95}];
  expect(chooseNearbyPicture(seen,'first')).toBe('first');
  expect(chooseNearbyPicture([{id:'first',distance:2.7,dot:.9},seen[1]],'first')).toBe('second');
  expect(chooseNearbyPicture([{id:'away',distance:1.2,dot:.2}],null)).toBeNull();
 });
 it('gives every culinary exhibit a separated position with room to approach',()=>{
  const layout=createRoomLayout(19);
  expect(layout.frames).toHaveLength(19);
  for(let i=0;i<layout.frames.length;i++)for(let j=i+1;j<layout.frames.length;j++){
   const a=layout.frames[i],b=layout.frames[j];
   expect(Math.hypot(a.x-b.x,a.z-b.z)).toBeGreaterThan(2.7);
  }
  expect(layout.frames.every(f=>Math.abs(f.z)<layout.length/2-1)).toBe(true);
 });
 it('maps clockwise CSS rotations to the matching three-dimensional wheel direction',()=>{
  expect(wheelAngleRadians(0)).toBe(0);
  expect(wheelAngleRadians(40)).toBeCloseTo(-Math.PI*2/9);
  expect(wheelAngleRadians(360)).toBeCloseTo(-Math.PI*2);
 });
});

describe('heritage story camera session',()=>{
 it('restores the original viewpoint once when DOM and raycast both start the same story',async()=>{
  const {createStorySession}=await import('../src/museum-math');
  const original={x:2.4,z:-6.1,yaw:.73,pitch:-.18,zoom:1.35,target:{x:1,y:.4,z:-2}};
  let view=structuredClone(original),restores=0;
  const session=createStorySession(()=>structuredClone(view),snapshot=>{view=snapshot;restores++;});
  expect(session.start('wolf')).toBe(true);
  view={x:0,z:0,yaw:1.2,pitch:.1,zoom:2,target:{x:3,y:.7,z:1}};
  expect(session.start('wolf')).toBe(false);
  expect(session.active).toBe('wolf');
  session.end();
  expect(view).toEqual(original);expect(session.active).toBeNull();expect(restores).toBe(1);
  session.end();expect(restores).toBe(1);
 });
 it('keeps the first viewpoint while switching stories, then takes a fresh snapshot next time',async()=>{
  const {createStorySession}=await import('../src/museum-math');
  let viewpoint=7;
  const session=createStorySession(()=>viewpoint,snapshot=>{viewpoint=snapshot;});
  session.start('clock');viewpoint=12;session.start('lantern');viewpoint=18;session.end();
  expect(viewpoint).toBe(7);
  viewpoint=25;session.start('roses');viewpoint=30;session.end();expect(viewpoint).toBe(25);
 });
});
