var express = require('express');
var app = express();
var router = express.Router();
var PORT = 8081;

router.get('/watches', function(req, res) {
  res.json({
    data: [
      {
        name: 'Apple Watch Series 4',
      },
      {
        name: 'Apple Watch SE',
      },
      {
        name: 'Apple Watch Series 3',
      },
      {
        name: 'Apple Watch Nike',
      },
      {
        name: 'Apple Watch Hermès',
      },
    ],
  });
});

router.get('/iphones', function(req, res) {
  res.json({
    data: [
      {
        name: 'iPhone 12 Pro',
      },
      {
        name: 'iPhone 12',
      },
      {
        name: 'iPhone SE',
      },
    ],
  });
});

app.use('/', router);

app.listen(PORT, () => {
  console.log(`Apple API started on port ${PORT}`);
});
