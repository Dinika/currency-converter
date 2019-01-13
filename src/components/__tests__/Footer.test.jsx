import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../Footer/Footer';

describe('Footer', () => {
  it('renders with all props set', () => {
    const title = 'Some Title';
    const wrapper = shallow(<Footer title={title} />);
    expect(wrapper).toMatchSnapshot();
  });
});
