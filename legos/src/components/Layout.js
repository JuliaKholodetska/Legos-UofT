import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Flex, Divider, Text } from '@chakra-ui/react';

import { Footer, Header } from './ComponentMap';

const Layout = ({
    children
}) => {
    return (
        <>
            <Header>
                <Divider size="md" />
            </Header>
            <Flex
                flexGrow={1}
                alignItems={'center'}>
                <Box flex="1 1 100%" mb={27}>
                    <Flex
                        flexDir="column"
                        overflow="hidden"
                        flex={1}
                        height="100%"
                        width="100%"
                        pl={15}
                        pr={15}>
                        {/* <Flex alignItems="center"> */}
                        <Box w="230px" borderColor="secondary.light.60" borderStyle="solid" borderBottomWidth="4px" ml={10}>
                            <Text
                                marginTop="40px"
                                marginBottom="10px"
                                fontSize="1.5rem"
                                as="h2"
                                ml={10}
                                fontWeight="bold"
                            >
                                Auto Compiler
                            </Text>
                        </Box>
                        {/* </Flex> */}
                        {children?.content ? children.content : children}
                    </Flex>
                </Box>
            </Flex >
            <Footer />
        </>
    );
};

Layout.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Layout;
