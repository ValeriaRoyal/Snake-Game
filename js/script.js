// Selecionando o canvas e definindo o contexto 2D
let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32; // Tamanho de cada "quadrado" do jogo
let score = 0; // Pontuação inicial

// Criando a cobra como um array de coordenadas
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
};

// Direção inicial da cobra
let direction = "right";

// Posição inicial da comida (aleatória)
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
};

// Criando o elemento de pontuação
const scoreElement = document.createElement('div');
scoreElement.id = 'score';
scoreElement.innerHTML = 'Pontuação: 0';
document.body.insertBefore(scoreElement, canvas);

// Função para criar o background do jogo
function criarBG() {
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

// Função para desenhar a cobra
function criarCobrinha() {
    for (let i = 0; i < snake.length; i++) {
        // Cabeça com cor diferente
        if (i === 0) {
            context.fillStyle = "darkgreen";
        } else {
            context.fillStyle = "green";
        }
        context.fillRect(snake[i].x, snake[i].y, box, box);
        
        // Adiciona borda para melhor visualização
        context.strokeStyle = "black";
        context.strokeRect(snake[i].x, snake[i].y, box, box);
    }
}

// Função para desenhar a comida
function drawFood() {
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
    
    // Adiciona borda para melhor visualização
    context.strokeStyle = "darkred";
    context.strokeRect(food.x, food.y, box, box);
}

// Evento para capturar as teclas pressionadas
document.addEventListener('keydown', update);

// Função para atualizar a direção com base na tecla pressionada
function update(event) {
    // Evita que a cobra faça um movimento de 180 graus (volte sobre si mesma)
    if (event.keyCode == 37 && direction != "right") direction = "left";
    if (event.keyCode == 38 && direction != "down") direction = "up";
    if (event.keyCode == 39 && direction != "left") direction = "right";
    if (event.keyCode == 40 && direction != "up") direction = "down";
}

// Função principal do jogo
function iniciarJogo() {
    // Lógica para atravessar as bordas
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;

    // Verificação de colisão com o próprio corpo
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            gameOver();
        }
    }

    // Desenha os elementos do jogo
    criarBG();
    criarCobrinha();
    drawFood();

    // Coordenadas atuais da cabeça da cobra
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Atualiza a posição da cabeça com base na direção
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    // Verifica se a cobra comeu a comida
    if (snakeX != food.x || snakeY != food.y) {
        // Se não comeu, remove o último segmento
        snake.pop();
    } else {
        // Se comeu, gera nova comida e aumenta a pontuação
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;
        score += 10;
        scoreElement.innerHTML = `Pontuação: ${score}`;
        
        // Reproduz som de comida (se implementado)
        // playEatSound();
    }

    // Cria nova cabeça da cobra na direção do movimento
    let newHead = {
        x: snakeX,
        y: snakeY
    };
    
    // Adiciona a nova cabeça ao início do array
    snake.unshift(newHead);
}

// Função para exibir tela de Game Over
function gameOver() {
    // Cria o elemento de Game Over
    const gameOverElement = document.createElement('div');
    gameOverElement.id = 'game-over';
    gameOverElement.innerHTML = `
        <h2>Game Over!</h2>
        <p>Sua pontuação: ${score}</p>
        <button id="restart-button">Jogar Novamente</button>
    `;
    document.body.appendChild(gameOverElement);
    
    // Adiciona evento ao botão de reiniciar
    document.getElementById('restart-button').addEventListener('click', restartGame);
}

// Função para reiniciar o jogo
function restartGame() {
    // Remove a tela de Game Over
    const gameOverElement = document.getElementById('game-over');
    if (gameOverElement) {
        document.body.removeChild(gameOverElement);
    }
    
    // Reinicia as variáveis do jogo
    snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    };
    direction = "right";
    score = 0;
    scoreElement.innerHTML = 'Pontuação: 0';
    
    // Gera nova comida
    food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    };
    
    // Reinicia o loop do jogo
    jogo = setInterval(iniciarJogo, 100);
}

// Inicia o loop do jogo, atualizando a cada 100ms
let jogo = setInterval(iniciarJogo, 100);

