import React, { useState } from 'react'

function Balloon() {
  const handleButton = (event) => {
    const balloonArr = Array(25)
      .fill()
      .map((_, i) => ({
        id: i,
        popped: false,
        color: `#${Math.floor(Math.random() * 0x1000000)
          .toString(16)
          .padStart(6, 0)}`,
      }))
    setBalloons(balloonArr)
  }
  const startColor = 'grey'

  const balloonArr = Array(25)
    .fill()
    .map((_, i) => ({ id: i, popped: false, color: startColor }))
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
      <button onClick={handleButton}>Random colour</button>
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
