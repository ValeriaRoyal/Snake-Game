let canvas = document.getElementById("snake"); //selecionando o id snake
let context = canvas.getContext("2d"); //rederiza o desenho que acontece no canvas. Vai tratar o arquio como 2d.
let box = 32;

function criarBG(){ //criando background do canvas
    context.fillStyle = "lightgreen"; // o context foi definido em 2d e terá a cor verde.
    context.fillRect(0, 0, 16 * box, 16 * box);
}
criarBG();