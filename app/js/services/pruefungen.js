function Pruefungen($http) {
  'ngInject';

  var _ = require('lodash');

  const service = {};

  function Pruefung(pruefung) {
    pruefung.status = () => pruefung.note ? pruefung.note <= 4 ? 'bestanden' : 'nicht bestanden' : pruefung.semester ? 'angemeldet' : 'offen'
    return pruefung
  }


  let pruefungen = [{
    id: 261756,
    bezeichnung: 'Lineare Algebra und Computergrafik ',
    pruefer: 'Laun'
  }, {
    id: 261823,
    bezeichnung: 'ERP-Systeme',
    pruefer: 'Hötzel'
  }, {
    id: 261825,
    bezeichnung: 'Analyse und Optimierung von Geschäftsprozessen',
    pruefer: 'Mathes'
  }, {
    id: 261842,
    bezeichnung: 'Embedded Systems',
    pruefer: 'Doneit'
  }]

  let prf1 = [
    new Pruefung({
      student: 184352,
      id: 261756,
      bezeichnung: 'Lineare Algebra und Computergrafik ',
      pruefer: 'Laun',
      note: '2.7',
      semester: 7
    }), new Pruefung({
      student: 184352,
      id: 261823,
      bezeichnung: 'ERP-Systeme',
      pruefer: 'Hötzel'
    }), new Pruefung({
      student: 184352,
      id: 261825,
      bezeichnung: 'Analyse und Optimierung von Geschäftsprozessen',
      pruefer: 'Mathes',
      note: '1.3',
      semester: 7
    }), new Pruefung({
      student: 184352,
      id: 261842,
      bezeichnung: 'Embedded Systems',
      pruefer: 'Doneit',
      note: '5.0',
      semester: 6
    })
  ]

  let prf2 = _.chain(_.range(184353, 184360)).map(p => {
    return new Pruefung({
      student: p,
      bezeichnung: 'ERP-Systeme',
      pruefer: 'Hötzel',
      semester: 7,
      id: 261823
    })
  }).value()

  let stud_pruefungen = _.union(prf1, prf2)



  service.getDone = function() {
    return new Promise((resolve, reject) => {
      let done = _.chain(stud_pruefungen).filter(p => p.student == 184352).filter(function(p) {
        return p.status() == 'bestanden' || p.status() == 'nicht bestanden'
      }).value()
      resolve(done);
    });
  };

  service.getDozent = function() {
    return new Promise((resolve, reject) => {
      let doz = _.filter(pruefungen, function(p) {
        return p.pruefer == 'Hötzel'
      })
      resolve(doz);
    });
  };

  service.getDozentAnmeldungen = function() {
    return new Promise((resolve, reject) => {
      let doz = _.filter(stud_pruefungen, function(p) {
        return p.pruefer == 'Hötzel' && p.semester == 7
      })
      console.log(doz)
      resolve(doz);
    });
  };

  service.getStudent = function() {
    return new Promise((resolve, reject) => {
      resolve(_.filter(stud_pruefungen, p => p.student == 184352));
    });
  };



  service.getAll = function() {
    return new Promise((resolve, reject) => {
      resolve(pruefungen);
    });
  };


  return service;

}

export default {
  name: 'Pruefungen',
  fn: Pruefungen
};
