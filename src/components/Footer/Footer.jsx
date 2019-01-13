import React from 'react';
import { Icon } from 'semantic-ui-react';

const Footer = props => (
  <footer>
    {props.title} Copyright © 2019 Dinika Saxena All Rights Reserved{' '}
    <Icon name="github" />
    Fork me on{' '}
    <a href="https://github.com/Dinika/currency-converter.git">GitHub</a>
  </footer>
);

export default Footer;
