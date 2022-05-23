import React from 'react';
import { Text, HStack, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Box } from '@chakra-ui/react';
import { Notification } from './ComponentMap';

function InputOption({ text, setSendValues, sendValues, invalidInput }) {

    return (<Box >
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
        {invalidInput ? <Notification infoText="Volume should be less then 50" /> : null}
    </Box>
    );
}

export default InputOption;
