import React from 'react';
import { shallow } from 'enzyme';
import Layout from '../Layout/Layout';

describe('Layout', () => {
  it('renders with all props set', () => {        
    const wrapper = shallow(
        <Layout />
    );
    expect(wrapper).toMatchSnapshot();
  });
});