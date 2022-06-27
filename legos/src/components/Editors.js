import React, { useEffect, useState } from "react";
import CodeMirror from '@uiw/react-codemirror';
import { autocompletion } from "@codemirror/autocomplete"
import { GridItem, Grid, Box } from '@chakra-ui/react';
import axios from "axios";
import { Buffer } from 'buffer';
import { isEmpty } from "../../node_modules/ramda/src/index";

import { OptionsBar, Output } from './ComponentMap';
import { completions, defaultEditorsValue } from "./constants";


function myCompletions(context) {
    let before = context.matchBefore(/\w+/)
    // If completion wasn't explicitly started and there
    // is no word before the cursor, don't open completions.
    if (!context.explicit && !before) return null
    return {
        from: before ? before.from : context.pos,
        options: completions,
        validFor: /^\w*$/
    }
}

const initialState = {
    firstEditorInput: Buffer.from(defaultEditorsValue.firstDefault).toString("base64"),
    secondEditorInput: Buffer.from(defaultEditorsValue.secondDefault).toString("base64"),
    thirdEditorInput: Buffer.from(defaultEditorsValue.thirdDefault).toString("base64"),
    optional: false,
    versionBeta: false,
    volume: 1,
};

function Editors() {
    const [sendValues, setSendValues] = useState(initialState)
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false); //probavly optional or will be handeled in a future
    const [resValue, setResValue] = useState('');
    const [isDisabledOutput, setIsDisabledOutput] = useState(true)
    const [isErrorOutput, setIsErrorOutput] = useState(false)
    const [isOpenCard, setIsOpenCard] = useState(false)
    const invalidInput = sendValues.volume <= 0 || sendValues.volume >= 50
    const isButtonDisabled = invalidInput || isEmpty(sendValues.firstEditorInput) || isEmpty(sendValues.secondEditorInput) || isEmpty(sendValues.thirdEditorInput)

    useEffect(() => {
        if (resValue === 'unsat' || resValue === 'bounded unsat') {
            setIsDisabledOutput(true)
            setIsErrorOutput(false)
        }
        if (resValue === 'ERROR') {
            setIsErrorOutput(true)
            setResValue('Please launch again')
        }
        if (resValue.length > 10 && resValue !== 'Please launch again') { setIsDisabledOutput(false); setIsErrorOutput(false) }
    }, [resValue]);

    const handleFirstEditorChange = (value, event) => {
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
                <GridItem w='80%' borderWidth='1px' ml={10}>
                    <CodeMirror
                        value={defaultEditorsValue.firstDefault}
                        height="40vh"
                        extensions={[
                            autocompletion({ override: [myCompletions] })
                        ]
                        }
                        onChange={handleFirstEditorChange}
                    />
                </GridItem>
                <GridItem w='90%' borderWidth='1px' >
                    <CodeMirror
                        value={defaultEditorsValue.secondDefault}
                        height="40vh"
                        extensions={[
                            autocompletion({ override: [myCompletions] })
                        ]
                        }
                        onChange={handleSecondEditorChange}
                    /></GridItem>
                <GridItem w='90%' borderWidth='1px' >
                    <CodeMirror
                        value={defaultEditorsValue.thirdDefault}
                        height="40vh"
                        extensions={[
                            autocompletion({ override: [myCompletions] })
                        ]
                        }
                        onChange={handleThirdEditorChange}
                    /></GridItem>
            </Grid>
            <OptionsBar setIsOpenCard={setIsOpenCard} setResValue={setResValue} setSendValues={setSendValues} sendValues={sendValues} sendRequest={sendRequest} invalidInput={invalidInput} isButtonDisabled={isButtonDisabled} />
            <Output text={resValue} isDisabled={isDisabledOutput} isError={isErrorOutput} isOpenCard={isOpenCard} setIsOpenCard={setIsOpenCard} />
        </Box>
    );
}

export default Editors;
