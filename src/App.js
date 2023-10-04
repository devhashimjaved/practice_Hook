import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
    const [color,setColor]=useState('No color is Selected');
    const [count,setCount]=useState(0)
   
  return (
    <>
    <h2>The color is : {color } </h2>
    <button style={{backgroundColor:'red', color:'white', border:'1px solid white'}} type='button' onClick={()=>setColor('Red')}> Red </button>
    <button type='button' onClick={()=>setColor('Blue')}>Blue</button>
    <button type='button' onClick={()=>setColor('Green')}>Green</button>
    <button type='button' onClick={()=>setColor('Orange ')}>Orange</button>

    </>
  )
}

export default App

