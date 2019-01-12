import React, { Component } from 'react';
import { Segment, Button } from 'semantic-ui-react';
import CurrencyDetailForm from '../../components/CurrencyDetailForm/CurrencyDetailForm';

class CurrencyConversionCard extends Component {
    render() {
        return (
            <Segment stacked>
                <CurrencyDetailForm />
                <CurrencyDetailForm />
            </Segment>
        )
    }
}

export default CurrencyConversionCard;