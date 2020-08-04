import React, { FC } from 'react';
import styled from 'styled-components';
import { LazyLoadImage } from 'react-lazy-load-image-component';

interface SongProps {
    name: string;
    image?: string;
}

const SongWrapper = styled.div`
    padding: 0.5em;
    border: 1px solid ${(props) => props.theme.colors.background};
    border-radius: 3px;
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-bottom: 1em;
    }

    &:hover {
        cursor: pointer;
        border: 1px solid ${(props) => props.theme.colors.primary};
    }
`;

const SongName = styled.span`
    font-size: 14px;
    letter-spacing: 1px;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-left: 1em;
`;

const SongImage = styled(LazyLoadImage)`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 3px;
`;

const Song: FC<SongProps> = ({ name, image }) => {
    return (
        <SongWrapper>
            <SongImage src={image} />
            <SongName>{name}</SongName>
        </SongWrapper>
    );
};

export { Song };
