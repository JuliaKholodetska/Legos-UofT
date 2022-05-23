import { GridItem, Grid, Box } from '@chakra-ui/react';
import React from "react";
import Editor from "@monaco-editor/react";
import { OptionsBar } from './ComponentMap';

function Editors() {
    return (
        <Box>
            <Grid templateColumns='repeat(3, 1fr)' gap={4} mt={50} >
                <GridItem w='100%' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue="x = 3+5j  y = 5j"
                    /></GridItem>
                <GridItem w='100%' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue="print(type(y))"
                    /></GridItem>
                <GridItem w='100%' >
                    <Editor
                        height="40vh"
                        defaultLanguage="python"
                        defaultValue="print(type(3))"
                    /></GridItem>
            </Grid>
            <OptionsBar />
        </Box>
    );
}

export default Editors;
