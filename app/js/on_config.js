function OnConfig($stateProvider, $locationProvider, $urlRouterProvider, $httpProvider, toastyConfigProvider) {
  'ngInject';

  $locationProvider.html5Mode(true);

  $stateProvider
    .state('Startseite_Student', {
      url: '/student_home',
      views: {
        'content': {
          controller: 'ExampleCtrl as home',
          templateUrl: 'home.html'
        },
        'navigation': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        skip: false
      },
      title: 'Startseite'


    }).state('Startseite', {
      url: '/',
      views: {
        'content': {
          controller: 'ExampleCtrl as home',
          templateUrl: 'home.html'
        },
        'navigation': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        skip: false
      },
      title: 'Startseite'


    }).state('Startseite_Student.AllgemeineVerwaltung', {
      url: '/allgVerwaltung',
      views: {
        'content@': {
          controller: 'AllgVerCtrl as allgVerCtrl',
          templateUrl: 'allgVer.html'
        },
        'navigation@': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Allgemeine Verwaltung'
      },
      title: 'Allgemeine Verwaltung'


    }).state('Startseite_Student.AllgemeineVerwaltung.PersoenlicheDaten', {
      url: '/persoenlicheDaten',
      views: {
        'content@': {
          controller: 'PersDatenCtrl as persDatenCtrl',
          templateUrl: 'persDaten.html'
        },
        'navigation@': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Persönliche Daten'
      },
      title: 'Persönliche Daten'


    }).state('Startseite_Student.Pruefungsverwaltung', {
      url: '/pruefVerwaltung',
      views: {
        'content@': {
          controller: 'PrVerCtrl as prVerCtrl',
          templateUrl: 'prVer.html'
        },
        'navigation@': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Prüfungsverwaltung'
      },
      title: 'Prüfungsverwaltung'


    }).state('Startseite_Student.Pruefungsverwaltung.Notenspiegel', {
      url: '/notenspiegel',
      views: {
        'content@': {
          controller: 'NotenspiegelCtrl as notenspiegelCtrl',
          templateUrl: 'notenspiegel.html'
        },
        'navigation@': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Notenspiegel'
      },
      title: 'Notenspiegel'


    })

  .state('Startseite_Student.Pruefungsverwaltung.Anmeldung', {
      url: '/anmeldung',
      views: {
        'content@': {
          controller: 'PrAnCtrl as prAnCtrl',
          templateUrl: 'prAn.html'
        },
        'navigation@': {
          controller: 'NavigationCtrl as navigation',
          templateUrl: 'navigation.html'
        }
      },
      ncyBreadcrumb: {
        label: 'Anmeldung'
      },
      title: 'Anmeldung'


    })

  .state('Login', {
    url: '/login',
    views: {
      'content': {
        controller: 'LoginCtrl as login',
        templateUrl: 'login.html'
      }
    },
    ncyBreadcrumb: {
      skip: true
    },
    title: 'Login'


  }).state('Register', {
    url: '/register',
    views: {
      'content': {
        controller: 'RegisterCtrl as register',
        templateUrl: 'register.html'
      }
    },
    ncyBreadcrumb: {
      skip: true
    },
    title: 'Register'
  });

  $urlRouterProvider.otherwise('/');

  $httpProvider.interceptors.push('TokenAuthInterceptor');

  toastyConfigProvider.setConfig({
        sound: false,
        shake: false,
        theme: "material",
        position: "top-right"
    });

}

export default OnConfig;
