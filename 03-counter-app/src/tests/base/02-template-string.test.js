import '@testing-library/jest-dom';

import { getSaludo } from '../../base/02-template-string';

describe('Pruebas en 02-template-string.js', () => {

  test('getSaludo debe retornar hola Jhon!', () => {

    const nombre = 'Jhon';

    const saludo = getSaludo( nombre );

    expect( saludo ).toBe( 'Hola ' + nombre + '!' );
  })

  // getSaludo debe retornar Hola Carlos! sino hay argumento nombre
  test('getSaludo debe retornar hola Carlos! sino hay argumentos', () => {
    
    const saludo = (getSaludo());

    expect( saludo ).toBe( 'Hola Carlos!' );
  })
  
  
})