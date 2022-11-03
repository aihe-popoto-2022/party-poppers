import React, {useState} from 'react'


function RandomButton(){
 
  const [newColor, setNewColor] = useState({backgroundColor: 'red'})

  const handleButton=(event) => {
    setNewColor
    ({backgroundColor: `#${Math.floor(Math.random() * 0x1000000)
       .toString(16)
       .padStart(6, 0)}`
      })
    }
    console.log(backgroundColor)
  return (<button onClick = {handleButton}>

  </button>
    )
}


// setState of balloon colour
// newState random colour
// function to choose random colour
// event handler to handle button click
// button 
export default RandomButton