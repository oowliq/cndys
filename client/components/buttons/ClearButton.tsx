import styled from 'styled-components';

const ClearButton = styled.button`
    border: none;
    outline: none;
    background: none;
    padding: 0;

    &:disabled {
        cursor: not-allowed;
    }
`;

export { ClearButton };
