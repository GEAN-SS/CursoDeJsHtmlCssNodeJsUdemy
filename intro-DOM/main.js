// seccion 19 y DOM (agregando elementos html a otro elemento html )
window.onload= () => {
  const parrafo=document.getElementById('text')
  parrafo.innerHTML = '<li>elemento 1</li><li>elemento 2</li>'
}       //cambiamos el innerText por innerHTML
