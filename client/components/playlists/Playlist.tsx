import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { CloseIcon, ImageIcon } from 'components/icons';
import { ClearButton } from 'components/buttons';
import { darken, lighten } from 'polished';

interface PlaylistProps {
    name: string;
    selected: boolean;
    id: string;
    image?: string;
    onSelect: (playlistId: string) => void;
}

const PlaylistWrapper = styled.div<{ selected?: boolean }>`
    border-radius: 3px;
    padding: 0.5em;
    display: flex;
    align-items: center;
    margin: 0.5em 0;
    overflow: hidden;
    cursor: pointer;

    &:hover {
        button {
            right: 0;
        }
    }

    ${(props) =>
        !props.selected &&
        css`
            &:hover {
                background-color: ${(props) => lighten(0.4, props.theme.colors.primary)};
            }
        `}

    ${(props) =>
        props.selected &&
        css`
            background-color: ${(props) => props.theme.colors.primary};
            color: ${(props) => props.theme.colors.main};
            svg {
                fill: ${(props) => props.theme.colors.main};
            }
        `}
`;

const PlaylistImage = styled.img`
    width: 20px;
    height: 20px;
    object-fit: cover;
    border-radius: 3px;
`;

const PlaylistIcon = styled.div`
    width: 20px;
    height: 20px;
    object-fit: cover;
    border-radius: 3px;
    position: relative;
    left: 2px;
`;

const PlaylistName = styled.span`
    font-size: 14px;
    margin-left: 0.5em;
    font-weight: ${(props) => props.theme.fontWeights.medium};
`;

const RemoveButton = styled(ClearButton)`
    margin-left: auto;
    position: relative;
    right: -100%;
    transition: all 0.5s ease;
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

const Playlist: FC<PlaylistProps> = ({ name, image, onSelect, id, selected }) => {
    const handleClick = (): void => onSelect(id);

    return (
        <PlaylistWrapper onClick={handleClick} selected={selected}>
            {image ? (
                <PlaylistImage src={image}></PlaylistImage>
            ) : (
                <PlaylistIcon>
                    <ImageIcon size={16} />
                </PlaylistIcon>
            )}
            <PlaylistName>{name}</PlaylistName>
            <RemoveButton>
                <CloseIcon size={12} />
            </RemoveButton>
        </PlaylistWrapper>
    );
};

export { Playlist };
