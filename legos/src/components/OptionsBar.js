import PropTypes from 'prop-types';
import { Text, Stack, Button, Center } from '@chakra-ui/react';

import { RadioOption, InputOption } from './ComponentMap';
function OptionsBar({ setSendValues, sendValues, sendRequest, invalidInput, isButtonDisabled }) {

    return (
        <Center mt={30} h={60}>
            <Stack spacing={10} direction='row'>
                <Text ml={30} mt="12px" fontSize="md" fontWeight="bold">Options:</Text>
                <RadioOption text='optional' setSendValues={setSendValues} sendValues={sendValues} />
                <RadioOption text='versionBeta' setSendValues={setSendValues} sendValues={sendValues} />
                <InputOption text='volume' setSendValues={setSendValues} sendValues={sendValues} invalidInput={invalidInput} />
                <Button w={48} h={10} colorScheme='blue' onClick={() => { sendRequest(); }} isDisabled={isButtonDisabled} >Launch</Button>
            </Stack>
        </Center>
    );
}

OptionsBar.propTypes = {
    setSendValues: PropTypes.func,
    sendValues: PropTypes.object,
    sendRequest: PropTypes.func,
    invalidInput: PropTypes.bool,
    isButtonDisabled: PropTypes.bool,
};

export default OptionsBar;
