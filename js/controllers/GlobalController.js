app.controller('GlobalCtrl', ['$scope', function ($scope) {
    console.log('GlobalCtrl loaded');

    $scope.infoView = function () {
        console.log('Going to inf land');
        window.location.href = './views/infa.html';
    }

}]);
