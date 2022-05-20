import { theme as chakraTheme } from '@chakra-ui/react';

export default {
    styles: {
        ...chakraTheme,
        global: {
            body: {
                fontFamily: 'Montserrat, sans-serif',
                lineHeight: '150%',
                fontSize: '62.5%',
                color: 'text.main',
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
                height: '100vh',
                background: 'background.main.page'
            },
            '*::placeholder': {},
            '*, *::before, &::after': {
                boxSizing: 'border-box',
                fontFamily: 'Montserrat, sans-serif'
            },
            'html, body, #__next': {
                height: '100%',
                width: '100%'
            }
        }
    }
};
