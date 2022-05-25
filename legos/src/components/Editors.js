import React, { useEffect, useState } from "react";
import { GridItem, Grid, Box } from '@chakra-ui/react';
import Editor from "@monaco-editor/react";
import { isEmpty } from "../../node_modules/ramda/src/index";
import axios from "axios";

import { OptionsBar, Output } from './ComponentMap';
import { defaultEditorsValue } from "./constants";

const initialState = {
    firstEditorInput: defaultEditorsValue.firstDefault,
    secondEditorInput: defaultEditorsValue.secondDefault,
    thirdEditorInput: defaultEditorsValue.thirdDefault,
    optional: false,
    versionBeta: false,
    volume: 1,
};
const testText = {
    Unsat: 'Unsat',
    BSat: 'B-sat',
    result: 'Please press to see output',
    error: 'Please launch again'
};
const testRes = testText.Unsat;

function Editors() {
    const [sendValues, setSendValues] = useState(initialState)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [resValue, setResValue] = useState([]);
    const [isDisabledOutput, setIsDisabledOutput] = useState(false)
    const [isErrorOutput, setIsErrorOutput] = useState(false)
    const invalidInput = sendValues.volume <= 0 || sendValues.volume >= 50
    const isButtonDisabled = invalidInput || isEmpty(sendValues.firstEditorInput) || isEmpty(sendValues.secondEditorInput) || isEmpty(sendValues.thirdEditorInput)

    useEffect(() => {
        if (testRes === 'Unsat' || testRes === 'B-sat') {
            setIsDisabledOutput(true)
        }
        if (testRes == 'Please launch again') {
            setIsErrorOutput(true)
        }
    }, [testRes]);

    useEffect(() => {
        console.log(resValue)
    }, [resValue]);


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
        const  requestOptions = {
            method: 'POST',
            headers: {  "content-type": "multipart/form-data" },
            body: JSON.stringify(sendValues)
        };

        axios.post('http://localhost:5000/compiler', requestOptions)
            .then(function (response) {
                setIsLoaded(true);
                setResValue(response);
                console.log(response);
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
            <Output text={testRes} isDisabled={isDisabledOutput} isError={isErrorOutput} />
        </Box>
    );
}

export default Editors;
