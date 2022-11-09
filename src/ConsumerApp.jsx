import { Navigate, Route, Routes } from "react-router-dom"
import { PokemonApp } from "./pokemon/PokemonApp"

export const ConsumerApp = () => {
  return (
    <Routes>
 
    {/* //  ( status === 'authenticated')  */}
        <Route path="/*" element={ <PokemonApp/>  } />
        {/* <Route path="/auth/*" element={ <AuthRoutes/>  } /> */}
    
     <Route path="/*" element= { <Navigate to='/' /> } />
    
     
    </Routes>
  )
}
