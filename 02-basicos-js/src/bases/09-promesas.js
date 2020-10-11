import { getHeroeById } from './bases/08-imp-exp';

// const promise = new Promise((resolve, reject) => {
//   setTimeout( () => {
//     // resolve();
//     const heroe = getHeroeById(4);
//     resolve(heroe)
//     // reject('No se pudo encontrar el heroe');
//   }, 2000)
// });

// promise.then( (heroe) => {
//   console.log('Heroe', heroe)
//   // console.log(`Heroe ${heroe}`)
// })
// .catch(err => console.warn(err))

const getHeroeByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout( () => {
      // resolve();
      const heroe = getHeroeById(id);
      if (heroe) {
        resolve(heroe)
      }

      reject('No se pudo obtener un heroe');
      // reject('No se pudo encontrar el heroe');
    }, 2000)
  });
}

getHeroeByIdAsync(1)
  .then( console.log )
  .catch( console.warn )