(function(){
    
    var csv = require('fast-csv');
    var multer = require('multer');
    var upload = multer({ dest: "uploads/" });

    function kit(filename) {
        return new kit.init(filename);
    }

    kit.prototype = {

        log: function(filename) {
            console.log('file to be parsed: ', this.filename);
        },
        upload: function() {
            return upload;
        }
    };

    kit.init = function(filename) {
        var self = this;
        self.filename = filename;
    }

    kit.init.prototype = kit.prototype;

    module.exports = kit;

}).call(this);