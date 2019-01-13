import React from 'react';
import { Menu } from 'semantic-ui-react';
// eslint-disable-next-line no-console
import './TopBar.css';

const TopBar = props => (
  <Menu className="__TopBar__">
    <Menu.Item name="appTitle">{props.title}</Menu.Item>
  </Menu>
);

export default TopBar;
