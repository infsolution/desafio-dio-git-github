let order = []
let clickedOrder = []
let score = 0

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')


const shuffleOrder=()=>{
    let colorOrder = Math.floor(Math.random()*4)
    order[order.length] = colorOrder
    clickedOrder = []
    for(let i in order){
        let elementColor = creatColorElement(order[i])
        lightColor(elementColor, Number(i) + 1)
    }
}

const lightColor=(element, number)=>{
    number += 500
    setTimeout(()=>{
        element.classList.add('selected')
    }, number - 2500)
    setTimeout(() => {
       element.classList.remove('selected') 
    },2500); 
}

const checkOrder =()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            finished()
            break
        }
    }
    if(clickedOrder.length == order.length){
        alert(`Score: ${score}\nParabéns! Vocçê acertou... Ir para o proíxmo nível`)
        nextLevel()
    }
}

const click =(color)=>{
    clickedOrder[clickedOrder.length] = color
    creatColorElement(color).classList.add('selected')
    setTimeout(() => {
        creatColorElement(color).classList.remve('selected')   
        checkOrder()
    }, 2500);
   
}

const creatColorElement=(color)=>{
    let selectedColor = null
    switch(color){
        case 0:
            selectedColor = green
            break
        case 1:
            selectedColor = red
            break
        case 2:
            selectedColor = yellow
            break
        case 3:
            selectedColor = blue
            break
        default:
            null

    }
    return selectedColor
}

const nextLevel =()=>{
    score+
    shuffleOrder()
}

const finished=()=>{
    alert(`Score: ${score}\nOpa! Infelizmente voçê perdeu\n Para reiniciar clique em ok`)
    order = []
    clickedOrder = []
    playGame()
}

const playGame =()=>{
    alert(`Bem Vindo ao Genius! Prepare-se para o jogo...`)
    sscore = 0
    nextLevel()
}

// green.addEventListener('click', click(0))
// red.addEventListener('click', click(1))
// yellow.addEventListener('click', click(2))
// blue.addEventListener('click', click(3))

green.onclick =()=> click(0)
red.onclick =()=> click(1)
yellow.onclick =()=> click(2)
blue.onclick =()=> click(3)

playGame()