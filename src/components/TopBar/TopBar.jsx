import React from 'react';
import { Menu } from 'semantic-ui-react';

const Header = (props) => {
    return (
        <Menu>
            <Menu.Item
                name='appTitle'>
                {props.title}
            </Menu.Item>
        </Menu>
    )
}

export default Header;
