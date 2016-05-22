function PrAnCtrl(toasty) {
  'ngInject';

  // ViewModel
  const vm = this;

  vm.pruefungen = [{
    id: 261756,
    bezeichnung: 'Lineare Algebra und Computergrafik ',
    pruefer: 'Laun',
    status: 'bestanden'
  }, {
    id: 261823,
    bezeichnung: 'ERP-Systeme',
    pruefer: 'Hötzel',
    status: 'bestanden'
  }, {
    id: 261825,
    bezeichnung: 'Analyse und Optimierung von Geschäftsprozessen',
    pruefer: 'Mathes',
    status: 'bestanden'
  }, {
    id: 261842,
    bezeichnung: 'Embedded Systems',
    pruefer: 'Doneit'
  }]

  vm.anmelden = function(pruefungsId) {
    toasty.success({
      title: "Prüfung angemeldet",
      msg: "Sie haben sich erfolgreich zur Prüfung " + pruefungsId + " angemeldet"
    });
  }


}

export default {
  name: 'PrAnCtrl',
  fn: PrAnCtrl
};
