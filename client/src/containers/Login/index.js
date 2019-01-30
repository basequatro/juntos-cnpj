import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Button from '../../components/Button'
import {
  Wrapper,
  Row,
  Background,
  Icon,
  Title,
  SubTitle
} from '../../components/Layout'

class Login extends Component {
  componentDidMount () {
    // Change to simulate login
    // await localStorage.setItem('ACCESS-TOKEN', 23456789)
  }

  handleNav = async e => {
    await localStorage.setItem('ACCESS-TOKEN', 23456789)
    const { history } = this.props
    history.push(`/${e}`)
  }

  render () {
    return (
      <Wrapper>
        <Background>
          <Row />
          <Row>
            <Icon className='icon-chart-line-outline' />
            <Row noFlex>
              <Title fontSize='2rem'>Cotação de Seguros</Title>
              <SubTitle fontSize='1.2rem'>
                Solução inovadora da líder de mercado
              </SubTitle>
            </Row>
            <form onSubmit={this.handleSubmit}>
              <Button
                text='Iniciar'
                icon='icon-arrow-right'
                background='#F2F6F8'
                color='#937ef1'
                onClick={() => this.handleNav('search')}
              />
            </form>
          </Row>
        </Background>
      </Wrapper>
    )
  }
}
Login.propTypes = {
  history: PropTypes.string.isRequired
}
export default Login
