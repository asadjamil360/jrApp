const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/jr-app'));

app.get('/*', function(req, res) {
    //res.sendFile('index.html', {root: 'dist/jr-app/'}
    res.sendFile(path.join(__dirname + '/dist/jr-app/jrecords'));
  //);
  });

  app.listen(process.env.PORT || 8080);