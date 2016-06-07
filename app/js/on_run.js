function OnRun($rootScope, AppSettings, $animate, editableOptions, SecurityService, $location, $state) {
  'ngInject';

  var _ = require('lodash')

  // $animate.enabled(true);
  editableOptions.theme = 'bs3';

  // change page title based on state
  $rootScope.$on('$stateChangeSuccess', (event, toState) => {
    $rootScope.pageTitle = '';

    if (toState.title) {
      $rootScope.pageTitle += toState.title;
      $rootScope.pageTitle += ' \u2014 ';
    }

    $rootScope.pageTitle += AppSettings.appTitle;
  });


  $rootScope.$on('$stateChangeStart',
    function(event, toState, toParams, fromState, fromParams, options) {

      if ($rootScope.user == null || $rootScope.user.username == 'anonymousUser') {
        // no logged user, we should be going to #login
        if (toState.name == "Login") {
          // already going to #login, no redirect needed
        } else {
          // not going to #login, we should redirect now
          $location.path("/login");
        }
      } else {
        if (toState.name == "Startseite") {
          console.log($rootScope.user.roles)
          if (_.includes($rootScope.user.roles, 'STUDENT')) {
            $state.go('Startseite_Student')
          } else {
            $state.go('Startseite_Dozent')
          }
        }
      }
    })

}

export default OnRun;
