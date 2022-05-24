import React from 'react';
import PropTypes from 'prop-types';
import { Text, HStack, NumberInput, NumberInputField, NumberIncrementStepper, NumberInputStepper, NumberDecrementStepper, Box } from '@chakra-ui/react';

import { Notification } from './ComponentMap';
function InputOption({ text, setSendValues, sendValues, invalidInput }) {

    return (<Box >
        <HStack spacing='24px' ml={100}>
            <Text fontSize='md'>{text}</Text>
            <NumberInput
                min={1}
                max={50}
                ml={5}
                height="25px"
                width="100px"
                defaultValue={1}
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
        {invalidInput ? <Notification infoText="Volume should be less then 50 and more then 1" /> : null}
    </Box>
    );
}

InputOption.propTypes = {
    text: PropTypes.string,
    setSendValues: PropTypes.func,
    sendValues: PropTypes.object,
    invalidInput: PropTypes.bool
};

export default InputOption;
