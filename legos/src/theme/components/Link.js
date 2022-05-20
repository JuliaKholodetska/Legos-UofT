export const Link = {
    // 1. We can update the base styles
    baseStyle: {
        textDecoration: 'none',
        _hover: {
            textDecoration: 'none'
        },
        _focus: {
            borderColor: 'none',
            borderWidth: '0',
            boxShadow: 'none'
        }
    },
    sizes: {
        sm: {
            fontSize: 'sm'
        }
    },
    variants: {
        disabled: {
            border: '2px solid',
            color: 'primary.disabled',
            pointerEvents: 'none',
            boxShadow: 'none'
        }
    }
};
