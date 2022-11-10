import { useState } from 'react'
import { Link, Navigate, Route, useNavigate } from 'react-router-dom'
import pokemon1 from '../assets/pokeImgs/pokemon1.svg'
import pokemon5 from '../assets/pokeImgs/pokemon5.svg'
import pokemon6 from '../assets/pokeImgs/pokemon6.svg'
import { PokemonApp } from './PokemonApp'
export const PokemonHome = () => {
  //  const { state, setState } = useState();
   const navigate = useNavigate();
    const nextComponent = () =>{
      navigate('/pokelist')

    }
  return (
   


    <>
    <div className="poke container-xl">
    {/* <img src={pokemon6}  /> */}
    <div className="d-grid gap-2">
  {/* <button className="bton " type="button" style={{ backgroundImage:url(pokemon1)}} >!!</button> */}
  <button className="bton " type="button" onClick={nextComponent} ></button>
{/* </div> */}
      </div>
    </div>
    </>

  )
}
