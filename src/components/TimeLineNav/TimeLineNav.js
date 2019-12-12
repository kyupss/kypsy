import React from 'react'
import PropTypes from 'prop-types'
import { TimeLineNavWrapper, foldedWrapper, unfoldedWrapper } from './Styles'

function TimeLineNav (props) {
  return (
    <TimeLineNavWrapper>
      <foldedWrapper>
        <h1>Content</h1>
      </foldedWrapper>
      <unfoldedWrapper>
        <h1>Content</h1>
      </unfoldedWrapper>
    </TimeLineNavWrapper>
  )
}

TimeLineNav.PropTypes = {
  onClick: PropTypes.func
}

export default TimeLineNav
