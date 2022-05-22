import { Text } from '@chakra-ui/react';
import { Card, Layout } from '../components/ComponentMap';

function Compiler({ logo }) {
    return (
        <Layout>
            <Card>
                <Text h={1000} color="primary.main" size='m'>Ace editors</Text>
            </Card>
        </Layout>
    );
}

export default Compiler;
