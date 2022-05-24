import React, { useState } from "react";
import { GridItem, Grid, Box } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";

import { OptionsBar } from './ComponentMap';

const firstDefault = "def greet(name):\n \\\ \n This function greets to\n the person passed in as\n a parameter\n \\\ \n print('Hello, ' + name + '. Good morning!')\n\n\n\n\n\n\n\n\n"
const secondDefault = "print(Hello world)\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"
const thirdDefault = "option to do\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

const initialState = {
    optional: false,
    versionBeta: false,
    volume: 0,
    inputOfToEditors: 'print',
    areaEditor: 'aaa'
}

function Editors() {
    const [sendValues, setSendValues] = useState(initialState)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [resValue, setResValue] = useState([]);
    const invalidInput = sendValues.volume < 0 || sendValues.volume >= 50

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
                        base="vs-dark"
                        automaticLayout="true"
                        defaultValue={firstDefault}
                    /></GridItem>
                <GridItem w='90%' borderWidth='1px' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue={secondDefault}
                    /></GridItem>
                <GridItem w='90%' borderWidth='1px' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue={thirdDefault}
                    /></GridItem>
            </Grid>
            <OptionsBar setSendValues={setSendValues} sendValues={sendValues} sendRequest={sendRequest} invalidInput={invalidInput} />
        </Box>
    );
}

export default Editors;
