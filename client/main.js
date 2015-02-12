'use strict';

$(document).ready(init);

function init() {
  $('#get-data').click(clickGetData);
  $('#get-type').click(clickGetType);
}

function clickGetData() {
  var year = $('select').val();
  var url = 'https://cdph.data.ca.gov/resource/kbup-p858.json?year=' + year;
  $.getJSON(url, function(response) {

  var homocides = _.map(response, function(o){return o.hom * 1});
  homocides = _.compact(homocides);
  homocides = _.reduce(homocides, function(prev, curr) {return prev + curr});
  // debugger;
    console.log(homocides);
  })
}

  function clickGetType() {
    var year = $('#year').val();
    var type = $('#type').val();
    var url = 'https://cdph.data.ca.gov/resource/kbup-p858.json?type=' + type;
    $.getJSON(url, function(response) {

    var types = _.map(response, function(o){return o[types] * 1});
    types = _.compact(types);
    types = _.reduce(types, function(prev, curr) {return prev + curr});
    // debugger;
      console.log(types);
    })
}
