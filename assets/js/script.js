import Animal from "./Animal.js";
import Mascota from "./Mascota.js";
import Propietario from "./Propietario.js";

const myButton = document.getElementById("myButton");

myButton.addEventListener("click", (event) => {
  event.preventDefault();
  const propietario = document.getElementById("propietario");
  const telefono = document.getElementById("telefono");
  const direccion = document.getElementById("direccion");
  const nombreMascota = document.getElementById("nombreMascota");
  const tipo = document.getElementById("tipo");
  const enfermedad = document.getElementById("enfermedad");

  resteForm();
});

//Función que vacía el formulario al hacer click en el botón
const resteForm = () => {
  propietario.value = "";
  telefono.value = "";
  direccion.value = "";
  nombreMascota.value = "";
  tipo.value = "";
  enfermedad.value = "";
};
