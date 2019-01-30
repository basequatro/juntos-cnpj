import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BlockSC = styled.div`
  display: 'block';
  padding-left: ${props => (props.pl ? '25px' : 'none')};
  padding: ${props => (props.padder ? '2vh' : 'none')};
`
const Block = ({ children, ...rest }) => <BlockSC {...rest}>{children}</BlockSC>

Block.propTypes = {
  children: PropTypes.node
}

Block.defaultProps = {
  children: null
}
export default Block
