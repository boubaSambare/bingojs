//bingo board

function createBoard(){
    for (var i = 0; i <= 76; i++ ){
        var bingoContainer = document.querySelector('#bingo-container')

        var bingoCellContainer = document.createElement('div')
        bingoCellContainer.className = 'bingo-cell'

        var bingoCell = document.createElement('h3')
        bingoCellContainer.className = 'cell'
        bingoCell.innerText = randomNumber()
        
        bingoCellContainer.appendChild(bingoCell)
        bingoContainer.appendChild(bingoCellContainer)
    }
}


function randomNumber(){
    var randomNumbers = Math.floor(Math.random() * 75)
    console.log(randomNumbers)
    return randomNumbers
}