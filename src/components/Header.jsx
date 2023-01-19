import React, {useState, useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
function Header() {

    const [darMode, setDarMode] = useState(false);

     const color = useContext(ThemeContext);

     const handleClick=()=>{
     setDarMode(!darMode)
     }


  return (
    <div>
        <h1 style={{color}}>Rick and Morty app</h1>
        <button type='button' onClick={handleClick}>{darMode ? 'Dark Mode' : 'Light Mode'}</button>
    </div>
  )
}

export default Header