const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')
console.log(score)


let result = 0
let hitpostion 
let currentTime = 10;

function randomSquare(){
    squares.forEach(squares => {
        squares.classList.remove('mole')
    })
    let randomPosition = squares[Math.floor(Math.random()* 9)]
    randomPosition.classList.add('mole')
    hitpostion = randomPosition.id
    
}

squares.forEach(squares=>{
    squares.addEventListener('mousedown', ()=>{
        if(squares.id == hitpostion){
            result++
            score.textContent = result
            hitpostion = null
        }
    })
})

function moveMOle(){
   let timerId = null
   timerId = setInterval(randomSquare, 1200)
}
moveMOle()


function countDown(){
    currentTime--
    timeLeft.textContent = currentTime
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        alert('the game is OVER!  your Score is: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)