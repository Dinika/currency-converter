import React from 'react';
import { shallow } from 'enzyme';
import TopBar from '../TopBar/TopBar';

describe('TopBar', () => {
  it('renders with all props set', () => {        
    const wrapper = shallow(
        <TopBar title="Some Title" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});