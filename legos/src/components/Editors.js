import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import CodeMirror from '@uiw/react-codemirror';
import { autocompletion } from "@codemirror/autocomplete"
import { GridItem, Grid, Box } from '@chakra-ui/react';
import axios from "axios";
import { Buffer } from 'buffer';
import { isEmpty } from "../../node_modules/ramda/src/index";
import { OptionsBar, Output } from './ComponentMap';
import { defaultCompletions, defaultEditorsValue } from "./constants";
import { sublime } from '@uiw/codemirror-theme-sublime';
import { languages } from '@codemirror/language-data';
import { python } from '@codemirror/lang-python';
import { flatten } from "ramda";

const initialState = {
    firstEditorInput: Buffer.from(defaultEditorsValue.firstDefault).toString("base64"),
    secondEditorInput: Buffer.from(defaultEditorsValue.secondDefault).toString("base64"),
    thirdEditorInput: Buffer.from(defaultEditorsValue.thirdDefault).toString("base64"),
    optional: false,
    versionBeta: false,
    volume: 1,
};

function Editors({ isExample, example }) {
    const [sendValues, setSendValues] = useState(initialState)
    const [error, setError] = useState(null); //probavly optional or will be handeled in a future
    const [isLoaded, setIsLoaded] = useState(false); //probavly optional or will be handeled in a future
    const [resValue, setResValue] = useState('');
    const [placeholderResValue, setPlaceholderResValue] = useState('');
    const [isDisabledOutput, setIsDisabledOutput] = useState(true)
    const [isErrorOutput, setIsErrorOutput] = useState(false)
    const [isOpenCard, setIsOpenCard] = useState(false)
    const [completionsValue, setCompletionsValue] = useState(defaultCompletions);
    const invalidInput = sendValues.volume <= 0 || sendValues.volume >= 50
    const isButtonDisabled = invalidInput || isEmpty(sendValues.firstEditorInput) || isEmpty(sendValues.secondEditorInput) || isEmpty(sendValues.thirdEditorInput)

    function myCompletions(context) {
        let before = context.matchBefore(/\w+/)
        if (!context.explicit && !before) return null
        return {
            from: before ? before.from : context.pos,
            options: completionsValue,
            validFor: /^\w*$/
        }
    }
    useEffect(() => {
        if (resValue === 'unsat' || resValue === 'bounded unsat') {
            setIsDisabledOutput(true)
            setIsErrorOutput(false)
            if (resValue === 'unsat') setPlaceholderResValue('unsat')
            if (resValue === 'bounded unsat') setPlaceholderResValue('bounded unsat')
        }
        if (resValue === 'ERROR') {
            setIsErrorOutput(true)
            setResValue('Please launch again')
            setPlaceholderResValue('Please launch again')
        }
        if (resValue.length > 10 && resValue !== 'Please launch again') {
            setIsDisabledOutput(false);
            setIsErrorOutput(false)
            setPlaceholderResValue('Please press to see output')
        }
    }, [resValue]);

    const foundValues = (val) => {
        var regexAction = /create_action\(\"(?<firstArg>.*?)\"(?:.*?)\[\s*(?<secondArg>.*?)\]/
        var regexType = /create_type\(\"(?<firstArg>.*?)\"(?:.*?)\[\s*(?<secondArg>.*?)\]/
        var regexPairAction = /create_pair_action\(\"(?<firstArg>.*?)\"(?:.*?)\[\s*(?<secondArg>.*?)\]/
        var arrItemRegex = /\s*\"(?:.*?)\"\s*\,\s*\"(.*?)\"\s*/
        var matchResult = val.match(regexAction) || val.match(regexType) || val.match(regexPairAction)
        var arg = matchResult?.groups.firstArg
        var arrArgs = matchResult?.groups.secondArg.split(/(?:\))\s*\,\s*\(/).map(item => item.match(arrItemRegex)?.[1])
        if (arg, arrArgs) {
            return { arg, arrArgs }
        }
        return
    }

    const handleFirstEditorChange = (value, event) => {
        var splitedInput = value.split('\n')
        var mappedInput = flatten(splitedInput.map(item => foundValues(item)))
        var completionsObjRes = mappedInput.map(item => item && { 'label': item.arg, "type": "constant", "info": `${item.arg + '(' + item.arrArgs.toString() + ')'}` }).filter(Boolean)
        setCompletionsValue(defaultCompletions.concat(completionsObjRes))
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
            {isExample.isExampleBool && example ? (
                <Grid templateColumns='repeat(3, 1fr)' gap={1} mt={50} >
                    <GridItem w='80%' maxW="450px" borderWidth='1px' ml={10}>
                        <CodeMirror
                            value={example.firstEditorInput}
                            height="40vh"
                            extensions={[
                                autocompletion({ override: [myCompletions] }), python({ base: python, codeLanguages: languages })
                            ]
                            }
                            options={{
                                tabSize: 2,
                                lint: true,
                                lineNumbers: true,
                                lineWrapping: true,
                                spellcheck: true,
                                autoCloseTags: true,
                                autoCloseBrackets: true,
                                matchTags: true,
                                matchBrackets: true
                            }}
                            theme={sublime}
                            overflow="auto"
                            onChange={handleFirstEditorChange}
                        />
                    </GridItem>
                    <GridItem w='90%'maxW="450px"  borderWidth='1px' >
                        <CodeMirror
                            value={example.secondEditorInput}
                            height="40vh"
                            extensions={[
                                autocompletion({ override: [myCompletions] }), python({ base: python, codeLanguages: languages })
                            ]
                            }
                            options={{
                                tabSize: 2,
                                lint: true,
                                lineNumbers: true,
                                lineWrapping: true,
                                spellcheck: true,
                                autoCloseTags: true,
                                autoCloseBrackets: true,
                                matchTags: true,
                                matchBrackets: true
                            }}
                            theme={sublime}
                            overflow="auto"
                            onChange={handleSecondEditorChange}
                        /></GridItem>
                    <GridItem w='90%' maxW="450px" borderWidth='1px' >
                        <CodeMirror
                            value={example.thirdEditorInput}
                            height="40vh"
                            extensions={[
                                autocompletion({ override: [myCompletions] }), python({ base: python, codeLanguages: languages })
                            ]
                            }
                            options={{
                                tabSize: 2,
                                lint: true,
                                lineNumbers: true,
                                lineWrapping: true,
                                spellcheck: true,
                                autoCloseTags: true,
                                autoCloseBrackets: true,
                                matchTags: true,
                                matchBrackets: true
                            }}
                            outline="none"
                            theme={sublime}
                            overflow="auto"
                            onChange={handleThirdEditorChange}
                        /></GridItem>
                </Grid>) :
                (<Grid templateColumns='repeat(3, 1fr)' gap={1} mt={50} >
                    <GridItem w='80%' maxW="450px" borderWidth='1px' ml={10}>
                        <CodeMirror
                            value={defaultEditorsValue.firstDefault}
                            height="40vh"
                            extensions={[
                                autocompletion({ override: [myCompletions] }), python({ base: python, codeLanguages: languages })
                            ]
                            }
                            options={{
                                tabSize: 2,
                                lint: true,
                                lineNumbers: true,
                                lineWrapping: true,
                                spellcheck: true,
                                autoCloseTags: true,
                                autoCloseBrackets: true,
                                matchTags: true,
                                matchBrackets: true
                            }}
                            theme={sublime}
                            overflow="auto"
                            onChange={handleFirstEditorChange}
                        />
                    </GridItem>
                    <GridItem w='90%' maxW="450px" borderWidth='1px' >
                        <CodeMirror
                            value={defaultEditorsValue.secondDefault}
                            height="40vh"
                            extensions={[
                                autocompletion({ override: [myCompletions] }), python({ base: python, codeLanguages: languages })
                            ]
                            }
                            options={{
                                tabSize: 2,
                                lint: true,
                                lineNumbers: true,
                                lineWrapping: true,
                                spellcheck: true,
                                autoCloseTags: true,
                                autoCloseBrackets: true,
                                matchTags: true,
                                matchBrackets: true
                            }}
                            theme={sublime}
                            overflow="auto"
                            onChange={handleSecondEditorChange}
                        /></GridItem>
                    <GridItem w='90%' maxW="450px" borderWidth='1px' >
                        <CodeMirror
                            value={defaultEditorsValue.thirdDefault}
                            height="40vh"
                            extensions={[
                                autocompletion({ override: [myCompletions] }), python({ base: python, codeLanguages: languages })
                            ]
                            }
                            options={{
                                tabSize: 2,
                                lint: true,
                                lineNumbers: true,
                                lineWrapping: true,
                                spellcheck: true,
                                autoCloseTags: true,
                                autoCloseBrackets: true,
                                matchTags: true,
                                matchBrackets: true
                            }}
                            outline="none"
                            theme={sublime}
                            overflow="auto"
                            onChange={handleThirdEditorChange}
                        /></GridItem>
                </Grid>)
            }
            <OptionsBar setIsOpenCard={setIsOpenCard} setResValue={setResValue} setSendValues={setSendValues} sendValues={sendValues} sendRequest={sendRequest} invalidInput={invalidInput} isButtonDisabled={isButtonDisabled} />
            <Output text={resValue} placeholderResValue={placeholderResValue} isDisabled={isDisabledOutput} isError={isErrorOutput} isOpenCard={isOpenCard} setIsOpenCard={setIsOpenCard} />
        </Box>
    );
}

Editors.propTypes = {
    isExample: PropTypes.object,
    example: PropTypes.object,
};

export default Editors;
