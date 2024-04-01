var z=require('mongodb').MongoClient
var url="mongodb://127.0.0.1:27017"
z.connect(url,function(err,db){
    console.log('connected')
    dbo=db.db("cartoon")
    dbo.collection("micky-mouse").find({age:{$not:{$gte:19}}}).toArray(function(err,res){
        console.log(res)
        db.close()
    })
})