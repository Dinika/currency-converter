import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import CurrencyDetailForm from '../../components/CurrencyDetailForm/CurrencyDetailForm';

const currencies = {
    'EUR' : {
        rates: {
            'USD': 0.5,
            'EUR': 1,
            'JPY': 0.25,
        }
    },
    'USD' : {
        rates: {
            'USD': 1,
            'EUR': 2,
            'JPY': 0.25,
        }
    },
    'JPY' : {
        rates: {
            'USD': 2,
            'EUR': 4,
            'JPY': 1,
        }
    }
}

let currencyOptions = [];
for (let key in currencies) {
    currencyOptions.push(key)
}

class CurrencyConversionCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency1Type: 'EUR',
            currency1Amount: 0.00,
            currency2Type: 'EUR',
            currency2Amount: 0.00,
        }
    }
    
    static computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType) {
        const toCurrencyAmount = fromCurrencyAmount * currencies[fromCurrencyType].rates[toCurrencyType]; 
        return toCurrencyAmount;
    }

    onCurrencyAmountChange(event) {
        const fromCurrencyAmount = +event.target.value;
        if(event.target.name === 'currency1') {
            const fromCurrencyType = this.state.currency1Type,
            toCurrencyType = this.state.currency2Type,
            toCurrencyAmount = CurrencyConversionCard.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            
            this.setState({
                ...this.state,
                currency1Amount: fromCurrencyAmount,
                currency2Amount: toCurrencyAmount,
            });            
        } else {
            const fromCurrencyType = this.state.currency2Type,
                toCurrencyType = this.state.currency1Type,
                toCurrencyAmount = CurrencyConversionCard.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            this.setState({
                ...this.state,
                currency2Amount: fromCurrencyAmount,
                currency1Amount: toCurrencyAmount,
            });
        }
    }

    onCurrencyTypeChange(event) {
        const fromCurrencyType = event.target.value;
        if(event.target.name === 'currency1') {
            const fromCurrencyAmount = this.state.currency1Amount,
            toCurrencyType = this.state.currency2Type,
            toCurrencyAmount = CurrencyConversionCard.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            
            this.setState({
                ...this.state,
                currency1Type: fromCurrencyType,
                currency2Amount: toCurrencyAmount,
            });            
        } else {
            const fromCurrencyAmount = this.state.currency2Amount,
                toCurrencyType = this.state.currency1Type,
                toCurrencyAmount = CurrencyConversionCard.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            this.setState({
                ...this.state,
                currency2Type: fromCurrencyType,
                currency1Amount: toCurrencyAmount,
            });
        }
    }



    render() {
        return (
            <Segment stacked>
                <CurrencyDetailForm
                    name="currency1" 
                    currencyOptions={currencyOptions} 
                    onCurrencyAmountChange={this.onCurrencyAmountChange.bind(this)}
                    onCurrencyTypeChange={this.onCurrencyTypeChange.bind(this)}
                    currencyAmount={this.state.currency1Amount}
                />
                <CurrencyDetailForm 
                    name="currency2"
                    currencyOptions={currencyOptions} 
                    onCurrencyAmountChange={this.onCurrencyAmountChange.bind(this)}
                    onCurrencyTypeChange={this.onCurrencyTypeChange.bind(this)}
                    currencyAmount={this.state.currency2Amount} 
                />
            </Segment>
        )
    }
}

export default CurrencyConversionCard;