import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = props => (
  <Menu>
    <Menu.Item name="appTitle">{props.title}</Menu.Item>
  </Menu>
);

export default Header;
