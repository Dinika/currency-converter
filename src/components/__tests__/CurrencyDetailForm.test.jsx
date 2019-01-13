import React from 'react';
import { shallow } from 'enzyme';

import CurrencyDetailForm from '../CurrencyDetailForm/CurrencyDetailForm';

describe('CurrencyDetailForm', () => {
  it('renders with all props set', () => {
    const currencyOptions = ['Option1', 'Option2'];

        
const currencyAmount = 10;        
    const wrapper = shallow(
        <CurrencyDetailForm
            currencyOptions={currencyOptions}
            currencyAmount={currencyAmount}
            onCurrencyAmountChange={jest.fn()}
            onCurrencyTypeChange={jest.fn()} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});