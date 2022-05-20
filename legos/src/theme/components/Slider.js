export const Slider = {
    baseStyle: {
        track: {
            borderRadius: '3px'
        },
        thumb: {
            boxShadow: 'none',
            outline: 'none',
            borderRadius: '50%',
            _focus: {
                boxShadow: 'none'
            }
        }
    },
    variants: {
        snap: {
            track: {
                minHeight: '6px'
            },
            filledTrack: {
                height: '6px'
            },
            thumb: {
                minHeight: '28px',
                minWidth: '28px',
                border: '2px solid',
                borderColor: 'text.white',
                backgroundColor: 'secondary.main'
            }
        },
        small: {
            track: {
                minHeight: '5px'
            },
            filledTrack: {
                height: '6px'
            },
            thumb: {
                maxHeight: '5px',
                maxWidth: '5px',
                border: '1px solid',
                borderColor: 'secondary.main'
            }
        }
    }
};
