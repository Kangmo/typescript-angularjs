// http://typescript.codeplex.com/SourceControl/changeset/view/92d9e637f6e1#typings/jquery.d.ts

((): void => {
    var app = angular.module("Playlist", ['ngRoute']);
    app.config(Playlist.Routes.configureRoutes);
}) ()