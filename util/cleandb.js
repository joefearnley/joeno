
require('./connect');

var readline = require('readline');

var readline = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

readline.question("Are you sure you want to delete all records [Y/N]?", function(answer) {
  
  if(answer.toUpperCase() === 'Y') {
    var Draw = mongoose.model('Draw');
    Draw.remove(function(error) {
      if (error) {
        console.log('Error deleting all records: ' + error);
        readline.close();
        process.exit(1);
      } else {
        console.log('Reomoving all records');
      }
    });
  }
  readline.close();
  process.exit(0);

});
