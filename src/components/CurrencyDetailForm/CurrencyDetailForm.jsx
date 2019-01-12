import React from 'react';
import { Form } from 'semantic-ui-react';

const CurrencyDetailForm = (props) => {
    return (
        <Form>
            <Form.Group widths='equal'>
                <Form.Field placeholder='0.00' control='input' />
                <Form.Field control='select'>
                    <option value='EUR'>EUR</option>
                    <option value='USD'>USD</option>
                    <option value='JPY'>JPY</option>
                </Form.Field>
            </Form.Group>
        </Form>
    )
}

export default CurrencyDetailForm;
