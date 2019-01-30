import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BGSC = styled.div`
  padding: 0;
  flex: 1;
  height: 100%;
  background: ${v => v.theme.theme.color.primary}; /* Old browsers */
  background: -moz-linear-gradient(
    top,
    ${v => v.theme.theme.color.primary} 0%,
    ${v => v.theme.theme.color.secondary} 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    ${v => v.theme.theme.color.primary} 0%,
    ${v => v.theme.theme.color.secondary} 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    ${v => v.theme.theme.color.primary} 0%,
    ${v => v.theme.theme.color.secondary} 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='${p =>
    p.theme.theme.color.primary}', endColorstr='${p =>
  p.theme.theme.color.secondary}',GradientType=0 ); /* IE6-9 */
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 2vh;
`

const Background = ({ children, ...rest }) => <BGSC {...rest}>{children}</BGSC>

Background.propTypes = {
  children: PropTypes.string
}

Background.defaultProps = {
  children: null
}
export default Background
