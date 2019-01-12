import React, { Component } from 'react';
import TopBar from '../TopBar/TopBar';
import Aux from '../../HOC/Aux/Aux';
import { Grid, Header } from 'semantic-ui-react';
import CurrencyConversionCard from '../../containers/CurrencyConversionCard/CurrencyConversionCard';

const Layout = (props) => {
    return(
        <Aux>
            <TopBar />
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h3' textAlign='center'>
                        Convert Euros, Dollars, and Japanese Yen
                    </Header>
                    <CurrencyConversionCard />
                </Grid.Column>
            </Grid>    
        </Aux>
    )
}

export default Layout;