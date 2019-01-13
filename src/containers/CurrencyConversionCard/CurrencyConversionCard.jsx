// disable eslint rule 'prefer destructuring ' in file for legibility purposes

import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react';
import CurrencyDetailForm from '../../components/CurrencyDetailForm/CurrencyDetailForm';
import axios from '../../axios-currencies';
import LoadingAnimation from '../../components/LoadingAnimation/LoadingAnimation';
import CurrencySummary from '../../components/CurrencySummary/CurrencySummary';

class CurrencyConversionCard extends Component {
  constructor(props) {
    /*
        For a larger application I would keep only the loading property
        in this state. Other properties could be transferred to a Redux store
        */
    super(props);
    this.state = {
      currency1Type: 'EUR',
      currency1Amount: 0.0,
      currency2Type: 'EUR',
      currency2Amount: 0.0,
      loading: true
    };
    this.currencies = {};
    this.currencyOptions = [];
  }

  componentDidMount() {
    axios
      .get('/currencies.json')
      .then(response => {
        // currencies is not a deep copy of response data
        this.currencies = { ...response.data };
        Object.keys(response.data).forEach(key => {
          this.currencyOptions.push(key);
        });
        this.setState({ loading: false });
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  onCurrencyAmountChange(event) {
    const fromCurrencyAmount = +event.target.value;
    if (event.target.name === 'currency1') {
      const fromCurrencyType = this.state.currency1Type;
      const toCurrencyType = this.state.currency2Type;
      const toCurrencyAmount = this.computeCurrency(
        fromCurrencyAmount,
        fromCurrencyType,
        toCurrencyType
      );
      this.setState({
        currency1Amount: fromCurrencyAmount,
        currency2Amount: toCurrencyAmount
      });
    } else {
      const fromCurrencyType = this.state.currency2Type;
      const toCurrencyType = this.state.currency1Type;
      const toCurrencyAmount = this.computeCurrency(
        fromCurrencyAmount,
        fromCurrencyType,
        toCurrencyType
      );
      this.setState({
        currency2Amount: fromCurrencyAmount,
        currency1Amount: toCurrencyAmount
      });
    }
  }

  onCurrencyTypeChange(event) {
    const fromCurrencyType = event.target.value;
    if (event.target.name === 'currency1') {
      const fromCurrencyAmount = this.state.currency2Amount;
      const toCurrencyType = this.state.currency2Type;
      const toCurrencyAmount = this.computeCurrency(
        fromCurrencyAmount,
        fromCurrencyType,
        toCurrencyType
      );
      this.setState({
        currency1Type: fromCurrencyType,
        currency1Amount: toCurrencyAmount
      });
    } else {
      const fromCurrencyAmount = this.state.currency1Amount;
      const toCurrencyType = this.state.currency1Type;
      const toCurrencyAmount = this.computeCurrency(
        fromCurrencyAmount,
        fromCurrencyType,
        toCurrencyType
      );
      this.setState({
        currency2Type: fromCurrencyType,
        currency2Amount: toCurrencyAmount
      });
    }
  }

  computeCurrency(fromCurrencyAmount, fromCurrencyType, toCurrencyType) {
    const currencies = { ...this.currencies };
    const toCurrencyAmount = (
      fromCurrencyAmount * currencies[fromCurrencyType].rates[toCurrencyType]
    ).toFixed(2);
    return +toCurrencyAmount;
  }

  render() {
    const fromCurrencyType = this.state.currency1Type;
    const targetCurrencyType = this.state.currency2Type;
    const targetCurrencyValue = this.currencies[fromCurrencyType]
      ? this.currencies[fromCurrencyType].rates[targetCurrencyType]
      : 0.0;

    const loaderOrCurrencyDetailForm = this.state.loading ? (
      <LoadingAnimation />
    ) : (
      <Segment stacked>
        <CurrencySummary
          fromCurrencyType={fromCurrencyType}
          targetCurrencyType={targetCurrencyType}
          targetCurrencyAmount={targetCurrencyValue}
        />
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
      </Segment>
    );
    return loaderOrCurrencyDetailForm;
  }
}

export default CurrencyConversionCard;
