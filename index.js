// Desafio de classificador de nível de Herói.

let nomeHeroi = "Homem de Ferro";
let xpHeroi = 1.000;

if (xpHeroi <= 1.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Ferro.");
} else if (xpHeroi > 1.000 && xpHeroi <= 2.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Bronze.");
} else if (xpHeroi > 2.000 && xpHeroi <= 5.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Prata.");
} else if (xpHeroi > 5.000 && xpHeroi <= 7.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Ouro.");
} else if (xpHeroi > 7.000 && xpHeroi <= 8.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Platina.");
} else if (xpHeroi > 8.000 && xpHeroi <= 9.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Ascendente.");
} else if (xpHeroi > 9.000 && xpHeroi <= 10.000) {
    console.log("O Herói " + nomeHeroi + " está no nível de Imortal.");
} else {
    console.log("O Herói " + nomeHeroi + " está no nível de Radiante.");
}