window.onload= () => { //lo que permite window.onload es esperar a que se cargue todo el html para despues ejecutar el js y evitar errores por algunas etiquetas no cargadas
  const parrafo=document.getElementById('text') //getElementById recive algun elemento por su id y pasarlo a una constante
  console.log(parrafo.innerText);// innerText quita la etiqueta del html y solo deja el texto que esta contiene
}
