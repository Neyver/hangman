const fs = require('fs');
class Game {
	constructor(id){
		this.id = id;
		this.hint = "_ _ _ _";
		this.leftAttempts = 10;
	}

	static create(name){
	var game = new Game(0);
	var miMapa = new Map();
	miMapa.set(game,game);
	console.log(miMapa.get(game));
	console.log("entro al crear");
    var data = {};
    data.id = 0;
    data.name = name;
    data.hint = "_ _ _ A";
    data.leftAttempts = 10;
   
    var json = JSON.stringify(miMapa.get(game));
    fs.writeFileSync('./assets/save-game.json',json);
    console.log(json);
    return json;
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
