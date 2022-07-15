import { useEffect } from 'react';
import { useState } from 'react';
import { Card, Editors, Layout } from '../components/ComponentMap';
import { secondEditorPHIM, thirdEditorPHIM, firstEditorPHIM } from '../components/constants';

const PHIMExampleState = {
    firstEditorInput: firstEditorPHIM,
    secondEditorInput: secondEditorPHIM,
    thirdEditorInput: thirdEditorPHIM
};

const lambdaExampleState = {
    firstEditorInput: 'lambda1',
    secondEditorInput: 'lambda2',
    thirdEditorInput: 'lambda3'
};

const letExampleState = {
    firstEditorInput: 'let1',
    secondEditorInput: 'let2',
    thirdEditorInput: 'let3'
};

const isExampleInitialState = {
    isExampleBool: false,
    type: ''
}

function Compiler() {
    const [isExample, setIsExample] = useState(isExampleInitialState)
    const [example, setExample] = useState(null)

    useEffect(() => {
        if (isExample.type === 'let') {
            setExample(letExampleState)
        }
        if (isExample.type === 'PHIM') {
            setExample(PHIMExampleState)
        }
        if (isExample.type === 'lambda') {
            setExample(lambdaExampleState)
        }
    }, [isExample]);

    return (
        <Layout setIsExample={setIsExample}>
            <Card>
                <Editors isExample={isExample} example={example} />
            </Card>
        </Layout>
    );
}

export default Compiler;
