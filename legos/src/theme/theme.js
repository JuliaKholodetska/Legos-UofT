import { extendTheme, theme as chakraTheme } from '@chakra-ui/react';

import { Box } from './components/Box';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Divider } from './components/Divider';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Link } from './components/Link';
import { List } from './components/List';
import { ListItem } from './components/ListItem';
import { Radio } from './components/Radio';
import { Slider } from './components/Slider';
import { Text } from './components/Text';
import { Tooltip } from './components/Tooltip';
import { NumberInput } from './components/NumberInput';
import typography from './base/typography';
import borderRadius from './base/borderRadius';
import global from './base/global';
import breakpoints from './breakpoints';

const theme = {
    ...global,
    breakpoints,
    colors: {
        ...chakraTheme.colors,
        primary: {
            main: '#0066FF',
            dark: '#0556D2',
            light: '#4C93FF',
            disabled: '#99C2FF',
            500: '#0066FF'
        },
        secondary: {
            main: '#FFC500',
            light: {
                60: '#FFDC4A',
                40: '#FFE88D',
                30: '#FFEDAA'
            },
            dark: '#EFAC00'
        },
        text: {
            main: '#181a1d',
            white: '#FFFFFF',
            disabled: '#A2A3A4',
            secondary: {
                80: '#46484A',
                60: '#757678'
            },
            green: '#12753A'
        },
        background: {
            main: {
                page: '#F4F4F4',
                white: '#FFFFFF'
            },
            secondary: {
                dark: '#D0D1D1',
                light: '#F8F8F8',
                info: 'rgba(0, 102, 255, 0.1)'
            }
        },
        error: {
            main: '#D10101',
            secondary: {
                dark: '#ED9999',
                light: '#FAE6E6'
            },
            small: '#CC351C',
            500: '#D10101'
        },
        divider: {
            main: '#E7E8E8'
        },
        success: {
            main: '#84CA03'
        },
        warning: {
            main: '#ED7518',
            light: '#F19146'
        }
    },
    space: {
        ...chakraTheme.space,
        layout: { base: '0 15px', xl: '0 100px' }
    },
    shadows: {
        ...chakraTheme.shadows,
        main: '0 2px 12px 0 rgba(24,26,29,0.08)'
    },
    ...typography,
    ...borderRadius,
    components: {
        Box,
        Button,
        Container,
        Divider,
        Heading,
        Input,
        Link,
        List,
        ListItem,
        Radio,
        Slider,
        NumberInput,
        Text,
        Tooltip,
    }
};

export default extendTheme(theme);
