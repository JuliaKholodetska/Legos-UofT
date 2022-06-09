import React, { useEffect, useState } from "react";
import { GridItem, Grid, Box, VStack, StackDivider, Input } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";
import { isEmpty } from "../../node_modules/ramda/src/index";
import axios from "axios";

import { OptionsBar, Output } from './ComponentMap';
import { defaultEditorsValue } from "./constants";
import { Buffer } from 'buffer';

const initialState = {
    firstEditorInput: Buffer.from(defaultEditorsValue.firstDefault).toString("base64"),
    secondEditorInput: Buffer.from(defaultEditorsValue.secondDefault).toString("base64"),
    thirdEditorInput: Buffer.from(defaultEditorsValue.thirdDefault).toString("base64"),
    optional: false,
    versionBeta: false,
    volume: 1,
};
// const testText = {
//     Unsat: 'Unsat',
//     BSat: 'B-sat',
//     result: 'Please press to see output',
//     error: 'Please launch again'
// };
// const testRes = testText.Unsat;

function Editors() {
    const [sendValues, setSendValues] = useState(initialState)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [resValue, setResValue] = useState([]);
    const [isEditorRes, setIsEditorRes] = useState(false);
    const [isDisabledOutput, setIsDisabledOutput] = useState(true)
    const [isErrorOutput, setIsErrorOutput] = useState(false)
    const invalidInput = sendValues.volume <= 0 || sendValues.volume >= 50
    const isButtonDisabled = invalidInput || isEmpty(sendValues.firstEditorInput) || isEmpty(sendValues.secondEditorInput) || isEmpty(sendValues.thirdEditorInput)

    // useEffect(() => {
    //     if (testRes === 'Unsat' || testRes === 'B-sat') {
    //         setIsDisabledOutput(true)
    //     }
    //     if (testRes == 'Please launch again') {
    //         setIsErrorOutput(true)
    //     }
    // }, [testRes]);

    useEffect(() => {
        if (resValue === 'UNSAT' || resValue === 'B-SAT') {
            setIsDisabledOutput(true)
        }
        if (error) {
            setIsErrorOutput(true)
        }
        if (resValue.length > 10) { setIsDisabledOutput(false) }
    }, [resValue]);

    const handleFitstEditorChange = (value, event) => {
        setSendValues({ ...sendValues, firstEditorInput: Buffer.from(value).toString("base64") })
    }

    const handleSecondEditorChange = (value, event) => {
        setSendValues({ ...sendValues, secondEditorInput: Buffer.from(value).toString("base64") })
    }

    const handleThirdEditorChange = (value, event) => {
        setSendValues({ ...sendValues, thirdEditorInput: Buffer.from(value).toString("base64") })
    }

    const sendRequest = () => {
        const requestOptions = {
            method: 'POST',
            headers: { "content-type": "multipart/form-data" },
            body: JSON.stringify(sendValues)
        };

        axios.post('http://localhost:5000/compiler', requestOptions)
            .then(function (response) {
                setIsLoaded(true);
                setResValue(response.data);
            })
            .catch(function (error) {
                setIsLoaded(true);
                setError(error);
                console.log(error);
            });
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
            <Output text={resValue}isDisabled={isDisabledOutput} isError={isErrorOutput} />
        </Box>
    );
}

export default Editors;
