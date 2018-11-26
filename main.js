// // VALOR Y REFERENCIA
// // let persona = {
// //   nombre: 'angelo'
// // };

// // let otro = persona

// // let otraPersona = {
// //   ...persona
// // }

// // // Cambio por referencia
// // // otro.nombre = 'XD';

// // // Cambio por valor
// // otraPersona.nombre = '-_-'

// // console.log(otraPersona, persona)


// // SEPARACION DE LOGICA EN FUNCIONES

// const angelo = {
//   nombre: 'angelo',
//   apellido: 'luna',
//   edad: 12,
//   peso: 72
// }

// const MAYORIA_DE_EDAD = 18

// // Se pueden obviar caracteres en caso de que solo se retorne una cosa y solo se reciba un parametro
// // const esMayor = (persona) =>{
// //   return persona.edad >= MAYORIA_DE_EDAD
// // }
// const esMayor = ({ edad }) => edad >= MAYORIA_DE_EDAD


// const imprimirSiEsMayor = (persona) => {
//   if(esMayor(persona)){
//     console.log('es mayor');
//   } else {
//     console.log('es menor')
//   }
// }

// imprimirSiEsMayor(angelo)


// const INCREMENTO_DE_PESO = .2
// const DIAS_DEL_ANIO = 365
// const sujeto = {
//   ...angelo
// }

// const aumentoDePeso = (persona) => persona.peso += INCREMENTO_DE_PESO;

// const adelgazar = (persona) => persona.peso -= INCREMENTO_DE_PESO; 

// for (let i = 1; i < DIAS_DEL_ANIO; i++){
//   let random = Math.random()
//   if(random < 0.25){
//     aumentoDePeso(sujeto)
//   } else if(random < 0.5 ){
//     adelgazar(sujeto);
//   }
// }

// console.log(sujeto.peso.toFixed(1))

var sacha = {
  nombre: 'Sacha',
  apellido: 'Lifszyc',
  altura: 1.72
}

var alan = {
  nombre: 'Alan',
  apellido: 'Perez',
  altura: 1.86
}

var martin = {
  nombre: 'Martin',
  apellido: 'Gomez',
  altura: 1.85
}

var dario = {
  nombre: 'Dario',
  apellido: 'Juarez',
  altura: 1.71
}

var vicky = {
  nombre: 'Vicky',
  apellido: 'Zapata',
  altura: 1.56
}

var paula = {
  nombre: 'Paula',
  apellido: 'Barros',
  altura: 1.76
}

const personas = [sacha, martin, alan, dario, vicky, paula]

const esAlta = ({ altura }) => altura > 1.8

const personasAltas = personas.filter(esAlta);

const aCms = personas => ({
    ...personas,
    altura: personas.altura * 100
})
const personasCm = personas.map(aCms)

console.log(personasCm)