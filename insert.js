




var z=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"

z.connect(url, function(err, db) {
 console.log('connected')
 var dbo=db.db("cartoon")
 con=[{
   name:"srisha",email:"sri@123",age:"20"
 },{
   name:"sridhar",email:"sridhar@123",age:"20"
 }]
 dbo.collection("micky-mouse").insertMany(con,function(err,res){
    console.log('data created')
    db.close()
 })

 
})
