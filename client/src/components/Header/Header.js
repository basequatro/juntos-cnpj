import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderSC = styled.div`
    display: flex;
    flex: 1,
    flex-direction: row;
    padding: 2vh;
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
`

const Gravatar = styled.div`
  background: url(${v => v.img}) no-repeat;
  background-size: cover;
  width: 32px;
  height: 32px;
  align-self: center;
`

const Header = ({ children, text, icon, ...props }) => (
  <HeaderSC {...props}>
    {children}
    <Gravatar img='https://cdn.iconscout.com/icon/free/png-256/avatar-372-456324.png' />
  </HeaderSC>
)

Header.propTypes = {
  children: PropTypes.node,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string
}

Header.defaultProps = {
  children: null,
  text: '',
  icon: undefined,
  iconRight: false,
  color: 'black',
  background: 'white'
}

export default Header
