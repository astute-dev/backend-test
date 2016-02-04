/**
 * Read a JSON stream from stdin and call
 */
module.exports = function readPipe(cb) {
  var data = '';

  process.stdin.setEncoding('utf-8');
  process.stdin.on('readable', function() {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      data += chunk;
    }
  });
  process.stdin.on('end', function() {
    data = JSON.parse(data);
    cb(data);
  });
};
