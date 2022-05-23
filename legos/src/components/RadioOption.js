import React, { useState } from 'react';
import { Text, Flex, Checkbox } from '@chakra-ui/react';


function RadioOption({ text }) {
    const [radioValue, setRadioValue] = useState(false)

    return (
        <Flex>
            <Checkbox onChange={(e) => setRadioValue(e.target.checked)}>{text}</Checkbox>
        </Flex >
    );
}

export default RadioOption;
