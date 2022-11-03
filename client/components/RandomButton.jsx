import React, {useState} from 'react'


function RandomButton(){
 
  // connect balloon shape to useState so that background colour of balloon starts at red.
  const [newColor, setNewColor] = useState({
    width: 50,
    height: 50,
    backgroundColor: 'red'})

  const handleButton=(event) => {
    setNewColor
  // connect balloon shape to setNewColor so that background colour of balloon changes to random colour.
  
    ({backgroundColor: `#${Math.floor(Math.random() * 0x1000000)
       .toString(16)
       .padStart(6, 0)}`
      })
      console.log(backgroundColor)
    }
   // 
  return (<button onClick = {handleButton}>Random colour</button>
    )
}


// setState of balloon colour
// newState random colour
// function to choose random colour
// event handler to handle button click
// button 
export default RandomButton