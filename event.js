var request = require('request');

var ENDPOINT = 'https://astutedev.herokuapp.com';

request
  .get(ENDPOINT + '/event')
  .on('data', function(data) {
    validate(JSON.parse(data));
  })
  .on('error', function(err) {
    console.error(err);
    throw 'NETWORK ERROR';
  });


var KEYS = [
  'userid',
  'name',
  'location',
  'description',
  'department',
  'class',
  'start_t',
  'end_t',
  'faculty'
];

function validate(data) {
  console.log(data);
  if (!data.length) {
    console.log('NO DATA FOUND');
    return;
  }
  var e = data[0];
  for (var i = 0; i < KEYS.length; i++) {
    var key = KEYS[i];
    if (!(key in e)) {
      throw 'MISSING KEY!';
    }
  }
}
