import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BGSC = styled.div`
  padding: 0;
  flex: 1;
  height: 100%;
  background: #937ef1; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    #937ef1 0%,
    #a36cf3 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    #937ef1 0%,
    #a36cf3 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    #937ef1 0%,
    #a36cf3 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#937ef1', endColorstr='#a36cf3',GradientType=0 ); /* IE6-9 */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2vh;
`

const Background = ({ children, ...rest }) => <BGSC {...rest}>{children}</BGSC>

Background.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
}

Background.defaultProps = {
  children: null
}
export default Background
