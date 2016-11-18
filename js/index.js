/*
  Esta linea permite que salga sideNav con el menu movil
*/
$(".button-collapse").sideNav({
    menuWidth: 240, // Default is 240
    edge: 'left', // Choose the horizontal origin
    closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
    draggable: true // Choose whether you can drag to open on touch screens
});

$(".dropdown-button").dropdown();

/*
  Este codigo crea el efecto de la imagen de inicio
  Inspired by Filippo Bello's Portfolio
  https://github.com/codrops/SegmentEffect/
*/
document.documentElement.className = 'js';

$.fn.extend({
    animateCss: function (animationName) {
        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        this.addClass('animated ' + animationName).one(animationEnd, function() {
            $(this).removeClass('animated ' + animationName);
        });
    }
});

$('.flip').click(function(){
  $('.cont-flip').toggleClass('flipped');
  return false;
});
/*
 Esta seccion contiene el codigo que se encarga de los efectos cuando se hace scroll en la pagina.
*/
$('#element1').css('opacity', 0);
$('#element2').css('opacity', 0);
$('#element3').css('opacity', 0);
$('#element4').css('opacity', 0);
$('.bienvenidos').css('opacity', 0);
$('.banda').css('opacity', 0);
$('.rotaciones').css('opacity', 0);
$('.cont-contactBtn').css('opacity', 0);
$('.card-container').css('opacity', 0);
$('.acordion').css('opacity', 0);
$('.zoom').css('opacity', 0);
$('#content').css('opacity', 0);
$('#miembros').css('opacity', 0);
$('.miembro1 .miembro2 .miembro3 .miembro4').css('opacity', 0);


$('.bienvenidos').waypoint(function() {
    $('.bienvenidos').addClass('animated fadeInUp');
    $('.bienvenidos').css('opacity', 1);
}, { offset: '50%' });

$('.banda').waypoint(function() {
    $('.banda').addClass('animated fadeInUp');
    $('.banda').css('opacity', 1);
}, { offset: '50%' });

$('.rotaciones').waypoint(function() {
    $('.rotaciones').addClass('animated fadeInUp');
    $('.rotaciones').css('opacity', 1);
}, { offset: '50%' });

$('.acordion').waypoint(function() {
    $('.acordion').addClass('animated fadeInDown');
    $('.acordion').css('opacity', 1);
}, { offset: '50%' });

$('.cont-contactBtn').waypoint(function() {
    $('.cont-contactBtn').addClass('animated fadeInDown');
    $('.cont-contactBtn').css('opacity', 1);
}, { offset: '50%' });

$('#miembros').waypoint(function() {
    $('#miembros').addClass('animated zoomIn');
    $('#miembros').css('opacity', 1);
}, { offset: '50%' });

$('#element1').waypoint(function() {
    $('#element1').addClass('animated zoomIn');
    $('#element1').css('opacity', 1);
}, { offset: '50%' });

$('#element2').waypoint(function() {
    $('#element2').addClass('animated zoomIn');
    $('#element2').css('opacity', 1);
}, { offset: '50%' });

$('#element3').waypoint(function() {
    $('#element3').addClass('animated zoomIn');
    $('#element3').css('opacity', 1);
}, { offset: '50%' });

$('#element4').waypoint(function() {
    $('#element4').addClass('animated zoomIn');
    $('#element4').css('opacity', 1);
}, { offset: '50%' });

$('.miembro1').waypoint(function() {
    $('.miembro1').addClass('animated fadeInLeft');
    $('.miembro1').css('opacity', 1);
}, { offset: '50%' });

$('.miembro2').waypoint(function() {
    $('.miembro2').addClass('animated zoomIn');
    $('.miembro2').css('opacity', 1);
}, { offset: '50%' });

$('.miembro3').waypoint(function() {
    $('.miembro3').addClass('animated zoomIn');
    $('.miembro3').css('opacity', 1);
}, { offset: '50%' });

$('.miembro4').waypoint(function() {
    $('.miembro4').addClass('animated fadeInRight');
    $('.miembro4').css('opacity', 1);
}, { offset: '50%' });

$("#siguenos").waypoint(function() {
  $("#siguenos").animateCss('rubberBand');
}, { offset: '100%' });

$('.zoom').waypoint(function() {
    $('.zoom').addClass('animated zoomIn');
    $('.zoom').css('opacity', 1);
}, { offset: '50%' });


$('#content').waypoint(function() {
    $('#content').addClass('animated zoomIn');
    $('#content').css('opacity', 1);
}, { offset: '50%' });
