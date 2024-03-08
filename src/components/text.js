import React from 'react'

import PropTypes from 'prop-types'

import './text.css'

const Text = (props) => {
  return (
    <div className={`text-container ${props.rootClassName} `}>
      <span className="text-text">{props.text}</span>
      <span className="text-text1">{props.text1}</span>
      <span className="text-text2">{props.text2}</span>
      <span className="text-text3">{props.text3}</span>
    </div>
  )
}

Text.defaultProps = {
  text2: '          CV          ',
  text: 'Home',
  text1: ' About ',
  rootClassName: '',
  text3: '          Contact',
}

Text.propTypes = {
  text2: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default Text
