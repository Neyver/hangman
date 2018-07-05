const fs = require('fs');
//let mapJson = require('./assets/save-game.json');
class Game {
	
	constructor(word,id){
		this.id = id;
		this.hint =word;
		this.leftAttempts = 10;
	}

	static create(name,i){
		return new Promise((resolve, reject) => {
		var game = new Game(name,i);
		var miMapa = new Map();
		miMapa.set(game,game);
	    var data = {};
		
	    var json = JSON.stringify(miMapa.get(game));
	    fs.writeFileSync('./assets/save-game.json',json);
	    console.log(json);
   		 return resolve(json);
    })
	}

	 getJson(){
	 	console.log(mapJson);
	 	return mapJson;

	 }
	 
} 

module.exports = Game
