// 1. The basic part of the example
var L;

window.onload = function() {
  L.mapquest.key = 'zlmRB18q3VoZuCep0mNpDBBRN4DZXApX';

  // 'map' refers to a <div> element with the ID map
  var map = L.mapquest.map('hybrid', {
    center: [53.480759, -2.242631],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control({position: 'bottomright'}));
}