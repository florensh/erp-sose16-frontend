function PersDatenCtrl() {

  // ViewModel
  const vm = this;

  vm.student = {
    name: 'Hückstädt',
    vorname: 'Florens',
    geburtsdatum: new Date(1982, 11, 7, 0, 0, 0, 0),
    email: 'florensh@gmx.de'
  }



}

export default {
  name: 'PersDatenCtrl',
  fn: PersDatenCtrl
};
