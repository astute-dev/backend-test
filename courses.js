var request = require('request');

var ENDPOINT = 'https://astutedev.herokuapp.com';

var d = '';

request(ENDPOINT + '/courses')
  .on('data', function(data) {
    d += data;
  })
  .on('end', function() {
    validate(JSON.parse(d));
  })
  .on('error', function(err) {
    console.error(err);
    throw 'NETWORK ERROR';
  });

var KEYS = [];

function validate(data) {
  var keys = Object.keys(data);
  if (!keys.length) {
    throw 'NO DATA RETURNED';
  }
  var dept = data[keys[0]];
  for (var i = 0; i < dept.length; i++) {
    var course = dept[i];
    if (Object.keys(course) === 1) { // general
      continue;
    }
    for (var j = 0; j < KEYS.length; j++) {
      var k = KEYS[j];
      if (!(k in course)) {
        throw 'INCORRECT COURSE DATA FORMAT';
      }
    }
    break;
  }
}
