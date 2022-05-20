import React from 'react';
import { Global } from '@emotion/react';

const Fonts = () => (
    <Global
        styles={`
        html {
        font-family: "Montserrat",sans-serif;
        -ms-text-size-adjust: 100%;
        -webkit-text-size-adjust: 100%; 
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        }
        body {
          font-family: "Montserrat",sans-serif;
        }
      `}
    />
);
export default Fonts;
