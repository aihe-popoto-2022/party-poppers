import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Balloon() {
  const navigate = useNavigate()
  const randomNumber = () => Math.round(Math.random() * 100).toString()
  const handleButton = () => {
    const newBalloonArray = balloonArr.map((b, i) => ({
      id: i,
      popped: false,
      color: `#${Math.floor(Math.random() * 0x1000000)
        .toString(16)
        .padStart(6, 0)}`,
      left: b.left,
      bottom: b.bottom,
    }))
    setBalloons(newBalloonArray)
  }
  const startColor = '#faf8f1'

  const [balloonArr] = useState(
    Array(10)
      .fill()
      .map((_, i) => ({
        id: i,
        popped: false,
        color: startColor,
        left: randomNumber() + '%',
        bottom: randomNumber() + 'px',
      }))
  )
  const [balloons, setBalloons] = useState(balloonArr)
  const onPop = (index) => {
    setBalloons((balloons) => {
      const b = [...balloons]
      b[index].popped = true
      return b
    }) ///something here!//call find on our balloons array//if there is at least one balloon is notpopped, then we won't navigate
  }
  const foundBalloons = balloons.find((balloon) => {
    return balloon.popped === false
  })
  if (!foundBalloons) {
    navigate('/Ian')
  }

  return (
    <div>
      <h3>
        Ian is a <strong>horrible child</strong> and today is his birthday. Pop
        all the balloons before they reach the top of the page to make baby Ian
        cry.
      </h3>

      <div>
        <button className="button" onClick={handleButton}>
          Balloons!
        </button>
      </div>
      <br></br>
      {balloons.map((b, i) => {
        if (!b.popped) {
          return (
            <div
              data-testid="balloon-test"
              className="balloon-container"
              style={{ left: b.left, marginBottom: b.bottom }}
              key={b.id}
            >
              <div
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
