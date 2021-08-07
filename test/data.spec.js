import {filtroDirector } from '../src/data.js';
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
    expect(() => data.filtroDirector(data,'Flor Jardinez')).toThrow(TypeError);
    expect(() => data.filtroDirector(null, [])).toThrow(TypeError);
    expect(() => data.filtroDirector(0, 0)).toThrow(TypeError);
  });

  it('should return an object  after having selected "Hiroyuki Morita" ', () => {//mockups
    expect(filtroDirector(data, 'Hiroyuki Morita')).toStrictEqual([{"description": "Haru, a schoolgirl bored by her ordinary routine, saves the life of an unusual cat and suddenly her world is transformed beyond anything she ever imagined. The Cat King rewards her good deed with a flurry of presents, including a very shocking proposal of marriage to his son! Haru embarks on an unexpected journey to the Kingdom of Cats where her eyes are opened to a whole other world.", "director": "Hiroyuki Morita", "id": "90b72513-afd4-4570-84de-a56c312fdf81", "locations": [{"climate": "Continental", "id": "a8bd9c03-7c80-4a97-b7c0-6a668acaf576", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/a/a9/Baron022.jpg", "name": "The Cat Kingdom", "residents": [{"id": "6b3facea-ea33-47b1-96ce-3fc737b119b8", "name": "Renaldo Moon aka Moon aka Muta"}, {"id": "3042818d-a8bb-4cba-8180-c19249822d57", "name": "Cat King"}, {"id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6", "name": "Yuki"}, {"id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92", "name": "Haru"}], "surface_water": "30", "terrain": "Plain"}], "people": [{"age": "NA", "eye_color": "White", "gender": "Male","hair_color": "Beige", "id": "6b3facea-ea33-47b1-96ce-3fc737b119b8", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/e7/Muta.png", "name": "Renaldo Moon aka Moon aka Muta", "specie": "Cat"}, {"age": "87", "eye_color": "Emerald", "gender": "Male", "hair_color": "Grey", "id": "3042818d-a8bb-4cba-8180-c19249822d57", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/3/34/The_Cat_King.jpg", "name": "Cat King", "specie": "Cat"}, {"age": "NA", "eye_color": "Blue", "gender": "Female", "hair_color": "White", "id": "58d1973f-f247-47d7-9358-e56cb0d2b5a6", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/e/eb/New_queen%2C_Yuki.JPG", "name": "Yuki", "specie": "Cat"}, {"age": "17", "eye_color": "Brown", "gender": "Female", "hair_color": "Brown", "id": "a3d8e70f-46a0-4e5a-b850-db01620d6b92", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/2/27/Haru_Yoshioka.jpg", "name": "Haru Yoshioka", "specie": "Human"}, {"age": "NA", "eye_color": "Blue", "gender": "Male", "hair_color": "Grey", "id": "466bc926-2024-4653-ac63-fe52f2dc8c7b", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c4/Natori.jpg", "name": "Natori", "specie": "Cat"}, {"age": "NA", "eye_color": "Black", "gender": "Male", "hair_color": "Dark Blue", "id": "269dcd81-8037-45bb-892b-1c86c9696222", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/8/8d/Toto.png", "name": "Toto", "specie": "Bird"}, {"age": "Adult", "eye_color": "Dark brown", "gender": "Male", "hair_color": "Russian blue", "id": "5b2a28f6-91d4-4382-aedc-b27094e763b0", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/9/90/Prince_Lune.jpg", "name": "Prince Lune", "specie": "Cat"}, {"age": "17", "eye_color": "Brown", "gender": "Female", "hair_color": "Light brown", "id": "17aca709-3049-48fc-95a6-e802c01125a2", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Hiromi.png", "name": "Hiromi", "specie": "Human"}, {"age": "Adult", "eye_color": "Light Brown", "gender": "Female", "hair_color": "Light brown", "id": "911d38e2-ada4-4481-89a2-ba414422d4e4", "img": "https://static.wikia.nocookie.net/studio-ghibli/images/6/64/Naoko_Yoshioka.jpg", "name": "Naoko Yoshioka", "specie": "Human"}], "poster": "https://static.wikia.nocookie.net/studio-ghibli/images/8/87/The_Cat_Returns.jpg", "producer": "Toshio Suzuki", "release_date": "2002", "rt_score": "89", "title": "The Cat Returns", "vehicles": []}]);
  });

  it('should return all data films after having selected "Order by Director" ', () => {
    expect(filtroDirector(data, '1')).toStrictEqual(data.films);
  });

  
});

 /* it('returns `example`', () => {
    expect(filtroDirector()).toBe('example');
  });
});*/





/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/

