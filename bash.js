process.stdout.write('prompt> ')
process.stdin.on('data', (data) => {
	const cmd = data.toString().trim();
  if (cmd === 'pwd') {
      pwd()
  } else if (cmd === 'ls') {
      ls()
  } else if (cmd.split(" ")[0] === "cat") {
      cat(cmd.split(" ")[1])
  } else {
      process.stdout.write('You typed: ' + cmd);
  }
	setTimeout(
    function() {process.stdout.write('\nprompt > ')}, 10);
    //is there a way to make "prompt>" run after we've executed our "fs.readdir" from ls.js?
});

const pwd = require('./pwd.js');
const ls = require('./ls.js');
const cat = require('./cat.js')
