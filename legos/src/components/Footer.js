import React from 'react';
import { Divider, Text, Box, Center, Flex, Link } from '@chakra-ui/react';

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
                </Center>
                <Flex>
                    <Link href='/contact' >
                        <Text fontSize="sm" fontWeight="bold" color="text.secondary.80" textStyle="body" mt={4}>
                            Contact us
                        </Text>
                    </Link>
                    {/* <Text fontSize="sm" fontWeight="medium" color="text.secondary.80" textStyle="body" mt={4} ml={8}>
                        lina@gmail.com
                    </Text> */}
                </Flex>
            </Box>
        </Box>
    );
};
export default Footer;
