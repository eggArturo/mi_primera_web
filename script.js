let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML=contenidoTitulo;

let textoTitulo = titulo.innerHTML;
console.log(textoTitulo);

if(textoTitulo=="Nombre"){
    titulo.innerHTML="Otro";
}else{
    console.log("no se cumple");
}
//funciones
let nombre1 = "Miguel";
let ciudad1 = "Huacho";
let gusto1 = "Motocicletas";

let parrafo = document.querySelector(".parrafo2 ");

function cambiarTexto(nombre,ciudad,gusto){
    let contenido = `Me llamo ${nombre1}, naci en la ${ciudad1} y vivo en Santa Maria. Me gusta las ${gusto1} y salir de viaje en ella. Me encantaria aprender a programar para asi mejorar mis conocimientos y seguir extendiendo mi experiencia.`;

    return contenido;
}

parrafo.innerText=cambiarTexto(nombre1, ciudad1, gusto1);
//formul
const form4 = document.getElementById("form");
const nombre2 = document.getElementById("nombre");
const aler = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  aler.innerHTML = "";

  if (nombre2.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    aler.innerHTML = warnings;
  } else {
    aler.innerHTML = "Enviado";
  }
  return valido;
}
form4.addEventListener("submit", (e) => {
    if (validarFormulario()) {
      // Si la validación es exitosa, puedes enviar el formulario
      formulario.submit();
    } else {
      e.preventDefault(); // Evita que el formulario se envíe automáticamente
    }
  });
