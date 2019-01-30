import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const ButtonSC = styled.button`
  display: flex;
  width: 100%;
  height: 10vh;
  max-height: 100px;
  padding: 20px;
  align-items: center;
  border: none;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
  background-color: ${props =>
    props.background ? props.background : v => v.theme.theme.button.background};

  :hover {
    opacity: 0.5;
  }
`
const Icon = styled.i`
  color: ${props => (props.color ? props.color : 'black')};
  font-size: 2.5em;
  align-self: center;
`
const Text = styled.span`
  color: ${props => (props.color ? props.color : 'black')};
  font-size: 1.2em;
  align-self: 'center';
  font-family: ${v => v.theme.theme.fontFamily};
`

const Button = ({ children, text, icon, background, color, ...props }) => (
  <ButtonSC background={background} {...props}>
    {children}
    <Text color={color}>{text}</Text>
    {icon && <Icon className={icon} color={color} />}
  </ButtonSC>
)

Button.propTypes = {
  children: PropTypes.string,
  text: PropTypes.string,
  icon: PropTypes.string,
  iconRight: PropTypes.bool,
  color: PropTypes.string,
  background: PropTypes.string
}

Button.defaultProps = {
  children: null,
  text: '',
  icon: undefined,
  iconRight: false,
  color: 'black',
  background: 'white'
}

export default Button
