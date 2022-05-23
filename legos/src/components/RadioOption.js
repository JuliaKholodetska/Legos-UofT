import { Text, Flex, Checkbox } from '@chakra-ui/react';


function RadioOption({ text }) {
    return (
        <Flex>
            <Checkbox>{text}</Checkbox>
        </Flex >
    );
}

export default RadioOption;
