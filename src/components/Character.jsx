
import React, {useState, useEffect} from 'react';


function Character() {
    const[characters, setCharacters] = useState([]);

     useEffect(()=>{
    fetch('https://rickandmortyapi.com/api/character')
    .then((response)=>response.json())
    .then((data)=>setCharacters(data.results));

}, []);

    return (
        <div>
          {characters.map((character)=>{
            return(
                <div key={character.id}>
               <h2>{character.name}</h2>
               <img src={character.image} alt="" />
                </div>
            )
          })
  }
  </div>
    );
}

export default Character