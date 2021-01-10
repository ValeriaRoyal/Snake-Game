let canvas = document.getElementById("snake"); //selecionando o id snake
let context = canvas.getContext("2d"); //rederiza o desenho que acontece no canvas. Vai tratar o arquio como 2d.
let box = 32;
let snake = [];
snake[0] = {
    x: 8 * box, //Tamanho da cobra
    y: 8 * box
}
let direction = "right"; // direção 
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box //retorna um numero aleatório até 1 e retirar o flutuante.
}

function criarBG(){ //criando background do canvas
    context.fillStyle = "lightgreen"; // o context foi definido em 2d e terá a cor verde.
    context.fillRect(0, 0, 16 * box, 16 * box);
}

//array de coordenadas, adc um elemento e retirar o ultimo fazendo que a cobra ande na área do canvas.
function criarCobrinha(){
    for(i=0; i < snake.length; i++){
        context.fillStyle = "green"; //cor da cobra 
        context.fillRect(snake[i].x, snake[i].y, box, box); // tamanho da cobra
    }
}

function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box,box);
}

document.addEventListener('keydown', update); //Chama update

function update (event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){

    //Quando a cobra chegar no limite do lado direito ou esquedo, ele aparece do outro lado.
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    //Quando a cobra chegar no limite de cima ou baixo, automaticamente aparece do outro lado.
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    for(i=1; i<snake.length;i++){
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('Game over.');
        }
    }


    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x; //coordenad de x e y no centro.
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){ //
        snake.pop(); //Decrementa o ultimo elemento do array.
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box; //No momento que a cobra come a fruta, aparece em outra localização.
        food.y = Math.floor(Math.random() * 15 + 1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead); //Criando uma nova cabeça, unshit acrescentando sempre um no primeiro elemento. 

}

let jogo = setInterval(iniciarJogo,100); //Iniciar o jogo com intervalo de 100 milisegundo e a cada 100 está sendo atualizada para não haver o risco de travamento do jogo.

