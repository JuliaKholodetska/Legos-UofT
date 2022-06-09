import PropTypes from 'prop-types';
import { Text, Stack, Button, Center } from '@chakra-ui/react';

import { RadioOption, InputOption } from './ComponentMap';
function OptionsBar({ setSendValues, sendValues, sendRequest, invalidInput, isButtonDisabled, setIsOpenCard, setResValue }) {

    return (
        <Center mt="2px" h={40}>
            <Stack spacing={12} direction='row'>
                <Text ml={30} mt="10px" fontSize="md" fontWeight="bold">Options:</Text>
                <RadioOption text='optional' setSendValues={setSendValues} sendValues={sendValues} />
                <RadioOption text='versionBeta' setSendValues={setSendValues} sendValues={sendValues} />
                <InputOption text='volume' setSendValues={setSendValues} sendValues={sendValues} invalidInput={invalidInput} />
                <Button w={44} h={9} colorScheme='blue' onClick={() => { sendRequest(); setIsOpenCard(false); setResValue('') }} isDisabled={isButtonDisabled} >Launch</Button>
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
