import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Flex, Divider, Text, Spacer } from '@chakra-ui/react';

import { Footer, Header, MenuDropdown } from './ComponentMap';

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
                        <Flex flexDir="row">
                            <Box w="176px" borderColor="secondary.light.30" borderStyle="solid" borderBottomWidth="4px" ml="90px">
                                <Text
                                    marginTop="40px"
                                    marginBottom="10px"
                                    fontSize="1.5rem"
                                    as="h2"
                                    fontWeight="bold"
                                >
                                    Legos Checker
                                </Text>
                            </Box>
                            <Spacer></Spacer>
                            <Box w="110px" mr="100px" mt="30px"  >
                                <MenuDropdown />
                            </Box>
                        </Flex>
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
