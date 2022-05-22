import { GridItem, Grid } from '@chakra-ui/react';
import React from "react";
import Editor from "@monaco-editor/react";

function Editors() {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
            <GridItem w='100%' >
                <Editor
                    height="20vh"
                    defaultLanguage="python"
                    defaultValue="// some comment"
                /></GridItem>
            <GridItem w='100%' >
                <Editor
                    height="20vh"
                    defaultLanguage="python"
                    defaultValue="// some comment"
                /></GridItem>
            <GridItem w='100%' >
                <Editor
                    height="20vh"
                    defaultLanguage="python"
                    defaultValue="// some comment"
                /></GridItem>
        </Grid>
    );
}

export default Editors;
