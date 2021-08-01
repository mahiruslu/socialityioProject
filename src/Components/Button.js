import React,{useContext,useState} from 'react'
import ThemeContext from '../context/ThemeContext'

function Button() {
    const {theme, setTheme} = useContext(ThemeContext);
    return (
        <div>
            active theme: {theme} 
            <button onClick={()=> setTheme(theme === 'light' ? 'dark' :'light')}>
                Change Theme
            </button>
        </div>
    )
}

export default Button
