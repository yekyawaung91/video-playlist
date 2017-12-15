## Youtube Video Playlist

- Node JS,Express JS
- EJS (Template Engine)
- Body-Parser (Data Passed)
- Mongoose (Database)

## Project Demo
![](screenshot.png?raw=true)


## Database Schema
	- url:String,
	- song:String,
	- artist:String,
	- description:String,
	- date:Date

## Change mongoonse connection
	- change user and password in (videoController)
	- mongoose.connect('mongodb://<user>:<pass>@ds157667.mlab.com:57667/videoplayer',{ useMongoClient: true });


## Run Project
	- cd /your-project-directory
	
## Run Server
	- node app