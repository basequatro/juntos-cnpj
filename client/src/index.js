import 'react-app-polyfill/ie11'
import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import App from './containers/App/App'
import * as serviceWorker from './serviceWorker'
import theme from './theme/index'
import './fonts/selection.css'

// bypass to use with graphql w/ fetch or axios
const client = new ApolloClient()

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)

serviceWorker.unregister()
