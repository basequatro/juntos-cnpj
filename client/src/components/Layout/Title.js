import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const TitleSC = styled.p`
  color: ${props => (props.color ? props.color : 'white')};
  align-self: flex-start;
  font-size: ${props => (props.color ? props.color : 'white')};
  text-align: center;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-family: 'Gill Sans, sans-serif';
`

const Title = ({
  children,
  color,
  fontSize,
  alignSelf,
  marginBottom,
  ...rest
}) => (
  <TitleSC fontSize={fontSize} {...rest}>
    {children}
  </TitleSC>
)

Title.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  alignSelf: PropTypes.string,
  marginBottom: PropTypes.string
}

Title.defaultProps = {
  children: null,
  color: 'white',
  fontSize: '1rem',
  alignSelf: null,
  marginBottom: null
}
export default Title
