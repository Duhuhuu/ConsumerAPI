import { Navigate, Route, Routes } from "react-router-dom"
import { PokemonHome } from "./pokemon"


export const ConsumerApp = () => {
  return (
    <Routes>
 
    {/* //  ( status === 'authenticated')  */}
        <Route path="/*" element={ <PokemonHome/>  } />
        {/* <Route path="/auth/*" element={ <AuthRoutes/>  } /> */}
    
     <Route path="/*" element= { <Navigate to='/' /> } />
    
     
    </Routes>
  )
}
