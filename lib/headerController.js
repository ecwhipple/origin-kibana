const config = require('./config.js');
define(['require'], function (require) {
  const plugin = require('ui/modules').get('kibana');
  plugin.controller('OSHeaderController', ['$scope', 'UserStore', 'Logger', function ($scope, UserStore, Logger) {
    var logger = Logger.get();
    const user = UserStore.getUser();
    $scope.goBack = user.back_url;
    $scope.logoutUrl = config.logoutUrl
  }]);
});
