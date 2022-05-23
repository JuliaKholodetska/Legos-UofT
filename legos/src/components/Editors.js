import React, { useState } from "react";
import { GridItem, Grid, Box } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";

import { OptionsBar } from './ComponentMap';

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
            <Grid templateColumns='repeat(3, 1fr)' gap={4} mt={50} >
                <GridItem w='90%' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue="x = 3+5j  y = 5j"
                    /></GridItem>
                <GridItem w='90%' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue="print(type(y))"
                    /></GridItem>
                <GridItem w='90%' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue="print(type(3))"
                    /></GridItem>
            </Grid>
            <OptionsBar setSendValues={setSendValues} sendValues={sendValues} sendRequest={sendRequest} />
        </Box>
    );
}

export default Editors;
