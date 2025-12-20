// Desafio - Escrevendo as classes de um jogo

class heroi{
    constructor(nomeHeroi, idade, tipo){
        this.nomeHeroi = nomeHeroi
        this.idade = idade
        this.tipo = tipo
    }
    ataque(){
        if(this.tipo === "guerreiro"){
            console.log("O "+this.tipo+", atacou usando sua espada!");
        }else if(this.tipo === "mago"){
            console.log("O "+this.tipo+", atacou usando magia!");
        }else if(this.tipo === "monge"){
            console.log("O "+this.tipo+", atacou usando artes marciais!");
        }else if(this.tipo === "ninja"){
            console.log("O "+this.tipo+", atacou usando shuriken!");
        }
    }
}

let ataqueNinja = new heroi("Narutinho", 16, "ninja")
let ataqueGuerreiro = new heroi("Rei Arthur", 30, "guerreiro")
let ataqueMago = new heroi("Gandalf", 100, "mago")
let ataqueMonge = new heroi("Jackie Chan", 40, "monge")

ataqueNinja.ataque()
ataqueGuerreiro.ataque()
ataqueMago.ataque()
ataqueMonge.ataque()