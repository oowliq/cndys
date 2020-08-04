import React, { FC } from 'react';
import styled from 'styled-components';
import { Song } from './Song';
import Skeleton from 'react-loading-skeleton';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Pagination } from 'components/layout';

interface SongsViewerProps {
    id: string;
    title?: string;
    maxPage: number;
    fetching: boolean;
    description?: string;
    image?: string;
    songsCount?: number;
    songs: SpotifyApi.PlaylistTrackObject[];
    page: number;
    onChangePage: (page: number) => void;
}

const SongsViewerWrapper = styled.div`
    background-color: ${(props) => props.theme.colors.main};
    padding: 1em;
`;

const SongsViewerHeader = styled.div`
    display: flex;
    position: relative;
    &::after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        right: 0;
        height: 1px;
        background-color: ${(props) => props.theme.colors.background};
    }
`;

const SongsImage = styled(LazyLoadImage)`
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 3px;
`;

const SongsImageSkeleton = styled(Skeleton)`
    height: 100px;
    width: 100px !important;
`;

const HeaderInfoBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1em;
`;

const HeaderTitle = styled.span`
    font-size: 20px;
    font-weight: ${(props) => props.theme.fontWeights.bold};
`;

const HeaderTitleSkeleton = styled(Skeleton)`
    font-size: 20px;
    width: 130px !important;
`;

const HeaderDescription = styled.span`
    font-size: 12px;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-top: 0.4em;
`;

const HeaderDescriptionSkeleton = styled(Skeleton)`
    font-size: 12px;
    font-weight: ${(props) => props.theme.fontWeights.medium};
    margin-top: 0.4em;
    width: 200px !important;
`;

const HeaderSongsCount = styled.span`
    margin-top: 0.5em;
    font-size: 12px;
    font-weight: ${(props) => props.theme.fontWeights.light};
`;

const HeaderSongsCountSkeleton = styled(Skeleton)`
    margin-top: 0.5em;
    font-size: 12px;
    width: 80px !important;
    font-weight: ${(props) => props.theme.fontWeights.light};
`;

const SongsWrapper = styled.div`
    margin-top: 2em;
    max-height: 600px;
    overflow: auto;
    padding-right: 1em;
    & {
        &::-webkit-scrollbar-track {
            background-color: ${(props) => props.theme.colors.background};
        }

        &::-webkit-scrollbar {
            width: 3px;
            background-color: ${(props) => props.theme.colors.primary};
        }

        &::-webkit-scrollbar-thumb {
            background-color: ${(props) => props.theme.colors.primary};
        }
    }
`;

const HeaderInfoWrapper = styled.div``;

const SongsViewer: FC<SongsViewerProps> = ({
    id,
    title,
    description,
    songsCount,
    image,
    songs,
    fetching,
    page,
    maxPage,
    onChangePage,
}) => {
    return (
        <SongsViewerWrapper>
            <SongsViewerHeader>
                {!fetching ? <SongsImage src={image} /> : <SongsImageSkeleton />}

                <HeaderInfoWrapper>
                    <HeaderInfoBlock>
                        {!fetching ? <HeaderTitle>{title}</HeaderTitle> : <HeaderTitleSkeleton />}
                        {!fetching ? (
                            <HeaderDescription>{description}</HeaderDescription>
                        ) : (
                            <HeaderDescriptionSkeleton />
                        )}
                        {!fetching ? (
                            <HeaderSongsCount>Songs count: {songsCount?.toString()}</HeaderSongsCount>
                        ) : (
                            <HeaderSongsCountSkeleton />
                        )}
                    </HeaderInfoBlock>
                </HeaderInfoWrapper>
            </SongsViewerHeader>
            <SongsWrapper>
                {fetching && <Skeleton count={4} height={58} style={{ marginBottom: '1em' }} />}
                {songs.map((song) => (
                    <Song key={id + song.track.id} name={song.track.name} image={song.track.album.images[0]?.url} />
                ))}
            </SongsWrapper>
            <Pagination currentPage={page} maxPage={maxPage} onChangePage={onChangePage} />
        </SongsViewerWrapper>
    );
};

export { SongsViewer };
