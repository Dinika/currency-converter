import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CurrencySummary extends Component {
    render() {
        const {fromCurrencyType, targetCurrencyType, targetCurrencyAmount} = this.props;
        return (
            <h4>
                1 {fromCurrencyType} is equal to {targetCurrencyAmount} {targetCurrencyType}
            </h4>
        )
    }
}

CurrencySummary.propTypes = {
    fromCurrencyType: PropTypes.string.isRequired,
    targetCurrencyType: PropTypes.string.isRequired,
    targetCurrencyAmount: PropTypes.number.isRequired,
};

export default CurrencySummary;
