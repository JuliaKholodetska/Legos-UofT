import React from 'react';
import { Text, HStack, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper } from '@chakra-ui/react';

function InputOption({ text, setSendValues, sendValues, invalidInput }) {

    return (
        <HStack spacing='24px' ml={100}>
            <Text fontSize='md'>{text}</Text>
            <NumberInput
                min={0}
                max={50}
                ml={5}
                height="25px"
                width="100px"
                isInvalid={invalidInput}
                onChange={(value) => setSendValues({ ...sendValues, volume: value })}
                size='sm'>
                <NumberInputField />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </HStack >
    );
}

export default InputOption;
