const express = require('express') //trae la dependencia que isntalamos (express)
const app = express() // creamos nustra aplicacion de express

app.get('*', (request, response)=>{
  response.send( {message: 'Mundo feliz'})
} )

app.listen(3000, ()=> console.log('El servidor esta escuchando en el puerto 3000'))
