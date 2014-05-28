/**
 * Created by youxiachai on 14-4-28.
 */


var Promise = require("bluebird");

var fs = Promise.promisifyAll(require("fs"));

fs.readFileAsync("package.json").then(JSON.parse).then(function (json) {

    return fs.readFileAsync("package.json")
        .then(JSON.parse)
        .then(function (json2) {
            console.log("Successful json -> " + 'json2');
            return fs.readFileAsync("package.json")
                .then(JSON.parse)
                .then(function (json3){
                    console.log("Successful json -> " + 'json3');
                    return [json3, true]
                });
        })

}).spread(function (result, result2) {
       console.log('spread -> ' + JSON.stringify(result) + '  ' + result2);
       return fs.readFileAsync("package.json")
            .then(JSON.parse)
            .then(function (xx){
                 console.log("Successful json -> " + 'xx');
            })

    })

    .catch(SyntaxError, function (e) {
        console.error("file contains invalid json");
    }).error(function (e) {
        console.error("unable to read file, because: ", e.message);
    }).finally(function (x) {
        console.log('finally ->' + x);
        console.log('do some thing')
    });