import React, { FC } from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

interface FieldProps extends Pick<React.HTMLProps<HTMLInputElement>, 'placeholder' | 'value' | 'onChange'> {}

const FiledWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.main};
    border: 2px solid ${(props) => lighten(0.3, props.theme.colors.primary)};
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 1em;

    svg {
        fill: ${(props) => props.theme.colors.inactive};
    }

    &:focus-within {
        border: 2px solid ${(props) => props.theme.colors.primary};
        svg {
            fill: ${(props) => props.theme.colors.primary};
        }
    }
`;

const FieldInput = styled.input`
    width: 100%;
    border: none;
    outline: none;
    background: none;
    padding: 0.5em;

    &::placeholder {
        color: ${(props) => props.theme.colors.inactive};
    }

    &:focus {
        &::placeholder {
            opacity: 0;
        }
    }
`;

const Field: FC<FieldProps> = ({ children, ...props }) => {
    return (
        <FiledWrapper>
            {children}
            <FieldInput {...props} />
        </FiledWrapper>
    );
};

export { Field };
