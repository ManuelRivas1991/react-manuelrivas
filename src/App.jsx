import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import CartProvider from './context/CartContext'
import Header from "./layouts/Header/Header"
import Aside from "./layouts/Aside/Aside"
import Home from "./pages/Home/Home";
import { useState } from 'react';
import Dogs from './pages/Dogs/Dogs';
import DetailDogs from './pages/DetailDogs/DetailDogs';


const App = () => {

  //asideStatus controla si el aside esta abierto o cerrado
  const [asideStatus, setasideStatus] = useState(false)

  
  return (
    <CartProvider>
      <BrowserRouter>
        <Header 
        /*asideStatus y setasideStatus se pasan como props al header 
        para poder controlar si el aside esta abierto o cerrado*/
        setasideStatus={setasideStatus}
        asideStatus={asideStatus}
        />

        <Aside
        // Aside es el menu lateral que se muestra en pantalla
        /*asideStatus y setasideStatus se pasan como props al aside 
        para poder controlar si el aside esta abierto o cerrado*/
        asideStatus={asideStatus} 
        setasideStatus={setasideStatus} 
        />

        <Routes> 

          <Route path="/" element={<Home/>}/>

          <Route path="/dogs" element = {<Dogs/>}>
            <Route path=":category" element={<Dogs/>}/>
          </Route>

          <Route path="/detail/:id" element={<DetailDogs/>}/>

        </Routes>

        {/* Aca iría un footer */}
      </BrowserRouter>
    </CartProvider>
  )
}

export default App
