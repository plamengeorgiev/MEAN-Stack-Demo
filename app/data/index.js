var fs = require('fs');
var mongoose = require('mongoose');

var data = {
    connect: function(connectionString){
        mongoose.connect(connectionString);
    }
};

var files = fs.readdirSync(__dirname+'/types-data')
for(var i = 0, len = files.length; i<len; i+=1) {
    var typeData = require('./types-data/' + files[i]);
    data[typeData.name] = typeData.data;
};
    module.exports = data;