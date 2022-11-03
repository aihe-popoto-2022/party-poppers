import React, { useState } from 'react'

function Balloon() {
  //possible button code

  // const [newColor, setNewColor] = useState({
  //   backgroundColor: 'grey',
  // })

  // const handleButton = (event) => {
  //   setNewColor({
  //     backgroundColor: `#${Math.floor(Math.random() * 0x1000000)
  //       .toString(16)
  //       .padStart(6, 0)}`,
  //   })
  // }

  const colors = ['red', 'green', 'blue']
  const generateColor = () => {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
  }
  const balloonArr = Array(25)
    .fill()
    .map((_, i) => ({ id: i, popped: false, color: generateColor() }))
  const [balloons, setBalloons] = useState(balloonArr)
  const onPop = (index) => {
    setBalloons((balloons) => {
      const b = [...balloons]
      b[index].popped = true
      return b
    })
  }
  return (
    <div>
      {balloons.map((b, i) => {
        if (!b.popped) {
          return (
            <div className="balloon-container" key={b.id}>
              <div
                data-testid="balloon"
                className="balloon"
                style={{ backgroundColor: b.color }}
                onClick={() => onPop(i)}

                //onClick={handleButton} we want to pass this into the App component where we have the randBtn
              ></div>
            </div>
          )
        } else {
          return (
            <div className="balloon-container" key={i}>
              <div className="popped-balloon"></div>
            </div>
          )
        }
      })}
    </div>
  )
}

export default Balloon

{
  /* <motion.div
  animate={{
    x: 0,
    position: "fixed",
    transitionEnd: {
      display: "none",
    },
  }}
/> */
}
