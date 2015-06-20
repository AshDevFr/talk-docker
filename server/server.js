/**
 * Created by AshDevFr on 07/06/15.
 */

(function() {
  'use strict';
  var express = require('express'),
      server  = express(),
      port    = process.env.PORT || 9000;

  server.use(express.static(__dirname + '/../public'));
  server.get('/', express.static(__dirname + '/../presentation'));

  server.listen(port, function() {
    console.log('server listening on port ' + port);
  });
})();
