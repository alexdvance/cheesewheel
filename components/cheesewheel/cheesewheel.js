'use strict'

angular.module('hudditeApp')

.directive('cheesewheel', [
    '$timeout',
    'PieSpinner',
    function($timeout, PieSpinner) {
        return {
            restrict: 'AE',
            templateUrl: '/components/cheesewheel/cheesewheel.html',
            replace: true,
            link: function(scope, elem, attrs) {
                var pieChartConfig = {
                    type: 'twister',
                    element: "#chease-picker-graph",
                    width: 680,
                    height: 450,
                    outerR: 280,
                    innerR: 8,
                    colors: ["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"],
                    slices: [
                        { label: 'Career', weight: 2 },
                        { label: 'Health', weight: 1 },
                        { label: 'Exercise', weight: 1 },
                        { label: 'Art', weight: 3 },
                        { label: 'Social', weight: 1 },
                        { label: 'Environment', weight: 1 },
                    ],
                    minRotation: 1080,
                    maxRotation: 7200
                };

                PieSpinner.init(pieChartConfig);

                scope.spin = function() {
                    var spinResult = PieSpinner.spin();
                    $timeout(function() {
                        scope.spinResult = spinResult.selection.key.label;
                    }, spinResult.duration);
                };

                scope.slices = pieChartConfig.slices;

                scope.updateChart = function() {
                    pieChartConfig.slices = scope.slices;
                    PieSpinner.init(pieChartConfig);
                };
            }
        };
}])
