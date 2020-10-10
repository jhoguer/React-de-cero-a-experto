import { heroes } from './bases/data/heroes';


// find
const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );

console.log( getHeroeById(3).name );


// filter
const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

console.log(getHeroesByOwner('Marvel'))