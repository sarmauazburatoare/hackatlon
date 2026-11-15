import { describe, expect, it } from 'vitest';
import { locations, searchLocations, MAP_BOUNDS } from '../src/location';

describe('offline location search',()=>{
 it('finds real Romanian names with and without Romanian comma or cedilla accents',()=>{
  expect(searchLocations('unirii').some(l=>l.label==='Piața Unirii')).toBe(true);
  expect(searchLocations('Gheorghe Lazar').some(l=>l.label==='Strada Gheorghe Lazăr')).toBe(true);
  expect(searchLocations('Timişoara').length).toBeGreaterThan(0);
  expect(searchLocations('TIMIȘOARA').length).toBeGreaterThan(0);
 });
 it('gives identifiable locality and precision for ambiguous central or Martirilor searches',()=>{
  const central=searchLocations('Centru');
  expect(central.some(l=>l.label.includes('Cetate') && l.precision==='area')).toBe(true);
  const streets=searchLocations('Martirilor');
  expect(streets.some(l=>l.label.includes('Martirilor') && l.precision==='street')).toBe(true);
  expect([...central,...streets].every(l=>l.detail.includes('Timișoara'))).toBe(true);
 });
 it('supports multiword streets and available house numbers without inventing missing numbers',()=>{
  expect(searchLocations('Lazar 8').some(l=>l.label==='Strada Gheorghe Lazăr 8')).toBe(true);
  expect(searchLocations('Lazar 99999')).toEqual([]);
  expect(searchLocations('unmapped-never-a-real-road')).toEqual([]);
 });
 it('includes nearby catalog settlements with honest area precision',()=>{
  expect(searchLocations('Herneacova').some(l=>l.label==='Herneacova' && l.precision==='area')).toBe(true);
  expect(searchLocations('Mosnita Noua').some(l=>l.label==='Moșnița Nouă' && l.precision==='area')).toBe(true);
  expect(searchLocations('Dumbravita').some(l=>l.label==='Dumbrăvița' && l.precision==='area')).toBe(true);
 });
 it('returns a bounded useful suggestion list and no list for an empty query',()=>{
  expect(searchLocations('')).toEqual([]);
  expect(searchLocations('  ')).toEqual([]);
  expect(searchLocations('a').length).toBeLessThanOrEqual(12);
 });
 it('keeps every search point valid, identifiable and inside the adjustable map coverage',()=>{
  expect(locations.length).toBeGreaterThan(100);
  expect(new Set(locations.map(l=>l.id)).size).toBe(locations.length);
  for(const l of locations){
   expect(Number.isFinite(l.lat) && Number.isFinite(l.lon)).toBe(true);
   expect(l.lat).toBeGreaterThanOrEqual(MAP_BOUNDS.south);
   expect(l.lat).toBeLessThanOrEqual(MAP_BOUNDS.north);
   expect(l.lon).toBeGreaterThanOrEqual(MAP_BOUNDS.west);
   expect(l.lon).toBeLessThanOrEqual(MAP_BOUNDS.east);
   expect(l.label.trim().length).toBeGreaterThan(0);
   expect(l.detail.trim().length).toBeGreaterThan(0);
  }
 });
});
