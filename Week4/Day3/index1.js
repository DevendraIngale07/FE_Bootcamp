let disPlay = document.querySelector('.display')
let numBts = document.querySelector('.inptbn')
let actionBts = document.querySelector('.opratorBt')

let num1, num2, opratorTypes;


numBts.forEach(btn => {
    btn.addEventListener('click',(e)=>{
        let buttonValue = e.target.innerText
        if (num1 && opratorTypes) num2 += buttonValue
        else num1 +=buttonValue
        disPlay.value += buttonValue
    })
});