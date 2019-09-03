//DOCUMENT OBJECT MODEL
//PARA ACCEDER A LOS ELEMENTOS DEL DOM;
// const titulo = document.getElementsByTagName("h1");
// const titulo = document.getElementsByClassName("tituloPrincipal");

// const titulo = document.getElementsById("tituloPrincipal");
// console.log(titulo);

//.clase # id -- querySelector (me trae el primer valor) querySelectorAll (todos los elementos)
// const titulo = document.querySelector("#tituloPrincipal");
// console.log(titulo);

//PARA CREAR ELEMENTOS EN EL DOM;
// const divPadre = document.querySelector("#Padre"); //esta es una opción para llamar al padre, la siguiente es para llamarlo desde el hijo.
// const divPadre = document.querySelector("#tituloPrincipal").parentNode;
// const subtitulo = document.createElement("h2");
// const contenidoSubtitulo = document.createTextNode("Soy un subtitulo");

// subtitulo.appendChild(contenidoSubtitulo);
// console.log(subtitulo);
// divPadre.appendChild(subtitulo);

//PARA MODIFICAR ESTILO;
// const titulo = document.querySelector("#tituloPrincipal");
// titulo.innerHTML = "JavaScript";
// // titulo.style.color = "red";
// titulo.className = "aqua";

//EVENTOS;

// const titulo = document.querySelector("#tituloPrincipal");
// const boton = document.querySelector("#boton");

// boton.addEventListener("click", () => {
//   if (titulo.className == "verde") {
//     titulo.className = "morado";
//   } else {
//     titulo.className = "verde";
//   }
// });
