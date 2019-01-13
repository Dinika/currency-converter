import React from 'react';
import { shallow } from 'enzyme';
import CurrencyConversionCard from '../CurrencyConversionCard/CurrencyConversionCard';

describe('CurrencyConversionCard', () => {
  it('renders Loader when loading is true', () => {
    const wrapper = shallow(
        <CurrencyConversionCard />
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('renders CurrencyDetailForm when loading set to false', () => {
    const wrapper = shallow(
        <CurrencyConversionCard />
    );
    wrapper.setState({ loading: false })
    wrapper.update();
    expect(wrapper).toMatchSnapshot();
  });

});
