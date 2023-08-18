// Efecto scroll y flecha
var nav = document.querySelector("nav");
var logoPrincipal = document.querySelector(".logo_principal");
var logoPrincipalDos = document.querySelector(".logo_principal_dos");
var flechaUp = document.querySelector(".flechaInicio");
var cerrarNav = document.querySelector(".cerrarNav");

window.addEventListener("scroll", () => {
  nav.classList.toggle("sticky", window.scrollY > 20);
  logoPrincipal.classList.toggle("sticky", window.scrollY > 20);
  logoPrincipalDos.classList.toggle("sticky", window.scrollY > 20);
  flechaUp.classList.toggle("sticky", window.scrollY > 100);

  menuToggle.classList.remove("active");
  navmenu.classList.remove("show_menu");
  nav.classList.add("hidden");
});

/*************** MENU BTN ***************/
/**************************************/
const menuToggle = document.querySelector(".toggle");
const navmenu = document.querySelector(".nav_menu");
menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navmenu.classList.toggle("show_menu");
  nav.classList.toggle("hidden");
});

// Obtener el formulario y los campos
const form = document.getElementById("form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("emailContact");
const phoneInput = document.getElementById("phone");
const asuntoInput = document.getElementById("asunto");
const mensajeInput = document.getElementById("texto");

const inputs = document.querySelectorAll("input, textarea");

inputs.forEach((input) => {
  const textarea = document.querySelector("#texto");
  const text = input.parentElement.querySelector(".text_nombre");
  const originalText = text.textContent; // Obtener el texto original

  input.addEventListener("input", () => {
    const text = input.parentElement.querySelector(".text_nombre");
    if (!input.checkValidity()) {
      text.classList.add("negative");
    } else {
      text.classList.remove("negative");
    }
  });

  input.addEventListener("blur", () => {
    if (!input.checkValidity()) {
      text.classList.add("negative");
      if (input.tagName.toLowerCase() !== "textarea") {
        input.value = ""; // Vaciar el campo si es inválido, excepto para los textareas
      }
      // input.value = ""; // Vaciar el campo si es inválido
      text.textContent = input.title; // Mostrar el contenido del atributo 'title'
    } else {
      text.classList.remove("negative");
      text.textContent = originalText; // Restablecer el texto original
    }
  });
});
