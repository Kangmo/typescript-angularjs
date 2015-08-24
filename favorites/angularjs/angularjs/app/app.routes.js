/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
var Playlist;
(function (Playlist) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider.when("/home", {
                controller: "Playlist.Controllers.DemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playlist"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    })();
    Playlist.Routes = Routes;
})(Playlist || (Playlist = {}));
//# sourceMappingURL=app.routes.js.map