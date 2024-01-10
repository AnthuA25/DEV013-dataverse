import { expect } from '@jest/globals';
import { sortData } from '../src/dataFunctions.js';

// import { data as fakeData } from './data.js';
// 1. Fn existe
it('sortData existe', ()=>{
  expect(typeof sortData).toBe('function')
})
// 2. fn funciona (comportamiento deseado)
it('', ()=>{
  const TEST_SORT = [{name:"Bulsaur"},{name:'Abra'},{name:'Caterpie'}];
  const sortBy = 'name';
  const sortOrder = 'asc'
  expect(sortData(TEST_SORT, sortBy, sortOrder )).toEqual([{"name": "Abra"}, {"name": "Bulsaur"}, {"name": "Caterpie"}])
})
// 3. Estresar al test
it('', ()=>{
  const TEST_SORT = [];
  const sortBy = 'name';
  const sortOrder = 'asc'
  // expect(sortData(TEST_SORT, sortBy, sortOrder )).toBe(false)
  expect(sortData(TEST_SORT, sortBy, sortOrder )).toBeFalsy()
})

/**  REVISAR AAA EN TESTING**/

// console.log(fakeData);
// const TEST_SORT = [{name:"Bulsaur"},{name:'Abra'},{name:'Caterpie'}];

// describe('sortData', () => {

//   it.only('should return  `example`', () => {
//     expect(sortData(TEST_SORT)).toEqual([{name:'Abra'},{name:'Bulbasaur'},{name:'Caterpie'}]);
//   });
// });

// describe('filterData', () => {

//   it('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
