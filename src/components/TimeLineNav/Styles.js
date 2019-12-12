import styled from 'styled-components'

export const TimeLineNavWrapper = styled.aside`
  display: -webkit-box;
  display: -moz-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: box;
  display: flex;
  position: absolute;
  left: 0;
`

export const foldedWrapper = styled.section`
  background: #f6f6f6;
  width: 250px;
  overflow-y: scroll;
  height: 100vh;
`

export const unfoldedWrapper = styled.section`
  background: #0791e6;
  max-width: 30px;
`
