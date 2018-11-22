const persona = {
  nombre: "angelo",
  apellido: "luna",
  direccion: {
    calle: "agustin melgar",
    interior: "3",
    exterior: "44"
  }
}

const mostrar = ({nombre})=>{
  console.log(nombre)
}

mostrar(persona)

// equivalente
// let nombre = persona.nombre
let { nombre } = persona;

console.log(nombre, "XD")