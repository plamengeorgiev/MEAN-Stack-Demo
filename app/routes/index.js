var express = require('express');

module.exports = function(data) {
    var router = express.Router();
    router.get('/', function (req, res) {

        res.json({
            people: ['Pesho', 'Gosho']
        });
    });
    return router;
};


