(function(){
    
    var csv = require('fast-csv');
    var multer = require('multer');

    var kit = {
        upload: multer({ dest: 'uploads/' })
    };

}).call(this);