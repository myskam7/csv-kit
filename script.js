(function(){
    
    var csv = require('fast-csv');
    var multer = require('multer');

    function kit(filename) {
        return new kit.init(filename);
    }

    kit.prototype = {

        log: function(){
            console.log('file to be parsed: ', this.filename);
        }
    };

    kit.init = function(filename) {
        var self = this;
        self.filename = filename;
    }

    kit.init.prototype = kit.prototype;

    module.exports = kit;

}).call(this);