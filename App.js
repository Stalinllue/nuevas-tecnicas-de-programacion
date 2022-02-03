
import React from 'react';
import './App.css';
import llue from './assets/img/LLUE';




//Vamos a crear un componente de una ficha de empleado que consiste 
//en un h1 con el nombre, un h2 con el cargo y ponemos una foto 
//(<img src={this.props.nombreFoto} width='200' />)

//Todos los parámetros son pasados como un parámetro y
 //necesitamos que se visualizen 3 empleados.

function App() {
  return (
    <div>
      <HelloWorld nombre = "Stalin Dominguez" cargo="Lider"/> 
      <HelloWorld nombre = "Carla Macas" cargo = "cajera"/>
      <HelloWorld  nombre = "Anderes Loor"cargo = "Cajero"/>
      
</div>

  );
}

  
function HelloWorld(props){
  console.log(props)
 return(
    <div id = "hello">
     
      <h1>Nombre :{props.nombre}</h1>
      <h2>Cargo :{props.cargo}</h2>
      </div>
     

  )
}

export default App;
