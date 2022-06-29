import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuDivider, Text } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
function MenuDropdown({
    // infoText = '',
    // top = 'auto',
    // right = 'auto',
    // bottom = 'auto',
    // left = 'auto'bg='white'  colorScheme='blue'
}) {
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='blue'>
                Examples
            </MenuButton>
            <MenuList>
                <MenuItem>Hole</MenuItem>
                <MenuItem>Lambda</MenuItem>
                <MenuItem>Let</MenuItem>
                <MenuDivider />
                <MenuItem>My Editor</MenuItem>
            </MenuList>
        </Menu >
    );
}

MenuDropdown.propTypes = {

};

export default MenuDropdown;