import React from 'react'
import PropTypes from 'prop-types'
import { ButtonWrapper } from './Styles'

function Button (props) {
  return (
    <ButtonWrapper {...props}>
      {props.children}
    </ButtonWrapper>
  )
}

Button.PropTypes = {
  onClick: PropTypes.func,
  hi: PropTypes.string
}

export default Button
