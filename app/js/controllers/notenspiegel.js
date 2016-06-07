function NotenspiegelCtrl() {

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

  vm.pruefungen = [{
    id: 261756,
    bezeichnung: 'Lineare Algebra und Computergrafik ',
    pruefer: 'Laun',
    status: 'bestanden',
    note: 1.3,
    semester: 7
  }, {
    id: 261823,
    bezeichnung: 'ERP-Systeme',
    pruefer: 'Hötzel',
    status: 'bestanden',
    note: 2.7,
    semester: 7
  }, {
    id: 261825,
    bezeichnung: 'Analyse und Optimierung von Geschäftsprozessen',
    pruefer: 'Mathes',
    status: 'bestanden',
    note: 3.0,
    semester: 7
  }, {
    id: 261842,
    bezeichnung: 'Embedded Systems',
    pruefer: 'Doneit',
    status: 'bestanden',
    note: 1.0,
    semester: 7
  }]

  vm.notenschnitt = _(vm.pruefungen)
    .map(n => n.note)
    .sum() / vm.pruefungen.length

}

export default {
  name: 'NotenspiegelCtrl',
  fn: NotenspiegelCtrl
};
