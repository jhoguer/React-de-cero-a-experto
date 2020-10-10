
// Desestructuracion
// Asignacion desestructurante
const persona = {
  nombre: 'Tony',
  edad: 45,
  clave: 'Ironman',
}

// const { nombre } = persona
// const { edad } = persona
// const { clave } = persona

const { nombre, edad, clave } = persona;

console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.clave)

console.log(nombre)
console.log(edad)
console.log(clave)

const useContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
  // console.log(nombre, edad, rango)
  return {
    nombreClave: clave,
    anios: edad,
    latlng: {
      lat: 14.56757,
      lng: -12.446677,
    }
  }
}

const { nombreClave, anios, latlng: { lat, lng } } = useContext( persona );
console.log( nombreClave, anios );
console.log( lat, lng );