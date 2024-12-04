
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Dsatisfaccion } from "./dimensiones/Dsatisfaccion"
import {DreputacionLaboTit} from "./dimensiones/DreputacionLaboTit"
import { DinvestVincula } from "./dimensiones/DinvestVincula"
BrowserRouter
export const App = () => {





  return (
    <>


 
    <BrowserRouter> 
    <Routes>
      <Route path="/" element={<Dsatisfaccion/>}/>
      <Route path="/reputacion" element={<DreputacionLaboTit/>}/>
      <Route path="/investigacion" element={<DinvestVincula/>}/>
    </Routes>
    </BrowserRouter>





    

    </>
  )
}
