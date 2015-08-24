module Playlist {
    export module Interfaces {
        export interface IPlaylistService {
            getPlaylist: () => Array<ITrack>;
        }
        export interface ITrack {
            title: string;
            artist: string;
            rating: number;
        }
    }
}