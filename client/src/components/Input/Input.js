import React, { Fragment } from 'react'
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Row, Block } from '../Layout/index'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  border: 1px solid transparent;
  border-color: ${props => (props.hasError ? 'red' : 'transparent')};
  font-family: 'Gill Sans, sans-serif';
  flex-direction: row;
  padding: 2vh;
  align-items: ${props => (props.alignflexEnd ? 'flex-end' : 'none')};
`

const Label = styled.label`
  color: #ccc;
  margin-bottom: 15px;
  font-size: 0.9em;
  font-weight: bold;
  font-family: 'Gill Sans, sans-serif';
`

const IconNOK = styled.i`
  color: red;
  font-size: 2em;
  align-self: center;
  width: 50px;
`

const IconOK = styled.i`
  color: green;
  font-size: 2em;
  align-self: center;
  width: 50px;
`

const InputSC = styled.input`
background-color: transparent
  padding: 0;
  border: none;
  font-size: 1.8rem;
  outline: none;
  font-weight: 600;
  color: gray
`

const Input = ({ placeholder, mask, value, onChange, isValid, ...rest }) => (
  <Fragment>
    <Wrapper alignflexEnd>
      <Row>
        <Label>CNPJ / Empresa</Label>
        <MaskedInput
          {...rest}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          mask={mask}
          render={(ref, props) => (
            <InputSC ref={input => ref(input)} {...props} />
          )}
        />
      </Row>
      <Block>
        {isValid && isValid.cnpj && <IconOK className='icon-tick' />}
        {isValid === 'false' ? <IconNOK className='icon-delete' /> : null}
      </Block>
    </Wrapper>
  </Fragment>
)

Input.propTypes = {
  placeholder: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  value: PropTypes.string,
  onChange: PropTypes.string,
  isValid: PropTypes.string
}

Input.defaultProps = {
  placeholder: 'Label',
  children: null,
  value: '',
  onChange: '',
  isValid: ''
}

export default Input
