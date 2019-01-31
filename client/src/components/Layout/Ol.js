import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const OlSC = styled.div`
  display: flex
  font-size: 1.2rem;
  align-items: center
`
const Li = styled.div`
  align-self: flex-start;
  width: 32px;
  height: 32px;
  line-height: 32px;
  color: #937ef1;
  border: 2px solid #937ef1;
  font-family: 'Gill Sans, sans-serif';
  font-size: 1.2rem;
  text-align: center;
`
const LiSpan = styled.div`
  align-self: flex-start;
  line-height: 32px;
  color: ${v => v.theme.theme.text};
  font-family: 'Gill Sans, sans-serif';
  font-size: 1.2rem;
  padding-left: 20px;
  font-weight: 600;
`

const Ol = ({ number, text, children, ...rest }) => (
  <OlSC {...rest}>
    <Li>{number}</Li>
    <LiSpan>{text}</LiSpan>
  </OlSC>
)

Ol.propTypes = {
  children: PropTypes.node,
  number: PropTypes.number,
  text: PropTypes.string
}

Ol.defaultProps = {
  children: null,
  number: 0,
  text: null
}

export default Ol
