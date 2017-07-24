'use strict'

angular.module('hudditeApp')

.directive('cheesewheel', [
    '$timeout',
    'PieChart',
    function($timeout, PieChart) {
        return {
            restrict: 'AE',
            templateUrl: '/components/cheesewheel/cheesewheel.html',
            replace: true,
            link: function(scope, elem, attrs) {
                scope.spinning = false;
                scope.showConfig = false;
                console.log('test')
                function randomIntFromInterval(min, max) {
                    return Math.floor(Math.random() * (max - min + 1) + min);
                }

                // CHEASE
                // Career Health Exercise Art Social Environment
                var slices = scope.slices = [
                    { label: 'Career', weight: 2 },
                    { label: 'Health', weight: 1 },
                    { label: 'Exercise', weight: 1 },
                    { label: 'Art', weight: 3 },
                    { label: 'Social', weight: 1 },
                    { label: 'Environment', weight: 1 },
                ];

                var pieChartConfig = {
                    type: 'twister',
                    element: "#chease-picker-graph",
                    width: 680,
                    height: 450,
                    outerR: 280,
                    innerR: 8,
                    colors: ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"],
                    slices: slices,
                    minRotation: 1080,
                    maxRotation: 7200
                }

                PieChart.init(pieChartConfig);

                scope.updateChart = function() {
                    pieChartConfig.slices = scope.slices;
                    PieChart.init(pieChartConfig);

                }

                scope.spin = function() {
                    var spinResult = PieChart.spin();
                    $timeout(function() {
                        scope.spinResult = spinResult.selection.key.label;
                    }, spinResult.duration);
                }
            }
        };
}])
