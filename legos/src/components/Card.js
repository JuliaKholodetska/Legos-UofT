import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { Box } from '@chakra-ui/react';

/**
 * Renders a <Card /> component
 * @param  props.children - will render any child components when this component surrounds other components.
 * @param  props.dataTestId - 'data-testid' attribute for containing Box element
 * @returns <Card data-testid='000'> <p> some text </Card>
 **/

const Card = ({ children, dataTestId = '' }) => {
    if (isEmpty(children)) return null;

    return (
        <Box
            marginY={5}
            ml={20}
            mr={20}
            backgroundColor="background.main.white"
            boxShadow="main"
            data-testid={dataTestId}>
            {children}
        </Box>
    );
};

Card.propTypes = {
    children: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    dataTestId: PropTypes.string
};

export default React.memo(Card);
