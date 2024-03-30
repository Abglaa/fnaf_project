// home work 1 (part 1) 

const gmailInput = document.querySelector('#gmail_input');
const gmailButton = document.querySelector('#gmail_button');
const gmailResult = document.querySelector('#gmail_result');

const regExp = /^[a-zA-Z0-9._%+-]+@gmail.com$/;

const maxChars = 30;
const minChars = 6;

gmailButton.onclick = () => {
    const inputText = gmailInput.value;
    if (inputText.length >= minChars && inputText.length <= maxChars && regExp.test(inputText)) {
        gmailResult.innerHTML = 'Все верно: правильный адрес Gmail';
        gmailResult.style.color = 'green';
    } else {
        gmailResult.innerHTML = 'Неверный адрес, пример: example@gmail.com, от 6 до 30 символов';
        gmailResult.style.color = 'red';
    }
};

//home work 1 (part 2)

const child_block = document.querySelector(".child_block")

let posX = 0
let posY = 0

const moveBlock = () => {
    if (posX <= 444 && posY === 0)  {
        posX += 16
        child_block.style.left = `${posX}px`
        setTimeout(moveBlock, 20)
    } else if (posX >= 444 && posY <= 448) {
        posY += 15
        child_block.style.top = `${posY}px`
        setTimeout(moveBlock, 20)
    }  else if (posX > 0 && posY >= 335) {
        posX -= 16
        child_block.style.left = `${posX}px`
        setTimeout(moveBlock, 20)

    }   else {
        posY -= 15
        child_block.style.top = `${posY}px`
        setTimeout(moveBlock, 20)

    }
}
moveBlock()


//Home work 2 StopWatch

const secondsBlock = document.querySelector('#seconds')
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let second = 0;
let interval;

startBtn.onclick = () => {
    interval = setInterval(() => {
        second++
        secondsBlock.innerHTML = second
    }, 1000)
}
stopBtn.onclick = () => {
    clearInterval(interval)
}

resetBtn.onclick = () => {
    clearInterval(interval)
    second = 0
    secondsBlock.innerHTML = second
}



// startBtn.addEventListener('click', ()=>{
//     toIncrease();
//     document.querySelector('.interval').style.color = 'orange'
// })
// stopBtn.addEventListener('click', ()=>{
//     toStop();
// })
// resetBtn.addEventListener('click', ()=>{
//     toReset()
//     document.querySelector('.interval').style.color = 'yellow'
// })
// const toIncrease = () =>{
//     toStop()
//     interval = setInterval(function (){
//         newValue++
//         document.querySelector('.interval').innerHTML = newValue;
//     }, 1000)
// }
// const toStop = ()=>{
//     clearInterval(interval)
// }
// const toReset = () =>{
//     clearInterval(interval)
//     newValue = 0;
//     document.querySelector('.interval').innerHTML = newValue;
// }
