import React, { FC } from 'react';
import styled from 'styled-components';

const SongsViewerWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.main};
    padding: 1em;
`;

const SongsViewer: FC = () => {
    return <SongsViewerWrapper>Songs viewer</SongsViewerWrapper>;
};

export { SongsViewer };
