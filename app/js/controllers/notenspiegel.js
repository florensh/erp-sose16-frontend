function NotenspiegelCtrl(Pruefungen) {
  'ngInject';

  // ViewModel
  const vm = this;

  var _ = require('lodash');

  vm.student = {
    name: 'Hückstädt',
    matrikelnummer: '184352',
    vorname: 'Florens',
    geburtsdatum: new Date(1982, 11, 7, 0, 0, 0, 0),
    email: 'florensh@gmx.de',
    semester: 7,
    fach: 'Software Engineering'
  }

  Pruefungen.getDone().then(p => {
    vm.pruefungen = p;
    let s = (_.chain(vm.pruefungen)
      .map(n => parseFloat(n.note))
      .sum()) / vm.pruefungen.length

      console.log(s)

    vm.notenschnitt = s
  })
}

export default {
  name: 'NotenspiegelCtrl',
  fn: NotenspiegelCtrl
};
