import React from 'react';
import { Divider, Text, Box, Center } from '@chakra-ui/react';

const Footer = () => {
    return (
        <Box display="flex" as="footer" flexDirection="column">
            <Divider borderTopColor="divider.main" borderTop="2px" />
            <Box
                h={24}
                padding={{ base: '26px 0 30px 100px' }}
                justifySelf="center"
                d="flex"
                alignItems="center">
                <Center>
                    <Text fontSize="sm" fontWeight="medium" color="text.secondary.80" textStyle="body">
                        Legos app
                    </Text>
                    {/* <Text fontSize="sm" fontWeight="medium" color="text.secondary.80" textStyle="body">
                        Contact us
                    </Text> */}
                </Center>
            </Box>
        </Box>
    );
};
export default Footer;
