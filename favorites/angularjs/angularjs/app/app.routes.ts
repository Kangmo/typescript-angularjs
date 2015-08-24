/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />

module Playlist {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider.when("/home", {
                controller: "Playlist.Controllers.DemoController",
                templateUrl: "/app/views/playlist.html",
                controllerAs: "playlist"
            });
            $routeProvider.otherwise({ redirectTo: "/home" });
        }
    }
}