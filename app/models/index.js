var fs = require('fs');

var files = fs.readdirSync(__dirname+'/models')
for(var i = 0, len = files.length; i<len; i+=1){
    require('./models/' + files[i]);
};