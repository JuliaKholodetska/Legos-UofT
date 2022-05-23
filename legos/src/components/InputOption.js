import React, { useState } from 'react';
import { Text, HStack, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper } from '@chakra-ui/react';

function InputOption({ text }) {
    const [inputValue, setInputValue] = useState('')
   
    return (
        <HStack spacing='24px' ml={100}>
            <Text fontSize='md'>{text}</Text>
            <NumberInput
                max={50}
                ml={5}
                height="25px"
                width="100px"
                onChange={(value) => setInputValue(value)}
                value={inputValue}
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
