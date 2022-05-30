import React from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'ramda';
import { Box } from '@chakra-ui/react';

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
