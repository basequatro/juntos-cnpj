import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const RowSC = styled.div`
  flex-direction: ${props => (props.noFlex ? 'row' : 'column;')};
  flex: ${props => (props.noFlex ? 'none' : '1;')};
  display: ${props => (props.noFlex ? 'block' : 'flex;')};
  justify-content: ${props => (props.flexEnd ? 'flex-end' : ' inherit;')};
  padding-left: ${props => (props.pl ? '25px' : 'none')};
  padding: ${props => (props.padder ? '2vh' : 'none')};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
`

const Row = ({ children, backgroundColor, ...rest }) => (
  <RowSC backgroundColor={backgroundColor} {...rest}>
    {children}
  </RowSC>
)

Row.propTypes = {
  children: PropTypes.node,
  backgroundColor: PropTypes.string
}

Row.defaultProps = {
  children: null,
  backgroundColor: null
}
export default Row
