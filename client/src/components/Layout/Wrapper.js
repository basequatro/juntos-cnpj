import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Reset from '../../theme/reset'
import Style from '../../theme/style'

const WrapperSC = styled.div`
  padding: 0;
  flex: 1;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const Wrapper = ({ children, ...rest }) => (
  <WrapperSC {...rest}>
    <Reset />
    <Style />
    {children}
  </WrapperSC>
)

Wrapper.propTypes = {
  children: PropTypes.node
}

Wrapper.defaultProps = {
  children: null
}
export default Wrapper
