module.exports = function(file) {
  const fs = require('fs');
  fs.readFile(file, function(err, data) {
    if (err) { throw err }
    else {
      process.stdout.write(data)
    }
  })
}
