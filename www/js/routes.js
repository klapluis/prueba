angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('inicio', {
    url: '/page1',
    templateUrl: 'templates/inicio.html',
    controller: 'inicioCtrl'
  })

  .state('maps', {
    url: '/page2',
    templateUrl: 'templates/maps.html',
    controller: 'mapsCtrl'
  })

  .state('informaciN', {
    url: '/page3 ',
    templateUrl: 'templates/informaciN.html',
    controller: 'informaciNCtrl'
  })

  .state('areasDeEspecialidad', {
    url: '/page4',
    templateUrl: 'templates/areasDeEspecialidad.html',
    controller: 'areasDeEspecialidadCtrl'
  })

  .state('informaciNEspecialidad', {
    url: '/page5',
    templateUrl: 'templates/informaciNEspecialidad.html',
    controller: 'informaciNEspecialidadCtrl'
  })

  .state('horariosDeAtenciN', {
    url: '/page6',
    templateUrl: 'templates/horariosDeAtenciN.html',
    controller: 'horariosDeAtenciNCtrl'
  })

  .state('servicios', {
    url: '/page7',
    templateUrl: 'templates/servicios.html',
    controller: 'serviciosCtrl'
  })

  .state('buscarMedico', {
    url: '/page8',
    templateUrl: 'templates/buscarMedico.html',
    controller: 'buscarMedicoCtrl'
  })

  .state('ayuda', {
    url: '/page9',
    templateUrl: 'templates/ayuda.html',
    controller: 'ayudaCtrl'
  })

  .state('resultadoBusqueda', {
    url: '/page10',
    templateUrl: 'templates/resultadoBusqueda.html',
    controller: 'resultadoBusquedaCtrl'
  })

  .state('informaciNDeLosMedicos', {
    url: '/page11',
    templateUrl: 'templates/informaciNDeLosMedicos.html',
    controller: 'informaciNDeLosMedicosCtrl'
  })

  .state('informaciNDeLosHorarios', {
    url: '/page12',
    templateUrl: 'templates/informaciNDeLosHorarios.html',
    controller: 'informaciNDeLosHorariosCtrl'
  })

$urlRouterProvider.otherwise('/page1')

  

});