/*======================================================
  CÁMARAS SEGURIDAD PRO
  Script principal
======================================================*/

// ============================================
// MENÚ MÓVIL
// ============================================

const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

menuToggle?.addEventListener("click", () => {
    menu.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// ============================================
// HEADER AL HACER SCROLL
// ============================================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.background = "rgba(5,8,22,.90)";
        header.style.backdropFilter = "blur(14px)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    } else {

        header.style.background = "transparent";
        header.style.boxShadow = "none";
        header.style.backdropFilter = "none";

    }

});

// ============================================
// AOS
// ============================================

AOS.init({

    duration: 900,
    easing: "ease-out",
    once: true

});

// ============================================
// PARTÍCULAS
// ============================================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 60
        },

        color: {
            value: "#0EA5E9"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        line_linked: {

            enable: true,

            distance: 150,

            color: "#0EA5E9",

            opacity: 0.25,

            width: 1

        },

        move: {

            enable: true,

            speed: 2

        }

    },

    interactivity: {

        events: {

            onhover: {

                enable: true,

                mode: "grab"

            }

        }

    }

});

// ============================================
// EFECTO SUAVE AL APARECER
// ============================================

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// ============================================
// SCROLL SUAVE
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const destino = document.querySelector(this.getAttribute("href"));

        if (destino) {

            destino.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});

console.log("✅ Cámaras Seguridad PRO cargado correctamente.");
// ============================================
// CONTADORES ANIMADOS
// ============================================

const counters = document.querySelectorAll(".counter");

const iniciarContadores = () => {

    counters.forEach(counter => {

        const objetivo = Number(counter.dataset.target);

        let valor = 0;

        const incremento = Math.max(1, objetivo / 80);

        const actualizar = () => {

            valor += incremento;

            if (valor >= objetivo) {

                counter.textContent = objetivo + "+";

            } else {

                counter.textContent = Math.floor(valor);

                requestAnimationFrame(actualizar);

            }

        };

        actualizar();

    });

};

const statsSection = document.querySelector(".stats");

let contadoresIniciados = false;

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting && !contadoresIniciados) {

            iniciarContadores();

            contadoresIniciados = true;

        }

    });

});

if (statsSection) {

    observer.observe(statsSection);

}
