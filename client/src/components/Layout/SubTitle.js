import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SubTitleSC = styled.p`
  color: ${props => (props.color ? props.color : 'white')};
  align-self: flex-start;
  font-size: ${props => (props.color ? props.color : 'white')};
  text-align: center;
  font-size: ${props => (props.fontSize ? props.fontSize : '1rem')};
  font-family: 'Gill Sans, sans-serif';
`

const SubTitle = ({ children, ...rest }) => (
  <SubTitleSC {...rest}>{children}</SubTitleSC>
)

SubTitle.propTypes = {
  children: PropTypes.node
}

SubTitle.defaultProps = {
  children: null
}
export default SubTitle
