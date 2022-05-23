import { Text, Flex, Input, HStack } from '@chakra-ui/react';


function InputOption({ text }) {
    return (
        <HStack spacing='24px' ml={100}>
            <Text fontSize='md'>{text}</Text>
            <Input
                // value={value}
                // onChange={handleChange}
                ml={5}
                height="25px"
                width="40px"
                size='sm'
            />
        </HStack >
    );
}

export default InputOption;
