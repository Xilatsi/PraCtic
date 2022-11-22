function createBlock() {
    let box = document.querySelector('.box')
    let newBlock = document.createElement('button')
    newBlock.classList = ('mini')
    box.append(newBlock)
}

function createBlock1() {
    for (let box = 1; box <= 3; box++) {
            let newBlock = document.createElement('button1')
            let box = document.querySelector('.box')
            newBlock.classList = ('mini1')
            box.append(newBlock)
                
    }
}