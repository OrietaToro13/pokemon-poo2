function pokemon(nombre, color, poderDeAtaque){
	this.nombre = nombre;
	this.color = color;

	this.nivelDeAmistad = 0;

	this.vida = 100;
	this.poderDeAtaque = poderDeAtaque;
	this.mostrarPokemon = function(){
		return('Hola, soy: '+ this.nombre + ' y soy de color: '+ this.color);
	}
	this.aumentarAmistad = function(valor){
		this.nivelDeAmistad = this.nivelDeAmistad + valor;
	}
	this.atacar = function(pokemon){
		pokemon.vida = pokemon.vida - this.poderDeAtaque;
	}
}
const Pikachu = new pokemon('Pikachu', 'amarillo', '100')
const Charmander = new pokemon('Charmander', 'rojo', '76')
const Bulbasaur = new pokemon('Bulbasaur', 'verde', '60')
const Pidgeot = new pokemon('Pidgeot', 'Cafe', '48')

Pikachu.atacar(Charmander)

var pokemon1 = document.getElementById(pokemon1)
var pokemon2 = document.getElementById(pokemon2)
arrPok(Pikachu, Charmander, Bulbasaur, Pidgeot);
arrpok.forEach()

document.write(Charmander.nombre + " " + Charmander.color + " " + Charmander.vida + " " + " - " );
document.write(Pikachu.nombre + " " + Pikachu.color + " "+ Pikachu.vida + " ");

