var readPipe = require('./read_pipe');

readPipe(validate);

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
