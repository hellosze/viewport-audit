var stringify = require('csv-stringify');
var fs = require('fs');

let data = [];
let columns = {
  id: 'id',
  name: 'Name'
};

for (var i = 0; i < 10; i++) {
  data.push([i, 'Name ' + i]);
}

stringify(data, { header: true, columns: columns }, (err, output) => {
  if (err) throw err;
  fs.writeFile('my.csv', output, (err) => {
    if (err) throw err;
    console.log('my.csv saved.');
  });
});