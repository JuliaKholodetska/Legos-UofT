import { Text, Box, Stack, Button, Center } from '@chakra-ui/react';
import { RadioOption, InputOption } from './ComponentMap';


function OptionsBar() {
    return (
        <Center mt={50} h={60}>
            <Stack spacing={40} direction='row'>
                <Text ml={30} mt="12px" fontSize="md" fontWeight="bold">Options:</Text>
                <RadioOption text='optional' />
                <RadioOption text='versionBeta' />
                <InputOption text='volume' />
                <Button w={48} h={10} colorScheme='blue'>Launch</Button>
            </Stack>
        </Center>
    );
}

export default OptionsBar;
