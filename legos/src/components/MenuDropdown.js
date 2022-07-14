import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuButton, MenuItem, MenuList, Button, MenuDivider } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
function MenuDropdown({
    setIsExample
}) {
    return (
        <Menu >
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme='blue'>
                Examples
            </MenuButton>
            <MenuList>
                <MenuItem onClick={() => setIsExample({
                    isExampleBool: true,
                    type: 'hole'
                })}>
                    Hole
                </MenuItem>
                <MenuItem onClick={() => setIsExample({
                    isExampleBool: true,
                    type: 'lambda'
                })}>
                    Lambda
                </MenuItem>
                <MenuItem onClick={() => setIsExample({
                    isExampleBool: true,
                    type: 'let'
                })}>
                    Let
                </MenuItem>
                <MenuDivider />
                <MenuItem onClick={() => setIsExample({
                    isExampleBool: false,
                    type: 'editor'
                })}>
                    My Editor
                </MenuItem>
            </MenuList>
        </Menu >
    );
}

MenuDropdown.propTypes = {
    setIsExample: PropTypes.func
};

export default MenuDropdown;