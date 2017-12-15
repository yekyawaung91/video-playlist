var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//connect to mongodb database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://<user>:<pass>@ds157667.mlab.com:57667/videoplayer',{ useMongoClient: true });



//create playlist schema
var VideoSchema = new mongoose.Schema({
	url:String,
	song:String,
	artist:String,
	description:String,
	date:Date
});
var VideoItem = mongoose.model('VideoItem',VideoSchema);


//test data save
/*
var video = VideoItem({
	url:'//www.youtube.com/embed/A7ry4cx6HfY',
	song:'So Far Away',
	artist:'Avenged Sevenfold',
	description:'a good song',
	date:'2017'
}).save(function(err){
	if(err) throw err;
	console.log('new video saved');
});
*/
var urlencodedParser = bodyParser.urlencoded({extended:false});

module.exports = function(app){

	app.get('/',function(req,res){
		VideoItem.find({},function(err,data){
			if(err) throw err;
			res.render('index',{videos:data});
		});
	});

	app.post('/upload',urlencodedParser,function(req,res){
		var newVideo = VideoItem(req.body).save(function(err,data){
		if(err) throw err;
			res.json(data);
		});
	});

	app.delete('/delete/:item',function(req,res){
		//delete the requested item
		VideoItem.find({song:req.params.item.replace(/\-/g," ")}).remove(function(err,data){
			if(err) throw err;
			res.json(data);
		});
	});

	
};