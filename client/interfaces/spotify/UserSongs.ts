export interface UserSongs {
    href: string;
    items: UserSong[];
    limit: number;
    next: string;
    offset: number;
    previous: null;
    total: number;
}

export interface UserSong {
    added_at: Date;
    track: Track;
}

export interface Track {
    album: Album;
    artists: Artist[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: ExternalIDS;
    external_urls: SongsExternalUrls;
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string;
    track_number: number;
    type: TrackType;
    uri: string;
}

export interface Album {
    album_type: AlbumTypeEnum;
    artists: Artist[];
    available_markets: string[];
    external_urls: SongsExternalUrls;
    href: string;
    id: string;
    images: SongImage[];
    name: string;
    release_date: Date;
    release_date_precision: ReleaseDatePrecision;
    total_tracks: number;
    type: AlbumTypeEnum;
    uri: string;
}

export enum AlbumTypeEnum {
    Album = 'album',
    Single = 'single',
}

export interface Artist {
    external_urls: SongsExternalUrls;
    href: string;
    id: string;
    name: string;
    type: ArtistType;
    uri: string;
}

export interface SongsExternalUrls {
    spotify: string;
}

export enum ArtistType {
    Artist = 'artist',
}

export interface SongImage {
    height: number;
    url: string;
    width: number;
}

export enum ReleaseDatePrecision {
    Day = 'day',
}

export interface ExternalIDS {
    isrc: string;
}

export enum TrackType {
    Track = 'track',
}
