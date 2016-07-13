function PrAnCtrl(toasty, Pruefungen) {
  'ngInject';

  // ViewModel
  const vm = this;

  Pruefungen.getStudent().then(pruefungen => vm.pruefungen = pruefungen);

  vm.anmelden = function(pruefung) {
    pruefung.semester = 7
    toasty.success({
      title: "Prüfung angemeldet",
      msg: "Sie haben sich erfolgreich zur Prüfung " + pruefung.id + " angemeldet"
    });
  }


}

export default {
  name: 'PrAnCtrl',
  fn: PrAnCtrl
};
