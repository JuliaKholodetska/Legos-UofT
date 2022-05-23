import { Text, Stack, Button, Center } from '@chakra-ui/react';

import { RadioOption, InputOption } from './ComponentMap';


function OptionsBar({ setSendValues, sendValues, sendRequest }) {

    return (
        <Center mt={50} h={60}>
            <Stack spacing={24} direction='row'>
                <Text ml={30} mt="12px" fontSize="md" fontWeight="bold">Options:</Text>
                <RadioOption text='optional' setSendValues={setSendValues} sendValues={sendValues} />
                <RadioOption text='versionBeta' setSendValues={setSendValues} sendValues={sendValues} />
                <InputOption text='volume' setSendValues={setSendValues} sendValues={sendValues} />
                <Button w={48} h={10} colorScheme='blue' onClick={() => sendRequest()}>Launch</Button>
            </Stack>
        </Center>
    );
}

export default OptionsBar;
