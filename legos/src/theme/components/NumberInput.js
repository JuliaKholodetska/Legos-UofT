export const NumberInput = {
    baseStyle: {
        field: {
            border: '1px',
            borderColor: 'background.secondary.dark',
            _placeholder: {
                fontSize: 'sm',
                fontWeight: 300,
                color: 'text.secondary.60'
            },
            _invalid: {
                borderColor: 'error.main'
            }
        }
    },
    variants: {
        searchBox: {
            field: {
                borderRadius: '2px',
                borderColor: 'divider.main',
                _hover: {
                    borderColor: 'secondary.light.60'
                },
                _focus: {
                    borderColor: 'secondary.light.60'
                }
            }
        },
        error: {
            field: {
                borderRadius: '2px',
                borderColor: 'divider.main',
                _hover: {
                    borderColor: 'error.main'
                },
                _focus: {
                    borderColor: 'error.main'
                }
            }
        }
    }
};
