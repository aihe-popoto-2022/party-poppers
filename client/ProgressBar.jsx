import React from 'react'
import PropTypes from 'prop-types'

const ProgressBar = ({ value, max }) => {
  return (
    <div className="progress">
      <progress value={value} max={max} />
      <span>
        <br></br>
        {(value / max) * 100}% Ruined
      </span>
    </div>
  )
}

ProgressBar.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
}

ProgressBar.defaultProps = {
  max: 100,
}
export default ProgressBar
