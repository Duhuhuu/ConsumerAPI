import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "../store/slices/pokemon";

export const PokemonApp = () => {
    const dispatch = useDispatch();
    const { isLoading, pokemons = [], page } = useSelector(state => state.pokemons)
  
    
  
    useEffect(() => {
      dispatch( getPokemons() );
     
    }, [])

    // Destructuro el name, del arreglo de pokemons, donde estan almacenados los datos del json de la api key de pokemons
    const [name] = pokemons;
    console.log(name)
    return (
      <>
          <h1>PokemonApp</h1>
          <hr />
          <span>Loading: { !isLoading ? 'True': 'False' } </span>
              <ul>
               
                {pokemons.map((pokemons, name) => (
                    
                  <li key={name} > {pokemons.name} </li>
  
                ))
                
                }, 
                
              </ul>
              <button
              disabled= {isLoading}
              onClick= { ()=> dispatch (getPokemons(page)) }
              >
                next 
              </button>
      
      
      </>
    )
  }
  