/// <reference path="../services/playlist_services.ts" />
/// <reference path="../interfaces/playlist_interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />


module Playlist.Controllers {
    export class DemoController {
        playlistService: Playlist.Interfaces.IPlaylistService;
        static $inject = ["Playlist.Services.PlaylistService"];
        constructor(playlistService: Playlist.Interfaces.IPlaylistService) {
            this.playlistService = playlistService;
        }
        favorites: Array<Playlist.Interfaces.ITrack>;

        getFavorites = () => {
            this.favorites = this.playlistService.getPlaylist();
        }
    }
    angular.module("Playlist").controller("Playlist.Controllers.DemoController", DemoController);
}