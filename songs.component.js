App.controller('SongController', function ($scope, SongService) {

  $scope.isCreate = false;
  $scope.isUpdate = false;
  $scope.currentSong = null;

  $scope.removeSong = (song) => {
    SongService.delete(song)
    .then(() => {
       alert("Song removed.");
       getSongList();
    });
  };

  $scope.showCreateSong = () => {
    $scope.isCreate = true;
    $scope.currentSong = {};
  };

  $scope.showUpdateSong = (song) => {
    $scope.isUpdate = true;
    $scope.currentSong = song;
  };

  $scope.saveSong = () => {
    if($scope.isCreate){
      $scope.currentSong.id = Math.floor(Math.random() * 999999999);
      SongService.create($scope.currentSong)
      .then(() => {
        alert("Song created.");
        $scope.isCreate = false;
        getSongList();
      });
    }
    else if ($scope.isUpdate) {
      SongService.update($scope.currentSong)
      .then(() => {
        alert("Song updated.");
        $scope.isUpdate = false;
        getSongList();
      });
    }
    
  };

  $scope.cancelForm = () => {
    $scope.currentSong = null;
    $scope.isCreate = false;
    $scope.isUpdate = false;
  };

  const getSongList = () => {
    SongService.get()
    .then(response => {
        $scope.songs = response.songs;
        $scope.$apply();
    });
  };

  // init
  getSongList();

});
