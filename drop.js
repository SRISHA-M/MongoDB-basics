var z=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"

z.connect(url, function(err, db) {
 console.log('connected')
 var dbo=db.db("cartoon")
dbo.collection("tom&jerry").drop()
console.log('data dropped')
db.close()


})