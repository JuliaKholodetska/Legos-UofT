export const Input = {
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
        autoComplete: {
            field: {
                borderRadius: '2px',
                borderColor: 'background.secondary.dark',
                _focus: {
                    borderColor: 'secondary.light.60'
                }
            }
        },
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
        searchableDropdown: {
            field: {
                fontFamily: 'Montserrat',
                borderRadius: '2px',
                fontSize: { base: 'xs', xl: 'md' },
                fontWeight: '700',
                padding: '12px 0 14px 16px',
                borderColor: 'divider.main',
                color: 'text.main',
                _placeholder: {
                    fontSize: 'sm'
                },
                _hover: {
                    borderColor: 'secondary.light.60'
                },
                _focus: {
                    borderColor: 'secondary.light.60'
                },
                _disabled: {
                    backgroundColor: 'background.main.white',
                    _hover: {
                        borderColor: 'divider.main'
                    }
                }
            }
        },
        dollar: {
            field: {
                borderRadius: '2px',
                width: 150,
                borderColor: 'divider.main',
                _hover: {
                    borderColor: 'secondary.light.60'
                },
                _focus: {
                    borderColor: 'secondary.light.60'
                },
                _invalid: {
                    borderColor: 'error.main'
                },
                _disabled: {
                    backgroundColor: 'background.main.page',
                    _hover: {
                        borderColor: 'divider.main'
                    }
                }
            }
        },
        error: {
            field: {
                color: 'error.main'
            }
        }
    }
};
