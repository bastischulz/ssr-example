import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../src/theme';
import withApolloClient from '../lib/with-apollo-client';
import ApolloProvider from 'react-apollo/ApolloProvider'
import { Grid } from '@material-ui/core'
import dynamic from "next/dynamic";
import Query from "react-apollo/Query";
import {gql} from "apollo-boost";
const AsyncComponent = dynamic(() => import('../src/AsyncComponent'))

const GET_CONTINENTS = gql`
  {
    continents {
      name
    }
  }
`

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, apolloClient } = this.props;

    return (
      <Container>
        <Head>
          <title>My page</title>
        </Head>
        <ApolloProvider client={apolloClient}>
          <ThemeProvider theme={theme}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <Grid container justify='center'>
                  <Query query={GET_CONTINENTS}>
                      {({ data : { continents } = {} }) => !continents
                          ? null
                          : <AsyncComponent>{continents}</AsyncComponent>
                      }
                  </Query>
                <Component {...pageProps} />
              </Grid>
          </ThemeProvider>
        </ApolloProvider>
      </Container>
    );
  }
}

export default withApolloClient(MyApp);
