import '@testing-library/jest-dom'

import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../data/heroes';

describe('Pruebas en funciones de Heroes', () => {

  test('debe de retornar un heroe por id', () => {
    
    const id = 1;
    const heroe = getHeroeById( id )

    const heroesData = heroes.find( h => h.id === id )

    expect( heroe ).toEqual( heroesData );
  })

  test('debe de retornar undefined si el heroe no existe', () => {
    
    const id = 10;
    const heroe = getHeroeById( id )

 
    expect( heroe ).toBe( undefined );
  })

  // debe de retornar un arreglo con los heores de DC
  // owner
  // toEqual al arreglo filtrado
  test('debe de retornar un arreglo con los heores de DC', () => {
    
    const owner = 'DC';
    const heroes = getHeroesByOwner( owner )

    console.log(heroes)

    const heroesData = heroes.filter( h => h.owner === owner )

    expect( heroes ).toEqual( heroesData );
  })

  // debe de retornar un arreglo con los heroes de Marvel
  // lengh = 2  // toBe
  test('debe de retornar un arreglo con los heores de Marvel', () => {
    
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner )

    console.log(heroes.length)

    expect( heroes.length ).toBe( 2 );
  })
})