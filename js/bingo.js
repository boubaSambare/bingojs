//bingo board

function createBoard(){
    for (var i = 0; i <= 74; i++ ){
        var bingoContainer = document.querySelector('#bingo-container')

        var bingoCellContainer = document.createElement('div')
        bingoCellContainer.className = 'bingo-cell'

        var bingoCell = document.createElement('h3')
        bingoCellContainer.className = 'cell ' + 'cell-' + (i +1)
        bingoCell.innerText = i + 1
        
        bingoCellContainer.appendChild(bingoCell)
        bingoContainer.appendChild(bingoCellContainer)
    }
}


function randomNumber(){
    var randomNumbers = Math.floor(Math.random() * 75)
    var randomNumberElm = document.querySelector('#random-number')
    randomNumberElm.innerText = randomNumbers
    console.log(randomNumbers)
    
    return randomNumbers
}

window.onload = function () {

    createBoard()
}