           
       const menuList = document.getElementById('navbar__list');
       const sitioSecciones = document.querySelectorAll('section');
       
       const generarMenu = () => {
         let menuUI = '';
       
         sitioSecciones.forEach(seccion => {
           const idSeccion = seccion.id;
           const nombreSeccion = seccion.dataset.nav;
       
           menuUI += `<li><a class="enlace__menu" href="#${idSeccion}">${nombreSeccion}</a></li>`;
         });
       
         menuList.innerHTML = menuUI;
       };
       
       generarMenu();
       
       const calcularDesplazamiento = seccion => {
         return Math.floor(seccion.getBoundingClientRect().top);
       };
       
       const quitarActivo = seccion => {
         seccion.classList.remove('clase__activa');
         seccion.style.cssText = "background-color: linear-gradient(0deg, rgba(255,255,255,.1) 0%, rgba(255,255,255,.2) 100%)";
       };
       
       const agregarActivo = (condicional, seccion) => {
         if (condicional) {
           seccion.classList.add('clase__activa');
           seccion.style.cssText = "";
         }
       };
       
       const activarSeccion = () => {
         sitioSecciones.forEach(seccion => {
           const desplazamientoElemento = calcularDesplazamiento(seccion);
       
           enElViewport = () => desplazamientoElemento < 150 && desplazamientoElemento >= -150;
       
           quitarActivo(seccion);
           agregarActivo(enElViewport(), seccion);
         });
       };
       
       window.addEventListener('scroll', activarSeccion);
       
       const desplazamiento = () => {
         const enlaces = document.querySelectorAll('.navbar__menu a');
         enlaces.forEach(enlace => {
           enlace.addEventListener('click', () => {
             sitioSecciones.forEach(seccion => {
               seccion.addEventListener("click", desplazarSeccion(enlace));
             });
           });
         });
       };
       
       desplazamiento();
       