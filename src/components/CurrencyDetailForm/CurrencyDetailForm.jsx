import React, { Component } from 'react';
import { Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';

class CurrencyDetailForm extends Component {
    renderCurrencyOptions() {
        return(
            this.props.currencyOptions.map(currency => (
                <option 
                    key={currency} 
                    value={currency}>{currency}
                </option>)
            )
        )
    }

    render() {
        return (
            <Form>
                <Form.Group widths='equal'>
                    <Form.Field
                        placeholder={this.props.currencyAmount}
                        control='input' 
                        value={this.props.currencyAmount}
                        name={this.props.name} 
                        type="number"
                        onChange={this.props.onCurrencyAmountChange} 
                    />
                    <Form.Field 
                        name={this.props.name} 
                        control='select'
                        value={this.props.selectedValue}
                        onChange={this.props.onCurrencyTypeChange}>
                        {this.renderCurrencyOptions()}
                    </Form.Field>
                </Form.Group>
            </Form>
        )
    }
}

CurrencyDetailForm.propTypes = {
   currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
   currencyAmount: PropTypes.number.isRequired,
   onCurrencyAmountChange: PropTypes.func.isRequired,
   onCurrencyTypeChange: PropTypes.func.isRequired,
};

export default CurrencyDetailForm;
