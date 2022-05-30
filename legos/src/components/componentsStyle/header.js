import { css } from 'styled-jsx/css';

export default css`
    header {
        grid-column: 1 / -1;
    }

    .header-container {
        display: grid;
        grid-template-rows: 70px auto;
    }

    .header-bottom-container {
        background-color: white;
        height: 100%;
    }
`;
