const contenidoPrincipal = document.querySelector('.contenido-principal');
ScrollReveal().reveal(contenidoPrincipal, {
  duration: 2000,  // duración de la animación en milisegundos
  delay: 10,  // retraso en milisegundos antes de comenzar la animación
  opacity: 0,  // valor de opacidad inicial
  distance: '0px',  // distancia a la que se mueve el elemento durante la animación
  origin: 'left'  // origen de la animación (en este caso, la parte inferior del elemento)
});

const lugares = document.querySelector('.lugares');
ScrollReveal().reveal(lugares, {
  duration: 2000,  // duración de la animación en milisegundos
  delay: 10,  // retraso en milisegundos antes de comenzar la animación
  opacity: 0,  // valor de opacidad inicial
  distance: '50px',  // distancia a la que se mueve el elemento durante la animación
  origin: 'left'  // origen de la animación (en este caso, la parte inferior del elemento)
});

