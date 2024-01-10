import { example, anotherExample } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';

console.log(fakeData);
 const TEST_SORT = ;

describe('sortData', () => {

  it('should return  `example`', () => {
    expect(example()).toBe('example');
  });
});

describe('filterData', () => {

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
