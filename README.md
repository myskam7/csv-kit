# csv-kit
Multi-purposed module that can act as middleware for uploading csv files, and/or read a csv data set from a database and write it to a specified path. In the future, I will be adding more features-- standardizing the data formats for particular databases, namely MySQL and MongoDB.

## Installation

        npm install csv-kit


## Usage

        var kit = require('csv-kit');

        var $k = kit(); //set the object to use its methods

        Basic Functions(to be exanded on in further patches)

## Uploading A Single File

        take the name of the input element with type file and pass it as an argument:

        $k.upload(//put_input_name_here//)
        
.upload() calls the multer npm package, which attaches a body object and a file/files object to the request object. To access the data use "req.file" for now, since only single uploads are currently available.

Then use as a middleware function in your routes:

        app.post('/api/csv', $k.upload('csv'), function(req, res) {
          var file = req.file.path;
           //Do whatever with file
        });

## Reading a Csv file from specified path
        
The path retreived from $k.upload() will be sent in as an argument to the read method.
$k.read(file) reads the file based off the sent file path-- can attach event handlers:

        $k.read(file)
          .on('data', function(data){
            //do something 
            console.log(data);
          })
         .on("end", function(){
             //do something
             console.log("done");
         });


## Writing Csv data to specified path from a MongoDB database

This method only needs a path, headers(as an array of strings/values), and the data from a database retrieval
query(array of objects).

        var path = '../csvs/records/top1000.csv';
        var headers = ['artist','year','song'];
        var dbArray = [];
        
        Example: 
        //Mongoose database query            
                   db.Csv
                      .find({})
                      .then(data => {
                        dbArray = data;
                      })

         $k.dbWrite(path, headers, dbArray)
            .on('finish', function(){
                console.log('done');
             });


**_OR_** if you want to invoke the dbWrite() inside the promise, pass in the data retrieved from the promise directly as an argument

        db.Csv
          .find({})
          .then(data => {
            $k.dbWrite(path, headers, data)
              .on('finish', function(){
                console.log('done');
             });
          })


_Future releases will include the ability to insert into a MongoDB or MongooseJS database, ability to upload multiple csv files, ability to parse and write csvs in different data formats, etc._

## License

This project is licensed with [MIT LICENSE](LICENSE)
