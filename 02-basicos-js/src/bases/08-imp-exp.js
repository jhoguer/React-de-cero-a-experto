import heroes, { owners } from './data/heroes';


// find
export const getHeroeById = (id) => heroes.find( (heroe) => heroe.id === id );



// filter
export const getHeroesByOwner = ( owner ) => heroes.filter( (heroe) => heroe.owner === owner );

