import React, { FC } from 'react';
import styled from 'styled-components';
import { CloseIcon } from 'components/icons';
import { ClearButton } from 'components/buttons';
import { darken } from 'polished';

interface PlaylistProps {
    name: string;
}

const PlaylistWrapper = styled.div`
    border-radius: 3px;
    padding: 0.5em;
    display: flex;
    align-items: center;
    margin: 0.5em 0;
`;

const PlaylistImage = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    border-radius: 3px;
`;

const PlaylistName = styled.span`
    font-size: 14px;
    margin-left: 0.5em;
    font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const RemoveButton = styled(ClearButton)`
    margin-left: auto;
    position: relative;
    top: -1px;
    &:hover {
        cursor: pointer;
        svg {
            fill: ${(props) => props.theme.colors.secondary};
        }
    }
    &:active {
        svg {
            fill: ${(props) => darken(0.1, props.theme.colors.secondary)};
        }
    }
`;

const Playlist: FC<PlaylistProps> = ({ name }) => {
    return (
        <PlaylistWrapper>
            <PlaylistImage src="https://image.freepik.com/free-vector/_52683-21041.jpg"></PlaylistImage>
            <PlaylistName>{name}</PlaylistName>
            <RemoveButton>
                <CloseIcon size={12} />
            </RemoveButton>
        </PlaylistWrapper>
    );
};

export { Playlist };
