import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Text } from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons';
function Notification({
    infoText = '',
    top = 'auto',
    right = 'auto',
    bottom = 'auto',
    left = 'auto'
}) {
    return (
        <Flex
            w="215px"
            bgColor="background.main.white"
            boxShadow="0 2px 4px 0 rgba(24,26,29,0.08)"
            borderWidth={1}
            borderColor="secondary.light.60"
            p="2"
            alignItems="center"
            justifyContent="center"
            position="absolute"
            right="485px"
            top={top}
            bottom={16}
            left={left}
            >
            <InfoOutlineIcon w="4" h="4" color="secondary.main" mr="2"></InfoOutlineIcon>
            <Text fontSize="xs">{infoText}</Text>
        </Flex>
    );
}

Notification.propTypes = {
    infoText: PropTypes.string,
    top: PropTypes.string,
    right: PropTypes.string,
    bottom: PropTypes.string,
    left: PropTypes.string
};

export default Notification;