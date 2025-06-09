# 🐍 Snake Game

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

Uma implementação moderna do clássico jogo Snake (Jogo da Cobrinha), desenvolvido com JavaScript puro, HTML5 Canvas e CSS3. Este projeto recria a experiência nostálgica dos celulares antigos com uma interface limpa e responsiva.

## 📋 Índice

- [Sobre o Projeto](#-sobre-o-projeto)
- [Como Jogar](#-como-jogar)
- [Funcionalidades](#-funcionalidades)
- [Tecnologias Utilizadas](#-tecnologias-utilizadas)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Como Executar](#-como-executar)
- [Conceitos Aplicados](#-conceitos-aplicados)
- [Melhorias Futuras](#-melhorias-futuras)
- [Contribuições](#-contribuições)
- [Licença](#-licença)
- [Contato](#-contato)

## 🎮 Sobre o Projeto

O Snake Game é uma recriação do clássico jogo da cobrinha que ficou famoso nos celulares Nokia. O objetivo é controlar uma cobra que cresce ao consumir alimentos, evitando colisões com as paredes e com o próprio corpo.

Este projeto foi desenvolvido como um exercício prático para aplicar conceitos fundamentais de desenvolvimento web, com foco especial em manipulação do Canvas HTML5, lógica de jogo e controle de estados dinâmicos.

## 🕹️ Como Jogar

- Use as **setas do teclado** para controlar a direção da cobra
- Colete os alimentos vermelhos para crescer e ganhar pontos
- Evite colidir com as paredes ou com o próprio corpo da cobra
- O jogo reinicia automaticamente após uma colisão

## 🧠 Funcionalidades

- **Sistema de Controle Responsivo**: Movimentação fluida com as setas do teclado
- **Geração Aleatória de Alimentos**: Posicionamento dinâmico dos alimentos no campo
- **Crescimento da Cobra**: A cobra aumenta de tamanho ao consumir alimentos
- **Detecção de Colisões**: Sistema que identifica colisões com paredes e com o próprio corpo
- **Travessia de Bordas**: A cobra pode atravessar as bordas do campo e aparecer do lado oposto
- **Reinício Automático**: O jogo reinicia após uma colisão fatal

## ⚙️ Tecnologias Utilizadas

- **JavaScript (Vanilla)**: Toda a lógica do jogo, incluindo movimentação, colisões e estados
- **HTML5 Canvas**: Renderização do campo de jogo e dos elementos gráficos
- **CSS3**: Estilização da interface com foco em responsividade e experiência visual

## 📁 Estrutura do Projeto

```
Snake-Game/
├── index.html          # Estrutura principal da página
├── css/
│   ├── reset.css       # Reset de estilos padrão do navegador
│   ├── style.css       # Estilos principais do jogo
│   └── responsive.css  # Ajustes para diferentes tamanhos de tela
├── js/
│   └── script.js       # Lógica do jogo e controle de eventos
└── README.md           # Documentação do projeto
```

## 🚀 Como Executar

1. **Clone o repositório**:
   ```bash
   git clone https://github.com/ValeriaRoyal/Snake-Game.git
   ```

2. **Acesse a pasta do projeto**:
   ```bash
   cd Snake-Game
   ```

3. **Abra o arquivo index.html**:
   - Você pode abrir diretamente no navegador
   - Ou usar uma extensão como Live Server no VS Code para uma experiência mais fluida

## 💡 Conceitos Aplicados

- **Manipulação do Canvas HTML5**: Renderização de elementos gráficos em tempo real
- **Lógica de Jogo**: Implementação de regras, estados e comportamentos
- **Controle de Eventos**: Captura de eventos do teclado para movimentação
- **Algoritmos de Colisão**: Detecção de sobreposição entre elementos
- **Geração de Números Aleatórios**: Posicionamento dinâmico de elementos no campo
- **Loops de Jogo**: Uso de setInterval para atualização contínua do estado do jogo
- **Manipulação de Arrays**: Gerenciamento dinâmico do corpo da cobra

## 🔮 Melhorias Futuras

- [ ] Sistema de pontuação visível na tela
- [ ] Diferentes níveis de dificuldade (velocidade)
- [ ] Armazenamento de recordes (high scores)
- [ ] Efeitos sonoros
- [ ] Modo de jogo alternativo (labirinto)
- [ ] Suporte para dispositivos móveis (controles touch)
- [ ] Diferentes tipos de alimentos com efeitos especiais
- [ ] Modo de pausa

## 🤝 Contribuições

Contribuições são bem-vindas! Se você tem alguma ideia para melhorar o jogo:

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 📬 Contato

Valéria Regina - [GitHub](https://github.com/ValeriaRoyal) - [LinkedIn](https://www.linkedin.com/in/valeria-regina)

---

Desenvolvido com ❤️ como um projeto de estudo e prática de desenvolvimento web front-end.
