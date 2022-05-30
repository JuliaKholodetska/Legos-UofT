import { useState } from 'react';
import { always, cond, T } from 'ramda';
import { Circle, Text, Flex, Box, HStack } from '@chakra-ui/react';
import { ChevronUpIcon, ChevronRightIcon } from '@chakra-ui/icons';

function Output({
    isLastActiveIndex = false,
    // text = '',
    // subtitle = '',
    // openCard = () => {},
    text = '',
    isError = false,
    isDisabled = false
}) {
    const [isOpenCard, setIsOpenCard] = useState(false)
    const circleColor = cond([
        [() => isDisabled, always('divider.main')],
        [() => isLastActiveIndex, always('secondary.main')],
        [() => isError, always('error.main')],
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
                    <Text fontSize="xl" mt="20px">
                        Result is here
                    </Text>
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
                        {text}
                    </Text>
                </HStack>
            </HStack>}</>
    );
}

export default Output;
