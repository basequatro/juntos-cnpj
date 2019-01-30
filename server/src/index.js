import 'dotenv/config'
import cors from 'cors'
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'
import { AuthorizationError } from 'apollo-server'
import bodyParser from 'body-parser'

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.text({ type: 'application/graphql' }))

const schema = gql`
  type Query {
    company(cnpj: String): Company
    companies: [Company!]
  }
  type Company {
    id: ID!
    cnpj: String!
    name: String!
    status: String!
  }
`

let companies = [
  {
    id: '0bbff9ed-8f94-4fe6-a07b-5bdf0f3b7d69',
    cnpj: '15065251000121',
    name: 'Andre ME',
    status: 'IRREGULAR'
  },
  {
    id: '6e296fe5-99b8-456f-acb2-9ad9b0d4730b',
    cnpj: '50997042000117',
    name: 'Empresa 1',
    status: 'IRREGULAR'
  },
  {
    id: 'fe18ef35-da4a-4d14-a1c8-c86b641250cd',
    cnpj: '87053451000175',
    name: 'Empresa 2',
    status: 'REGULAR'
  }
]

const resolvers = {
  Query: {
    company: (parent, { cnpj }) => {
      let obj = companies.find(o => o.cnpj === cnpj)
      return obj
    },
    companies: requestId => {
      return Object.values(companies)
    }
  }
}

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  context: ({ req, res }) => {
    const requestId = req.headers['access-token']
    if (!requestId && requestId !== process.env.ACCESS_TOKEN) {
      throw new AuthorizationError('you must be logged in')
    }
    return requestId
  }
})

server.applyMiddleware({ app, path: '/graphql' })

app.listen({ port: 1618 }, () => {
  console.log('Apollo Server on http://localhost:1618/graphql')
  console.log('Request done on /graphql doesnt require ACCESS_TOKEN')
})
