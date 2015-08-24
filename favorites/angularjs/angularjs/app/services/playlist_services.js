/// <reference path="../interfaces/playlist_interfaces.ts" />
var Playlist;
(function (Playlist) {
    var Services;
    (function (Services) {
        var PlaylistService = (function () {
            function PlaylistService($http) {
                this.getPlaylist = function () {
                    var res = [
                        { title: "Numb", artist: "Linkin Park", rating: 5 },
                        { title: "filre Flies", artist: "Owl City", rating: 4.3 }
                    ];
                    return res;
                };
                this.httpService = $http;
            }
            PlaylistService.$inject = ['$http'];
            return PlaylistService;
        })();
        Services.PlaylistService = PlaylistService;
        angular.module("Playlist").service("Playlist.Services.PlaylistService", PlaylistService);
    })(Services = Playlist.Services || (Playlist.Services = {}));
})(Playlist || (Playlist = {}));
//# sourceMappingURL=playlist_services.js.map