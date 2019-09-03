//PUNTO 1

// const parrafo = document.querySelector("#parrafo");
// const boton = document.querySelector("#boton");
// boton.addEventListener("click", () => {
//   if (parrafo.className == "negro") {
//     parrafo.className = "azul";
//   } else {
//     parrafo.className = "negro";
//   }
// });

//PUNTO 2
// const boton2 = document.querySelector("#cambioColor");
// const fondo = document.querySelector("#padre");
// // const colores = ["yellow", "blue", "red"];

// const generarColor = () =>
//   "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));

// boton2.addEventListener("click", () => {
//   padre.style.backgroundColor = generarColor();
// });

//PUNTO 3
const presionar = document.querySelector("#presionar1");
const cuadro = document.querySelectorAll("#cuadro");

const generarColor = () =>
  "#000000".replace(/0/g, () => (~~(Math.random() * 16)).toString(16));

presionar.forEach(cambiar => ("click", () => {
  cambiar.addEventListener("click", () => {
    cuadro.style.background = generarColor();
})

//TAREA GUARDAR CON EL FOREACH EN LOCALSTORAGEV
//VER MAÑANA DELEGACION DE EVENTOS