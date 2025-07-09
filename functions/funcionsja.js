document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los enlaces de la navegación que tengan la clase 'nav-link'
    const navLinks = document.querySelectorAll('.nav-link');
    // Selecciona todas las secciones principales que tengan la clase 'box' dentro de 'main'
    const sections = document.querySelectorAll('main .box');

    // Función para mostrar la sección activa y ocultar las demás
    function showSection(targetId) {
        sections.forEach(section => {
            if (section.id === targetId) {
                // Si el ID de la sección coincide con el targetId, añade la clase 'active'
                section.classList.add('active');
            } else {
                // De lo contrario, remueve la clase 'active' para ocultarla
                section.classList.remove('active');
            }
        });
    }

    // Función para actualizar el estado activo del enlace de navegación
    // CORRECCIÓN: El nombre de la función se ha unificado a 'updateNavLinkActiveState'
    function updateNavLinkActiveState(targetId) {
        navLinks.forEach(link => {
            // Compara el atributo 'href' del enlace con el 'targetId'
            // El 'href' incluye el '#', por eso se añade al 'targetId' para la comparación
            if (link.getAttribute('href') === "#" + targetId) {
                link.classList.add('active-nav'); // Añade la clase para el estilo activo
            } else {
                link.classList.remove('active-nav'); // Remueve la clase de otros enlaces
            }
        });
    }

    // Añade un 'event listener' a cada enlace de navegación
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Evita el comportamiento de salto predeterminado del ancla (scroll instantáneo)

            // Obtiene el ID de la sección a mostrar del atributo 'href' del enlace
            // Se usa substring(1) para eliminar el '#' inicial (ej. "#inicio" -> "inicio")
            const targetId = link.getAttribute('href').substring(1);

            // Llama a las funciones para mostrar la sección y actualizar el estado del enlace
            showSection(targetId);
            updateNavLinkActiveState(targetId);

            // Opcional: Si quieres un desplazamiento suave al inicio de la sección,
            // descomenta la siguiente línea. Sin embargo, dado el diseño de
            // superposición, puede no ser necesario o deseable.
            // document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Mostrar la sección "Inicio" por defecto al cargar la página
    // Esto asegura que al cargar la página, la sección 'inicio' es la primera en verse
    showSection('inicio');
    updateNavLinkActiveState('inicio');
});