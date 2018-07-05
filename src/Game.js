const fs = require('fs');
class Game {
	constructor(id){
		this.id = id;
		this.hint = "_ _ _ _";
		this.leftAttempts = 10;
	}

	static create(name){
		return new Promise((resolve, reject) => {
		var game = new Game(0);
		var miMapa = new Map();
		miMapa.set(game,game);
		console.log(miMapa.get(game));
		console.log("entro al crear");
	    var data = {};
		
	    var json = JSON.stringify(miMapa.get(game));
	    fs.writeFileSync('./assets/save-game.json',json);
	    console.log(json);
    return resolve(json);
    })
	}

	 getName(){
	 	console.log("aaaaaaaaaa");
	 	return this.name;
	 }
	 /*cargarDatos(eval) {
	 	eval(json);
	 }*/
} 

module.exports = Game
