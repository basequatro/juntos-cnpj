import React, { Component } from 'react'
import { createApolloFetch } from 'apollo-fetch'
import Header from '../../components/Header'
import Input from '../../components/Input'
import Button from '../../components/Button'
import {
  Wrapper,
  Row,
  Title,
  SubTitle,
  Icon,
  Ol,
  Block
} from '../../components/Layout'

class Search extends Component {
  state = {
    cnpj: ''
  }

  handleChange = e => {
    this.setState({ cnpj: e })
    return e
      .replace('.', '')
      .replace('.', '')
      .replace('/', '')
      .replace('-', '')
  }

  handleCnpj = async e => {
    const cnpj = await this.handleChange(e.target[0].value)
    const variables = {
      cnpj
    }
    const accessToken = await localStorage.getItem('ACCESS-TOKEN')
    const uri = 'http://localhost:1618/graphql'
    const query = `
      query fetchCNPJ($cnpj: String!) {
        company(cnpj: $cnpj) {
          id,
          name,
          cnpj,
          status
        }
      }
  `
    if (accessToken != null) {
      const constructOptions = request => {
        return {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'access-token': accessToken
          },
          body: JSON.stringify(request)
        }
      }
      const apolloFetch = createApolloFetch({ constructOptions })

      fetch(uri, constructOptions())
      apolloFetch({ query, variables })
        .then(res => {
          const cnpjType = res.data.company == null ? 'false' : res.data.company
          this.setState({ company: cnpjType })
          console.log('Response', res.data.company == null && false)
        })
        .catch(e => {
          console.error('error', e)
        })
    } else {
      console.error('Erro', 'Logue novamente')
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.handleCnpj(e)
  }

  render () {
    const { company, cnpj } = this.state
    return (
      <Wrapper>
        <Row>
          <Header>
            <Icon className='icon-chart-line-outline' />
            <Row pl>
              <Title fontSize='1.2rem'>Nova Cotação</Title>
              <SubTitle fontSize='0.8rem'>#0980</SubTitle>
            </Row>
          </Header>
          <Row spaceBetween backgroundColor='#F2F6F8'>
            <Block padder>
              <Ol number='1' text='Buscar por CNPJ ou empresa' />
            </Block>
            <Row flexEnd>
              <form className='form' onSubmit={this.handleSubmit}>
                <Input
                  isValid={company}
                  placeholder='__.___.___/____-__'
                  value={cnpj}
                  className='custominput'
                  mask={[
                    /\d/,
                    /\d/,
                    '.',
                    /\d/,
                    /\d/,
                    /\d/,
                    '.',
                    /\d/,
                    /\d/,
                    /\d/,
                    '/',
                    /\d/,
                    /\d/,
                    /\d/,
                    /\d/,
                    '-',
                    /\d/,
                    /\d/
                  ]}
                />

                <Row padder>
                  <Button
                    text='OK'
                    icon='icon-arrow-right'
                    background='#32CCCC'
                    color='white'
                  />
                </Row>
              </form>
            </Row>
          </Row>
        </Row>
      </Wrapper>
    )
  }
}

export default Search
