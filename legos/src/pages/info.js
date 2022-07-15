import { Card, Footer, Header } from '../components/ComponentMap';
import { Text, Divider, Flex, Box, Spacer, VStack, Link } from '@chakra-ui/react';
import {
    ExternalLinkIcon
} from "@chakra-ui/icons";
function Info() {
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

                        </Flex>
                        <Card>
                            <VStack
                                // divider={<StackDivider borderColor='gray.200' />}
                                spacing={4}
                                align='stretch'
                                ml={400}
                                mt={58}
                            >
                                <Box h='40px' >
                                    <Text
                                        fontWeight="bold"
                                        fontSize="1rem"
                                        as="h2"
                                    >Contact</Text>
                                </Box>
                                <Box h='40px'>
                                    <Text ml={28} fontSize="0.8rem">Nick Feng       nick.feng@mail.utoronto.ca
                                        <Link href='http://www.cs.toronto.edu/~fengnick/' isExternal>
                                            <ExternalLinkIcon mx='2px' />
                                        </Link>
                                    </Text>
                                </Box>
                                <Box h='40px'>
                                    <Text ml={28} fontSize="0.8rem">Lina Marsso     lina.marsso@utoronto.ca
                                        <Link href='http://www.cs.toronto.edu/~lmarsso/' isExternal>
                                            <ExternalLinkIcon mx='2px' />
                                        </Link>
                                    </Text>
                                </Box>
                                <Box h='40px'>
                                    <Text ml={28} fontSize="0.8rem">Web interface designed by       Yulia Kholodetska</Text>
                                </Box>
                            </VStack>
                            <Box h='176px' />
                        </Card>
                    </Flex>
                </Box>
            </Flex >
            <Footer />
        </>

    );
}

export default Info;
