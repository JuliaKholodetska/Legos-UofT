import React from 'react';
import { Divider, Text, Box } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box display="flex" as="footer" flexDirection="column">
            <Divider borderTopColor="divider.main" borderTop="2px" />
            <Box
                padding={{ base: '26px 0 30px 100px' }}
                justifySelf="center"
                d="flex"
                alignItems="center">
                <Text fontSize="sm" fontWeight="medium" color="text.secondary.80" textStyle="body">
                    Logos app
                </Text>
            </Box>
        </Box>
    );
};
export default Footer;
