import React from 'react';
import PropTypes from 'prop-types';
import { Box, Heading, Flex, Divider, } from '@chakra-ui/react';
import { Footer, Header } from './ComponentMap';

/**
 * Renders a <Layout /> component
 * @param  props.children - this component can wrap other components and render them wihtin the main html element.
 * @returns <Layout> <div>...</div> </Layout>
 *
 **/

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
                        <Flex alignItems="center">
                            <Heading
                                marginTop="40px"
                                marginBottom="32px"
                                fontSize="1.5rem"
                                as="h2"
                                textStyle="body">
                                Automatically check
                            </Heading>
                            {/* can be come elements here */}
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
