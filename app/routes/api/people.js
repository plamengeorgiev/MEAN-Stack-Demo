var express = require('express');


module.exports = function(data){
    var router = express.Router();
    router.get('/', function(req, res) {
        return data.people.getAll()
            .then(function(people){
                res.json(people);
            },
            function(err){
                res.status(400)
                    .json(err);
        });
    })
    .post('/', function(req, res) {
        //validation
            var person = req.body;
            data.people.save(person)
                .then(function(data){
                    res.json(data);
                }, function(err){
                    res.status(400)
                        .json(err);
                });
    })
        return router;
};

