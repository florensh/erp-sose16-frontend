function PersDatenCtrl() {

  // ViewModel
  const vm = this;

  vm.student = {
    name: 'Hückstädt',
    vorname: 'Florens',
    matrikelnummer: '184352',
    geburtsdatum: new Date(1982, 11, 7, 0, 0, 0, 0),
    email: 'florensh@gmx.de',
    semester: 7,
    fach: 'Software Engineering'
  }



}

export default {
  name: 'PersDatenCtrl',
  fn: PersDatenCtrl
};
