import { css } from 'styled-jsx/css';
import theme from '@/theme/localplan';

export default css`
    .card-container,
    .children-wrapper {
        margin-top: 20px;
    }

    .children-wrapper {
        padding: 24px 44px;
        display: flex;
        flex-direction: column;
        place-content: center;
        width: 100%;
    }

    .collapsed {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    .edit-button {
        cursor: pointer;
        border: none;
        background: none;
        text-decoration: underline;
        font-size: 1.8rem;
    }

    .collapsed-title {
        display: flex;
        flex-direction: row;
    }

    .collapsed-title span {
        border-left: 1px solid ${theme.colors.text};
        padding-left: 10px;
        margin-left: 10px;
        font-size: 1.8rem;
        font-weight: 300;
    }
`;
