
import React, {useState, useEffect, useReducer, useMemo} from 'react';

const initialState={
  favorites: []
}

const favoriteReducer = (state,action)=>{
  switch (action.type){
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites:[...state.favorite, action.payload],
      }
      default:
        return state
  }
}
function Character() {
    const[characters, setCharacters] = useState([]);
    const [favorites,dispatch] = useReducer(favoriteReducer, initialState);
    const[search, setSearch]=useState("");

     useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((response)=>response.json())
    .then((data)=>setCharacters(data.results));

}, []);
   
  const handleClick=(favorite)=>{
    dispatch({
      type:'ADD_TO_FAVORITE', payload:favorite
    })
  }
   
  const handleSearch = (e)=> {
    setSearch(e.target.value)
  }

 const filterCharacters = useMemo(()=> 
  characters.filter((char) => {
    return char.name.toLowerCase().includes()
  })
 )
    return (
        <div>
          {favorites.favorites.map((favorite)=>(
 <li key={favorite.id}>{favorite.name}</li>
          ))}
          <input type="text" value={search} onChange={handleSearch} />
          {characters.map((character)=>{
            return(
                <div key={character.id}>
               <h2>{character.name}</h2>
               <img src={character.image} alt="" />
               <button onClick = {()=>handleClick(character)}>Add to my Favorite</button>
                </div>
            )
          })
  }
  </div>
    );
}

export default Character