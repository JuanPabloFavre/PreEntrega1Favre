import { useState } from 'react'
import CartWidget from './components/cartWidget/CartWidget'
import NavBar from './components/navBar/NavBar'
import ItemListContainer from './pages/itemListContainer/ItemListContainer'



function App() {


  return (
    <div>

      <NavBar />

      <ItemListContainer greeting={"Bienvenidos al e-comerce de venta deportiva"} />

    </div>
  )
}

export default App
