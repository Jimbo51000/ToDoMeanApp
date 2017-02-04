var express = require('express'); 
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://jimmy:jimmy@ds139869.mlab.com:39869/todolist',['Tasks']);

//get all tasks
router.get('/tasks',function(req,res,next){

    db.Tasks.find(function (err, docs) {
    // docs is an array of all the documents in mycollection
    if(err){
        res.send(err);
    }else{
        res.send(docs);
    }
});
    
});

//get single tasks
router.get('/tasks/:id',function(req,res,next){

    db.Tasks.findOne({_id:mongojs.ObjectId(req.params.id)},function (err, docs) {
    // docs is an array of all the documents in mycollection
    if(err){
        res.send(err);
    }else{
        res.send(docs);
    }
});
    
});


module.exports = router;