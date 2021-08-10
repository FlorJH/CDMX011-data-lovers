import { filtroDirector, filterProducer, filterByScore } from '../src/data.js';
import { morita, producerByToru, movieByScore } from './helpers.js'
//filtroByMovie, filtroProductor

import data from '../src/data/ghibli/ghibli.js';

describe('data', () => {
  it('should be an object', () => {
    expect(typeof data).toBe('object');
  });

  it('Data should contain Studio Ghibli Inc. ', () => {
    expect(data.studio).toContain('Studio Ghibli Inc.');
  });

});

describe('filtroDirector', () => {
  it('is a function', () => {
    expect(typeof filtroDirector).toBe('function');
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => data.filtroDirector()).toThrow(TypeError);
    expect(() => data.filtroDirector(data, 'Flor Jardinez')).toThrow(TypeError);
    expect(() => data.filtroDirector(null, [])).toThrow(TypeError);
    expect(() => data.filtroDirector(0, 0)).toThrow(TypeError);
  });

  it('should return an object  after having selected "Hiroyuki Morita" ', () => {//mockups
    expect(filtroDirector(data, 'Hiroyuki Morita')).toStrictEqual(morita);
  });

  it('should return all data films after having selected "Order by Director" ', () => {
    expect(filtroDirector(data, '1')).toStrictEqual(data.films);
  });


});


describe('filterProducer', () => {
  it('is a function', () => {
    expect(typeof filterProducer).toBe('function');
  });

  it('should return all data films after having selected "Order by Producer" ', () => {
    expect(filterProducer(data, '1')).toStrictEqual(data.films);
  });

  it('should return an object "Grave of the fireflies" after having selected "Toru Hara" ', () => {
    expect(filterProducer(data, 'Toru Hara')).toStrictEqual(producerByToru);
  });

});

describe('filterByScore', () => {
  it('is a function', () => {
    expect(typeof filterByScore).toBe('function');
  });

  it('should return "Tales form Earthsea" films after having selected a score "Not good" ', () => {
    expect(filterByScore(data, 'NotGood')).toStrictEqual(movieByScore);
  });

  it('should return "Tales form Earthsea" films after having selected a score "Not good" ', () => {
    expect(filterByScore(data, 'NotGood')).toStrictEqual(movieByScore);
  });

  it('should return all data films after having selected "Order by Score" ', () => {
    expect(filterProducer(data, '1')).toStrictEqual(data.films);
  });


});


/*describe('filterByMovie', () => {

});

describe('filterABC', () => {

});

describe('filterByGender', () => {

});

describe('filterBySpecie', () => {

});*/