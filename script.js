
// MENU MOVIL DV SECURITY


const menu = document.querySelector(".menu");
const nav = document.querySelector("nav");


menu.addEventListener("click",()=>{

nav.classList.toggle("activo");

});





// CERRAR MENU AL SELECCIONAR OPCION


const enlaces = document.querySelectorAll("nav a");


enlaces.forEach(enlace=>{


enlace.addEventListener("click",()=>{

nav.classList.remove("activo");

});


});







// ANIMACION AL BAJAR


const elementos = document.querySelectorAll(
".card, .about, .gallery img, .numbers div"
);



const mostrarElemento = ()=>{


elementos.forEach(elemento=>{


const posicion = elemento.getBoundingClientRect().top;


const pantalla = window.innerHeight;


if(posicion < pantalla - 80){


elemento.style.opacity="1";

elemento.style.transform="translateY(0)";


}


});


};






// ESTADO INICIAL DE ANIMACION


elementos.forEach(elemento=>{


elemento.style.opacity="0";

elemento.style.transform="translateY(40px)";

elemento.style.transition="all .8s ease";


});





window.addEventListener(
"scroll",
mostrarElemento
);



mostrarElemento();






// EFECTO HEADER AL DESPLAZAR


const header=document.querySelector("header");


window.addEventListener("scroll",()=>{


if(window.scrollY>50){


header.style.background="#02060c";


}

else{


header.style.background="rgba(5,11,22,0.90)";


}


});
// EVITAR MENU CONTEXTUAL BASICO

document.addEventListener(
"contextmenu",
function(e){

e.preventDefault();

}
);
// ENVÍO DE FORMULARIO A WHATSAPP
const formContacto = document.getElementById("formularioContacto");

if (formContacto) {
  formContacto.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const telefono = document.getElementById("telefono").value;
    const correo = document.getElementById("correo").value || "No especificado";
    const servicio = document.getElementById("servicio").value;

    const numeroWhatsApp = "593987586172";

    const mensaje = `*Solicitud de Visita Técnica - DV Security*%0A%0A` +
      `*Nombre:* ${encodeURIComponent(nombre)}%0A` +
      `*Teléfono:* ${encodeURIComponent(telefono)}%0A` +
      `*Correo:* ${encodeURIComponent(correo)}%0A` +
      `*Servicio necesitado:* ${encodeURIComponent(servicio)}`;

    const url = `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;
    window.open(url, "_blank");
  });
}