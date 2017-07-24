angular.module('hudditeApp', [
  // 'ngResource',
  // 'ui.router',
]);

onReady = function() {
  angular.bootstrap(document, ['hudditeApp']);
};

angular.element(document).ready(onReady);
