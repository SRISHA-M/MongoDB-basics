var z=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"
z.connect(url,function(err,db){
    console.log('connected')
    dbo=db.db("cartoon")
q={name:"mouse"}
con={$inc:{age:5}}
dbo.collection("micky-mouse").updateOne(q,con,function(err,res){
    console.log('data updated')
    db.close()
})



})