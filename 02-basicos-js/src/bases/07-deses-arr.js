const personajes = ['Goku', 'Vegeta', 'Trunks'];

// console.log( personajes[0]);

const [ , , p3 ] = personajes;

console.log(p3)

const returnaArreglo = () => {
  return ['ABC', 123];
}

const [ letras, numeros ] = returnaArreglo();

console.log( letras, numeros )

// Tareas
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre
const useState = ( valor ) => {
  return [ valor, () => { console.log(`Hola Mundo ${valor}`) } ];
}

const arr = useState( 'Goku' );

const [ nombre, setNombre ] = arr;

console.log( nombre )

setNombre();