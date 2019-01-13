import React from 'react';
import { Menu } from 'semantic-ui-react';
import classes from './TopBar.module.css';

const TopBar = props => (
  <Menu className={classes.TopBar}>
    <Menu.Item name="appTitle">{props.title}</Menu.Item>
  </Menu>
);

export default TopBar;
