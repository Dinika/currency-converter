import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import CurrencyDetailForm from '../../components/CurrencyDetailForm/CurrencyDetailForm';
import axios from '../../axios-currencies';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';

class CurrencyConversionCard extends Component {
    constructor(props) {
        /*
        For a larger application I would keep only the loading property
        in this state. Other properties could be transferred to a Redux store
        */
        super(props);
        this.state = {
            currency1Type: 'EUR',
            currency1Amount: 0.00,
            currency2Type: 'EUR',
            currency2Amount: 0.00,
            loading: true,
        }
        this.currencies = {};
        this.currencyOptions = [];
    }
    
    componentDidMount() {
        axios.get('/currencies.json')
            .then(response => {
                //currencies is not a deep copy of response data
                this.currencies = {...response.data};
                for(let key in response.data) {
                    this.currencyOptions.push(key);
                }
                this.setState({loading: false})
            })
            .catch(error => {console.log(error)});
    }

    computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType) {
        const currencies = this.currencies,
            toCurrencyAmount = fromCurrencyAmount * currencies[fromCurrencyType].rates[toCurrencyType]; 
        return toCurrencyAmount;
    }
    
    onCurrencyAmountChange(event) {
        const fromCurrencyAmount = +event.target.value;
        if(event.target.name === 'currency1') {
            const fromCurrencyType = this.state.currency1Type,
            toCurrencyType = this.state.currency2Type,
            toCurrencyAmount = this.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            
            this.setState({
                currency1Amount: fromCurrencyAmount,
                currency2Amount: toCurrencyAmount,
            });            
        } else {
            const fromCurrencyType = this.state.currency2Type,
                toCurrencyType = this.state.currency1Type,
                toCurrencyAmount = this.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            this.setState({
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
            toCurrencyAmount = this.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            
            this.setState({
                currency1Type: fromCurrencyType,
                currency2Amount: toCurrencyAmount,
            });            
        } else {
            const fromCurrencyAmount = this.state.currency2Amount,
                toCurrencyType = this.state.currency1Type,
                toCurrencyAmount = this.computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType);
            this.setState({
                currency2Type: fromCurrencyType,
                currency1Amount: toCurrencyAmount,
            });
        }
    }



    render() {
        const loaderOrCurrencyDetailForm = this.state.loading ?
            <LoadingAnimation /> :
            (<Segment stacked>
                <CurrencyDetailForm
                    name="currency1" 
                    currencyOptions={[...this.currencyOptions]} 
                    onCurrencyAmountChange={this.onCurrencyAmountChange.bind(this)}
                    onCurrencyTypeChange={this.onCurrencyTypeChange.bind(this)}
                    currencyAmount={this.state.currency1Amount}
                />
                <CurrencyDetailForm 
                    name="currency2"
                    currencyOptions={[...this.currencyOptions]} 
                    onCurrencyAmountChange={this.onCurrencyAmountChange.bind(this)}
                    onCurrencyTypeChange={this.onCurrencyTypeChange.bind(this)}
                    currencyAmount={this.state.currency2Amount} 
                />
            </Segment>)

        return loaderOrCurrencyDetailForm
    }
}

export default CurrencyConversionCard;