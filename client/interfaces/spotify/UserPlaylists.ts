export interface UserPlaylists {
    href: string;
    items: UserPlaylist[];
    limit: number;
    next: null;
    offset: number;
    previous: null;
    total: number;
}

export interface UserPlaylist {
    collaborative: boolean;
    description: string;
    external_urls: PlaylistExternalUrls;
    href: string;
    id: string;
    images: PlaylistImage[];
    name: string;
    owner: Owner;
    primary_color: null;
    public: boolean;
    snapshot_id: string;
    tracks: Tracks;
    type: string;
    uri: string;
}

export interface PlaylistExternalUrls {
    spotify: string;
}

export interface PlaylistImage {
    height: number | null;
    url: string;
    width: number | null;
}

export interface Owner {
    display_name: string;
    external_urls: PlaylistExternalUrls;
    href: string;
    id: string;
    type: string;
    uri: string;
}

export interface Tracks {
    href: string;
    total: number;
}
