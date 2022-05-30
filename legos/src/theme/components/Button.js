// export const Button = {
//     // 1. We can update the components base styles
//     baseStyle: {
//         borderRadius: 0,
//         padding: '5',
//         opacity: 1,
//         transition: '0.3s',
//         fontFamily: 'Montserrat, serif',
//         fontSize: 'sm',
//         _focus: {
//             boxShadow: 'none'
//         },
//         _hover: {
//             opacity: '0.6'
//         }
//     },
//     // 2. We can add a new button size or extend existing
//     sizes: {
//         sm: {},
//         md: {
//             borderWidth: '2px'
//         }
//     },
//     variants: {
//         previous: {
//             fontSize: 'sm',
//             backgroundColor: 'none',
//             borderColor: 'none',
//             borderWidth: '0',
//             width: '114px',
//             height: '60px',
//             padding: '7',
//             _hover: {
//                 opacity: '1'
//             },
//             _disabled: {
//                 color: 'text.disabled',
//                 opacity: '1'
//             }
//         },
//         primary: {
//             fontSize: 'sm',
//             backgroundColor: 'primary.main',
//             color: 'text.white',
//             borderWidth: 0,
//             height: '20px',
//             paddingX: '25px',
//             _disabled: {
//                 opacity: 1,
//                 backgroundColor: 'primary.disabled',
//                 pointerEvents: 'none'
//             },
//             _hover: {
//                 opacity: 1,
//                 backgroundColor: 'primary.light'
//             },
//             _active: {
//                 backgroundColor: 'primary.dark'
//             }
//         },
//         secondary: {
//             fontSize: 'sm',
//             backgroundColor: 'text.white',
//             color: 'primary.main',
//             borderWidth: '1px',
//             borderColor: 'primary.main',
//             height: '60px',
//             paddingX: '25px',
//             _disabled: {
//                 opacity: 1,
//                 borderColor: 'primary.disabled',
//                 color: 'primary.disabled',
//                 pointerEvents: 'none'
//             },
//             _hover: {
//                 opacity: 1,
//                 borderColor: 'primary.light'
//             },
//             _active: {
//                 borderColor: 'primary.dark'
//             }
//         },
//         icon: {
//             outline: 'none',
//             border: 'none',
//             minWidth: '24px',
//             width: '24px',
//             maxHeight: '16px',
//             _focus: {
//                 boxShadow: 'none'
//             },
//             _disabled: {
//                 color: 'text.disabled',
//                 cursor: 'default',
//                 _hover: {
//                     color: 'text.disabled'
//                 }
//             },
//             _hover: {
//                 color: 'text.secondary.60'
//             }
//         },
//         primaryDanger: {
//             fontSize: 'sm',
//             backgroundColor: 'error.main',
//             color: 'text.white',
//             borderWidth: 0,
//             height: '60px',
//             paddingX: '25px',
//             _hover: {
//                 opacity: 1,
//                 backgroundColor: 'error.secondary.dark'
//             }
//         },
//         secondaryDanger: {
//             fontSize: 'sm',
//             backgroundColor: 'text.white',
//             color: 'error.main',
//             borderWidth: '1px',
//             borderColor: 'error.main',
//             height: '60px',
//             paddingX: '25px',
//             _hover: {
//                 opacity: 1,
//                 borderColor: 'error.secondary.dark',
//                 color: 'error.secondary.dark'
//             }
//         },
//         primaryWarning: {
//             fontSize: 'sm',
//             backgroundColor: 'warning.main',
//             color: 'text.white',
//             borderWidth: 0,
//             height: '60px',
//             paddingX: '25px',
//             _hover: {
//                 opacity: 1,
//                 backgroundColor: 'warning.light'
//             }
//         },
//         secondaryWarning: {
//             fontSize: 'sm',
//             backgroundColor: 'text.white',
//             color: 'warning.main',
//             borderWidth: '1px',
//             borderColor: 'warning.main',
//             height: '60px',
//             paddingX: '25px',
//             _hover: {
//                 opacity: 1,
//                 borderColor: 'warning.light',
//                 color: 'warning.light'
//             }
//         },
//         flat: {
//             paddingX: '16px',
//             fontSize: 'sm',
//             borderWidth: '0px',
//             backgroundColor: 'background.main.white',
//             _hover: {
//                 opacity: 1
//             }
//         },
//         link: {
//             fontSize: 'sm',
//             color: 'primary.main',
//             borderWidth: '0px',
//             backgroundColor: 'background.main.white',
//             textDecoration: 'underline',
//             _disabled: {
//                 opacity: 1,
//                 color: 'primary.disabled',
//                 pointerEvents: 'none'
//             },
//             _hover: {
//                 opacity: 1
//             }
//         }
//     }
// };
