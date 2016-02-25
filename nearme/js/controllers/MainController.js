app.controller('MainController', ['$scope', 'places', function($scope, places) {
    // places.success(function(data) {
    //   $scope.geodata = data;
    //   $scope.mapMarkers = geodataToMarkers($scope.geodata);
    // });
 
  places.success(function(data) {
      $scope.geodata = data;
      $scope.mapMarkers = geodataToMarkers($scope.geodata);
    });
  
  //this function makes a variable geodata out of the data and then plugs it into the geodataToMarkers function in helpers to make the markers//

    $scope.mapCenter = {
      lat: 40.741934,
      lng: -74.004897,
      zoom: 17
      //here you had zoom:1. which rendered just the map of the world from outerspace. when you make is 17, it showed the mapCenter as being close to the lat and lon//
    };
    
    
}]);