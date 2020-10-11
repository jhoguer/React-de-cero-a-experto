import heroes, { owners } from './data/heroes';

console.log( owners );

// find
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

console.log( getHeroeById(3).name );


// filter
const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

console.log(getHeroesByOwner('Marvel'))