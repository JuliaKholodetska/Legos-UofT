export const Radio = {
    baseStyle: {
        control: {
            width: 5,
            minHeight: 5,
            marginLeft: 4,
            marginRight: '2px',
            _checked: {
                background: 'none',
                borderColor: 'secondary.main',
                color: 'text.main',
                _hover: {
                    background: 'none',
                    borderColor: 'none'
                },
                _focus: {
                    boxShadow: 'none'
                }
            },
            _hover: {
                cursor: 'pointer'
            },
            _disabled: {
                borderColor: 'background.secondary.dark',
                background: 'none',
                _hover: {
                    cursor: 'default'
                },
                _checked: {
                    background: 'none',
                    borderColor: 'secondary.main',
                    color: 'text.main'
                }
            }
        },
        label: {
            _checked: {
                fontWeight: 600
            },
            _hover: {
                cursor: 'pointer'
            },
            _disabled: {
                opacity: 1,
                color: 'text.disabled',
                _checked: {
                    color: 'text.main'
                },
                _hover: {
                    cursor: 'default'
                }
            }
        }
    }
};
