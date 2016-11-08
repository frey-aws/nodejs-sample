var aws = require("aws-sdk");

modifyDBInstance = function(o) {

    var rds = new aws.RDS();
    
    var params = o;
    
    rds.modifyDBInstance(params, function(err, data) {
      if (err) console.log(err, err.stack); // an error occurred
      else     console.log(data);           // successful response
    });
};

/*
exports.handler = function (event, context) {    
    modifyDBInstance(event, function(data) {
        context.succeed();
    });
};

*/

