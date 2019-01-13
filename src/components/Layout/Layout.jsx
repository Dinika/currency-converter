import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Aux from '../../HOC/Aux/Aux';
import TopBar from '../TopBar/TopBar';
import CurrencyConversionCard from '../../containers/CurrencyConversionCard/CurrencyConversionCard';
import Footer from '../Footer/Footer';
// Todo: Configure eslint to accept css loads

const Layout = () => (
  <Aux>
    <TopBar title="Currency Converter" />
    <Grid textAlign="center" verticalAlign="middle">
      <Grid.Column>
        <Header as="h4" textAlign="center">
          Convert Euros, Dollars, and Japanese Yen
        </Header>
        <CurrencyConversionCard />
      </Grid.Column>
    </Grid>
    <Footer title="Currency Converter" />
  </Aux>
);

export default Layout;
