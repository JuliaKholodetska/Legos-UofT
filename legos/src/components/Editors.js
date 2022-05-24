import React, { useState } from "react";
import { GridItem, Grid, Box } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";
import { isEmpty } from "../../node_modules/ramda/src/index";

import { OptionsBar } from './ComponentMap';
import { defaultEditorsValue } from "./constants";

const initialState = {
    firstEditorInput: defaultEditorsValue.firstDefault,
    secondEditorInput: defaultEditorsValue.secondDefault,
    thirdEditorInput: defaultEditorsValue.thirdDefault,
    optional: false,
    versionBeta: false,
    volume: 1,
}

function Editors() {
    const [sendValues, setSendValues] = useState(initialState)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [resValue, setResValue] = useState([]);
    const invalidInput = sendValues.volume < 0 || sendValues.volume >= 50
    const isButtonDisabled = invalidInput || isEmpty(sendValues.firstEditorInput) || isEmpty(sendValues.secondEditorInput) || isEmpty(sendValues.thirdEditorInput)

    const handleFitstEditorChange = (value, event) => {
        setSendValues({ ...sendValues, firstEditorInput: value })
    }

    const handleSecondEditorChange = (value, event) => {
        setSendValues({ ...sendValues, secondEditorInput: value })
    }

    const handleThirdEditorChange = (value, event) => {
        setSendValues({ ...sendValues, thirdEditorInput: value })
    }

    const sendRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(sendValues)
        };
        fetch('https://app/compiler', requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setResValue(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                })
    }

    return (
        <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={1} mt={50} >
                <GridItem w='90%' borderWidth='1px' ml={10}>
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        automaticLayout="true"
                        defaultValue={defaultEditorsValue.firstDefault}
                        onChange={handleFitstEditorChange}
                    /></GridItem>
                <GridItem w='90%' borderWidth='1px' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        automaticLayout="true"
                        defaultValue={defaultEditorsValue.secondDefault}
                        onChange={handleSecondEditorChange}
                    /></GridItem>
                <GridItem w='90%' borderWidth='1px' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        automaticLayout="true"
                        defaultValue={defaultEditorsValue.thirdDefault}
                        onChange={handleThirdEditorChange}
                    /></GridItem>
            </Grid>
            <OptionsBar setSendValues={setSendValues} sendValues={sendValues} sendRequest={sendRequest} invalidInput={invalidInput} isButtonDisabled={isButtonDisabled} />
        </Box>
    );
}

export default Editors;
