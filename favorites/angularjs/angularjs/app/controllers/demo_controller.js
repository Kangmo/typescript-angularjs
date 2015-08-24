/// <reference path="../services/playlist_services.ts" />
/// <reference path="../interfaces/playlist_interfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var Playlist;
(function (Playlist) {
    var Controllers;
    (function (Controllers) {
        var DemoController = (function () {
            function DemoController(playlistService) {
                var _this = this;
                this.getFavorites = function () {
                    _this.favorites = _this.playlistService.getPlaylist();
                };
                this.playlistService = playlistService;
            }
            DemoController.$inject = ["Playlist.Services.PlaylistService"];
            return DemoController;
        })();
        Controllers.DemoController = DemoController;
        angular.module("Playlist").controller("Playlist.Controllers.DemoController", DemoController);
    })(Controllers = Playlist.Controllers || (Playlist.Controllers = {}));
})(Playlist || (Playlist = {}));
//# sourceMappingURL=demo_controller.js.map