const persona = {
  nombre: 'Tony',
  apellido: 'Stark',
  edad: 45,
  direccion: {
    ciudad: 'New York',
    zip: 576567757,
    lat: 14.562324,
    lng: 34.456467
  }
};

// console.table({ persona })
console.log(persona);

const persona2 = persona;
persona2.nombre = 'Peter';
console.log(persona2);

const persona3 = { ...persona }

console.log(persona3)

persona3.nombre = 'jhon';
console.log(persona3)
console.log(persona);