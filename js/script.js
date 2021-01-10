let canvas = document.getElementById("snake"); //selecionando o id snake
let context = canvas.getContext("2d"); //rederiza o desenho que acontece no canvas. Vai tratar o arquio como 2d.
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box, //Tamanho da cobra
    y: 8 * box
}

function criarBG(){ //criando background do canvas
    context.fillStyle = "lightgreen"; // o context foi definido em 2d e terá a cor verde.
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//array de coordenadas, adc um elemento e retirar o ultimo fazendo que a cobra ande na área do canvas.
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle= "green"; //cor da cobra 
        context.fillRect(snake[i].x, snake[i].y, box, box); // tamanho da cobra
    }
}
criarBG();
criarCobrinha();
