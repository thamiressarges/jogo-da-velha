document.addEventListener('DOMContentLoaded', () => {
    let squares = document.querySelectorAll('.square');

    squares.forEach(square => {
        square.addEventListener('click', handlerClick);
    })
});

function handlerClick(event){
    let square = event.target;
    let position = square.id;

    if(handlerMove(position)){

        setTimeout(() => {
            alert("O jogo acabou - O vencedor foi " + symbols[playerTime])
            resetGame()
        }, 10)
        
    }

    updateSquare(position);
    
}

function updateSquare(position){
    let square = document.getElementById(position.toString());
    let symbol = board[position];
    square.innerHTML = `<div class="${symbol}"></div>`
}

