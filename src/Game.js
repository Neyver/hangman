
class Game {
	constructor(name){
		this.id = 0;
		this.name = name;
		this.hint = "_ _ _ _";
		this.leftAttempts = 10;
	}

	static create(name){
	console.log("entro al crear");
    var data = {};
    data.id = 0;
    data.name = name;
    data.hint = "_ _ _ _";
    data.leftAttempts = 10;
   
    var json = JSON.stringify(data);
    console.log(json);
     return json;
	}

	 getName(){
	 	console.log("aaaaaaaaaa");
	 	return this.name;
	 }
	 cargarDatos(eval) {
	 	eval(json);
	 }
} 

module.exports = Game
