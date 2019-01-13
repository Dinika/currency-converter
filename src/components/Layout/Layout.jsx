import React from 'react';
import { Grid, Header } from 'semantic-ui-react';
import Aux from '../../HOC/Aux/Aux';
import TopBar from '../TopBar/TopBar';
import CurrencyConversionCard from '../../containers/CurrencyConversionCard/CurrencyConversionCard';
import classes from './Layout.module.css';

const Layout = () => (
    <Aux>
      <TopBar title="Currency Converter" />
      <Grid textAlign="center" className={classes.Grid} verticalAlign="middle">
        <Grid.Column style={{ maxWidth: 700 }} className={classes.Column}>
          <Header as="h3" textAlign="center">
            Convert Euros, Dollars, and Japanese Yen
          </Header>
          <CurrencyConversionCard />
        </Grid.Column>
      </Grid>
    </Aux>
  );

export default Layout;
