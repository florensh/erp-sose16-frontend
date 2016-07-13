function PrVerCtrlDoz(Pruefungen, $stateParams) {
  'ngInject';
  var _ = require('lodash');

  // ViewModel
  const vm = this;
  vm.pruefung = $stateParams.pruefung;

  vm.pruefungen = []

  // ermittelt die Haeufigkeit einer bestimmten Note innerhalb der Pruefungen
  let anzahlNotenInSegment = (pruefungen, note) => _.chain(pruefungen).countBy(p => p.note).get(note, 0).value()

  Pruefungen.getDozentAnmeldungen().then(x => {
    vm.pruefungen = _.filter(x, a => a.bezeichnung == vm.pruefung)
  });

  vm.labels = ['1.0', '1.3', '1.7', '2.0', '2.3', '2.7', '3.0', '3.3', '3.7', '4.0', '4.3', '4.7', '5.0']
  vm.series = ['Notenverteilung']
  vm.data = [_.map(vm.labels, x => anzahlNotenInSegment(vm.pruefungen, x))]

  vm.setzeNote = function(pruefung, note){
    pruefung.note = note
    vm.data = [_.map(vm.labels, x => anzahlNotenInSegment(vm.pruefungen, x))]
  }

  vm.entferneNote = function(pruefung){
    pruefung.note = null
    vm.data = [_.map(vm.labels, x => anzahlNotenInSegment(vm.pruefungen, x))]
  }

}

export default {
  name: 'PrVerCtrlDoz',
  fn: PrVerCtrlDoz
};
