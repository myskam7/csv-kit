(function(){
    
    var csv = require('fast-csv');
    var multer = require('multer');

    function kit(filename) {
        return new kit.init(filename);
    }

    kit.prototype = {};

    kit.init = function(filename) {
        var self = this;

        self.filename = filename;

        console.log('file to be parsed: ', self.filename);
        
    }

    kit.init.prototype = kit.prototype;

    module.exports = kit;
}).call(this);