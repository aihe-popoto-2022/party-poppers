import React, { useState } from 'react'

function Balloon() {
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
      console.log(b)
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
                className="balloon"
                style={{ backgroundColor: b.color }}
                onClick={() => onPop(i)}
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
