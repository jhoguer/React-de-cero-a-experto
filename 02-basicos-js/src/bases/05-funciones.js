const saludar = function ( nombre ) {
  return `Hola, ${ nombre }`;
}

const saludar2 = ( nombre ) => {
  return `Hola, ${ nombre }`;
}

const saludar3 = nombre => `Hola, ${ nombre }`;

console.log(saludar('Goku'));
console.log(saludar2('Vegeta'));
console.log(saludar3('Freezer'));

const getUser = () => ({
    uid: 'ASWS##2',
    username: 'El_Papi123'
  });

console.log( getUser() );



function getUserActivo( nombre ) {
  return {
    uid: 'AED3453',
    username: nombre,
  }
}

const usuarioActivo = getUserActivo('Jhon');
console.log( usuarioActivo );


const getUserActivo1 = ( nombre ) => (
  {
    uid: 'AEJ5334',
    username: nombre,
  }
);

const usuarioActivo2 = getUserActivo1('Leider')
console.log( usuarioActivo2 );

