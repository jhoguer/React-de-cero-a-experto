import '@testing-library/jest-dom';

import { getUser, getUsuarioActivo } from '../../base/05-funciones';

describe('Pruebas en 05-funciones.js', () => {

  test('getUser debe retornar un objeto', () => {
    
    const userTest = {
      uid: 'ABC123',
      username: 'El_Papi1502'
    }

    const user = getUser();

    expect( user ).toEqual( userTest );

  })

  test('getUsuarioActivo debe recibir un nombre y retornar un obejto con ese nombre como username', () => {
    
    const nombre = 'jhoguerrr';

    const userTest = {
      uid: 'ABC567',
      username: 'jhoguer',
    }

    const user = getUsuarioActivo(nombre);

    expect( user ).toEqual( userTest );
  })
  
  
})