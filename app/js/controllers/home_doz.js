function Home_Doz(Pruefungen) {
  'ngInject';

  var _ = require('lodash');

  // ViewModel
  const vm = this;

  vm.pruefungen = []
  Pruefungen.getDozent().then(pruefungen => vm.pruefungen = pruefungen)

}

export default {
  name: 'Home_Doz',
  fn: Home_Doz
};
