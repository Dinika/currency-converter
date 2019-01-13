import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencySummary extends Component {
  render() {
    const {
      fromCurrencyType,
      targetCurrencyType,
      targetCurrencyAmount
    } = this.props;
    return (
      <h3>
        1 {fromCurrencyType} is equal to {targetCurrencyAmount}{' '}
        {targetCurrencyType}
      </h3>
    );
  }
}

CurrencySummary.propTypes = {
  fromCurrencyType: PropTypes.string.isRequired,
  targetCurrencyType: PropTypes.string.isRequired,
  targetCurrencyAmount: PropTypes.number.isRequired
};

export default CurrencySummary;
