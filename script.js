(function(){
    
    var csv = require('fast-csv');
    var multer = require('multer');
    var upload = multer({ dest: "uploads/" });

    function kit() {
        return new kit.init();
    }

    kit.prototype = {

        log: function() {
            console.log('file to be parsed: ', this.filename);
        },
        upload: function(filename) {
            this.filename = filename;
            return upload.single(this.filename);
        },
        read: function(path) {
            //set the default of headers to true
            return csv.fromPath(path, { headers: true });
        },
        dbWrite: function(path,headers,dbArr) {
            //since the database will attach its own methods and properties to the array object its returning, we will filter the array to only target the
            //necessary data so we can actually write to a file with the data we want.
            
            //right now the default data format we're going to use is an array of objects.

            var obj = {};
            var arr = [];

            for(var i=0, l=dbArr.length; i<l; i++){     

                obj = {};

                for(var j=0, len=headers.length; j<len; j++){
                    obj[headers[j]] = dbArr[i][headers[j]];
                }

                arr.push(obj);                    
            }

            return csv.writeToPath(path, arr, { headers: true });
        },
        //create multiple database insert functions for different databases, for now make two-- one for mysql, the other for mongodb
        insertMgd: function() {
           
            return null;//for now
        },
        insertMgoo: function() {
            return null;//for now
        }
    };

    kit.init = function() {
        var self = this;
    }

    kit.init.prototype = kit.prototype;

    module.exports = kit;

}).call(this);