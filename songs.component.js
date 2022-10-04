App.controller('SongController', function ($scope, SongService) {

  const getSongList = () => {
    SongService.get()
    .then(response => {
        $scope.songs = response.songs;
        $scope.$apply();
    });
  };

  $scope.removeSong = (song) => {
    deleteSong(song);
  };

  const deleteSong = (song) => {
    SongService.delete(song)
    .then(() => {
       alert("Song removed.");
       getSongList();
    });
  };

  // init
  getSongList();

});
