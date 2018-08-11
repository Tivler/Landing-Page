app.controller('GlobalCtrl', ['$scope', function ($scope) {
    console.log('GlobalCtrl loaded');

    $scope.resumeView = function () {
        console.log('Going to resume land');
        window.location.href = '../views/resume.html';
    }
    
}]);
