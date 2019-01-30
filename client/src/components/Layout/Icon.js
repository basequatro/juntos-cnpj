import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconSC = styled.i`
  color: #ffffff;
  font-size: 2em;
  align-self: center;
`

const Icon = ({ children, ...rest }) => <IconSC {...rest}>{children}</IconSC>

Icon.propTypes = {
  children: PropTypes.string
}

Icon.defaultProps = {
  children: null
}
export default Icon
