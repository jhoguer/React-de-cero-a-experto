import '@testing-library/jest-dom';

import { retornaArreglo } from '../../base/07-deses-arr';

describe('Pruebas en desestructuracion', () => {

  test('debe de retornar un string y un numero', () => {

    const [ letras, numeros ] = retornaArreglo();


    expect( letras ).toEqual( 'ABC' );
    expect( typeof letras ).toEqual( 'string' );

    expect( numeros ).toBe( 123 );
    expect( typeof numeros ).toBe( 'number' )
  })
})