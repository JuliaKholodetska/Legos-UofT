import { always, cond, T } from 'ramda';
import { Circle, Text, Flex, Box, HStack } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronRightIcon } from '@chakra-ui/icons';
import CodeMirror from '@uiw/react-codemirror';

function Output({
    text = 'You need to enter input first',
    placeholderResValue = 'You need to enter input first',
    isError = false,
    isDisabled = true,
    isOpenCard = false,
    setIsOpenCard = () => { },
}) {
    const circleColor = cond([
        [() => isError, always('error.main')],
        [() => isDisabled, always('divider.main')],
        [() => isOpenCard, always('success.main')],
        [T, always('text.main')]
    ]);

    const openCard = () => { setIsOpenCard(!isOpenCard) }

    return (
        <> {isOpenCard
            ? <Flex ml="30px"
                h="100%"
                mb="30px"
                onClick={isDisabled || isError ? () => { } : openCard}
                _hover={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
                p={5} >
                <Circle size={5} bg={circleColor} mr={5}>
                    <ChevronUpIcon w={5} h={5} color="text.white" />
                </Circle>
                <Box>
                    <Text fontWeight={isDisabled ? '400' : '700'} fontSize="xl" mr="40px">
                        Result:
                    </Text>
                    <Box w='100%' mt="20px">
                        <CodeMirror
                            value={text}
                            height="40vh"
                            width="90vh"
                        />
                    </Box>
                </Box>
            </Flex > :
            <HStack
                ml="30px"
                h="100%"
                mb="30px"
                onClick={isDisabled || isError ? () => { } : openCard}
                _hover={{ cursor: isDisabled ? 'not-allowed' : 'pointer' }}
                p={5}
                data-testid="accordion-title">
                <Circle size={5} bg={circleColor} mr={5}>
                    <ChevronRightIcon w={5} h={5} color="text.white" />
                </Circle>
                <HStack>
                    <Text fontWeight={isDisabled ? '400' : '700'} fontSize="xl" mr="40px">
                        Result:
                    </Text>
                    <Text fontSize="xl">
                        {placeholderResValue}
                    </Text>
                </HStack>
            </HStack>}</>
    );
}

export default Output;
