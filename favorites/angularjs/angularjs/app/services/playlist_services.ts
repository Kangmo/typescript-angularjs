/// <reference path="../interfaces/playlist_interfaces.ts" />

module Playlist.Services {
    export class PlaylistService implements Playlist.Interfaces.IPlaylistService {
        httpService: ng.IHttpService
        static $inject = ['$http'];
        constructor($http: ng.IHttpService) {
            this.httpService = $http;
        }

        getPlaylist = () => {
            var res: Array<Playlist.Interfaces.ITrack> = [
                { title: "Numb", artist: "Linkin Park", rating: 5 },
                { title: "filre Flies", artist: "Owl City", rating: 4.3 }
            ];
            return res;
        }
    }
    angular.module("Playlist").service("Playlist.Services.PlaylistService", PlaylistService);
}

