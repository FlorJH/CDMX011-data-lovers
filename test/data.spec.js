import { filtroDirector, filterProducer, filterByScore, filterByMovie, filterABC, filterByGender, filterBySpecie} from '../src/data.js';
import { yamadas, morita, producerByToru, movieByScore, totoros, wolf, abcz} from './helpers.js'
//filtroByMovie, filtroProductor

import data from '../src/data/ghibli/ghibli.js';

describe('ghibli', () => {
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

  
  it('should return all data films after having selected "Order by Score" ', () => {
    expect(filterProducer(data, '1')).toStrictEqual(data.films);
  });
});


describe('filterByMovie', () => {
  it('iis a function', () =>{
    expect(typeof filterByMovie).toBe('function');
  });
  it('should return "people from yamadas movie" after having selected  My Neighbors the Yamadas', () => {
    expect(filterByMovie(data, 'My Neighbors the Yamadas')).toStrictEqual(yamadas);
  });
  
});

describe('filterByGender', () => {
  it('is a function', () => {
    expect(typeof filterByGender).toBe('function');
  });
  it('should return "Litle Totoro" after having selected  NA', () => {
    expect(filterByGender(data, 'NA')).toStrictEqual(totoros);
  });
});

describe('filterBySpecie', () => {
  it('is a function', () => {
    expect(typeof filterBySpecie).toBe('function');
  });
  it('should return "Moro" after having selected  Wolf', () => {
    expect(filterBySpecie(data, 'Wolf')).toStrictEqual(wolf);
  });
});
describe('filterABC', () => {
  it('is a function', () => {
    expect(typeof filterABC).toBe('function');
  });  
});
describe('function ordenado', () => {
it('A-Z', () => {
    const filterAZ=filterABC(abcz)
    expect(filterAZ).toHaveLength(3);
  });
});
