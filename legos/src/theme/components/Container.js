export const Container = {
    baseStyle: {
        padding: '0'
    },
    sizes: {
        sm: {},
        md: {
            maxWidth: '1200px'
        },
        lg: {
            padding: '0 100px',
            maxWidth: '1400px'
        }
    },
    variants: {
        message: {
            backgroundColor: 'background.secondary.light',
            padding: '32px',
            position: 'relative',
            maxWidth: 'none',
            _before: {
                content: '""',
                width: 0,
                height: 0,
                display: 'block',
                position: 'absolute',
                top: '32px',
                left: '-16px',
                borderTop: '16px solid',
                borderTopColor: 'background.secondary.light',
                borderLeft: '16px solid transparent'
            }
        }
    }
};
