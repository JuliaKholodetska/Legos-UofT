import React from 'react';
import { Flex, Checkbox } from '@chakra-ui/react';


function RadioOption({ text, setSendValues, sendValues }) {
    const defineObject = (text, e) => {
        if (text === 'optional') {
            return { ...sendValues, optional: e.target.checked }
        }
        if (text === 'versionBeta') {
            return { ...sendValues, versionBeta: e.target.checked }
        }
    };

    return (
        <Flex>
            <Checkbox onChange={(e) => setSendValues(defineObject(text, e))}>{text}</Checkbox>
        </Flex >
    );
}

export default RadioOption;
