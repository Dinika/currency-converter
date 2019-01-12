import React from 'react';
import { Form } from 'semantic-ui-react';

const CurrencyDetailForm = (props) => {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field
                    placeholder={props.currencyAmount}
                    control='input' 
                    value={props.currencyAmount}
                    name={props.name} 
                    type="number"
                    onChange={props.onCurrencyAmountChange} 
                />
                <Form.Field control='select' onChange={props.onCurrencyChange}>
                    {
                        props.currencyOptions.map(currency => <option key={currency} value={currency}>{currency}</option>)
                    }
                </Form.Field>
            </Form.Group>
        </Form>
    )
}

export default CurrencyDetailForm;
