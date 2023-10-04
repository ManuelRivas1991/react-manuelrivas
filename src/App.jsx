import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from "./layouts/Header/Header"
import Aside from "./layouts/Aside/Aside"
import Home from "./pages/Home/Home";
import { useEffect, useState } from 'react';
import Dogs from './pages/Dogs/Dogs';


const App = () => {

  //asideStatus controla si el aside esta abierto o cerrado
  const [asideStatus, setasideStatus] = useState(false)
  //adopedDogs es un array que guarda los perros adoptados
  const [adoptedDogs, setAdoptedDogs] = useState([])

  useEffect(() => {
    // Se obtiene la lista de adopción del localStorage
    // Si no hay datos en el localStorage, se crea un array vacío
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    // Se guarda la lista de adopción en el estado
    setAdoptedDogs(cart)
}, [])


  
  return (
    <BrowserRouter>

    <Header 
    /*asideStatus y setasideStatus se pasan como props al header 
    para poder controlar si el aside esta abierto o cerrado*/
    setasideStatus={setasideStatus}
    asideStatus={asideStatus}
    /*adoptedDogsLength se pasa como props al header para poder 
    mostrar la cantidad de perros adoptados en el CartWidget*/
    adoptedDogsLength={adoptedDogs.length}
    />

    <Aside
    // Aside es el menu lateral que se muestra en pantalla
    /*asideStatus y setasideStatus se pasan como props al aside 
    para poder controlar si el aside esta abierto o cerrado*/
    asideStatus={asideStatus} 
    setasideStatus={setasideStatus} 
    />

    <Routes> 
      
      <Route path="/" 
        element={
          // Home es la pagina principal y muestra infomacion general sobre adopcion de perros 
          <Home/> 
        }/>
      
      <Route 
        path="/dogs" 
        element = {
          // Dogs es la pagina que muestra los perros disponibles para adoptar
          /*setAdoptedDogs se pasa como props a la pagina de perros para poder 
          actualizar el array de perros adoptados*/ 
          <Dogs setAdoptedDogs={setAdoptedDogs}/>
        }>
      
      <Route 
        path=":category" 
        element={
          // Se añade una ruta dinamica para poder filtrar los perros por categoria 
          <Dogs setAdoptedDogs={setAdoptedDogs}/> 
          } />
      </Route>
    </Routes>
    
    {/* Aca iría un footer */}
  </BrowserRouter>
  )
}

export default App
