let order = []
let clickedOrder = []
let score = 0
let stop = false
const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const yellow = document.querySelector('.yellow')
const green = document.querySelector('.green')
let play = document.getElementById('score') 
play.innerHTML = score
const start = document.querySelector('.start')

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
    }, number - 250)
    setTimeout(() => {
       element.classList.remove('selected') 
    }); 
}

const checkOrder =()=>{
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]){
            finished()
            break
        }
    }
    if(clickedOrder.length == order.length && stop){
        play.innerHTML = score
        alert(`Score: ${score}\nParabéns! Vocçê acertou... Ir para o proíxmo nível`)
        nextLevel()
    }
}

const click =(color)=>{
    clickedOrder[clickedOrder.length] = color
    creatColorElement(color).classList.add('selected')
    setTimeout(() => {
        creatColorElement(color).classList.remove('selected')   
        checkOrder()
    }, 250);
   
}

const creatColorElement=(color)=>{
    if(color == 0) {
        return green;
    } else if(color == 1) {
        return red;
    } else if (color == 2) {
        return yellow;
    } else if (color == 3) {
        return blue;
    }

}


const nextLevel =()=>{
    score++
    shuffleOrder()
}

const finished=()=>{
    alert(`Score: ${score}\nOpa! Infelizmente voçê perdeu\n Para reiniciar clique em START`)
    order = []
    clickedOrder = []
}

const playGame =()=>{
    //alert(`Bem Vindo ao Genius! Prepare-se para o jogo...`)
    score = 0
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
start.onclick =()=> playGame()
//playGame()