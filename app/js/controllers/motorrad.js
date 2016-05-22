function MotorradCtrl($stateParams, $http, AppSettings) {
  'ngInject';

  // ViewModel
  const vm = this;
  vm.id = $stateParams.motorradId;
  vm.komponenten = [{
    id: 1,
    bezeichnung: 'Motor'
  }, {
    id: 2,
    bezeichnung: 'Rahmen'
  }]


}

export default {
  name: 'MotorradCtrl',
  fn: MotorradCtrl
};
