let input = document.querySelector(' .input')
let numBts = document.querySelectorAll(' .numBt')
let opratorBts = document.querySelectorAll(' .opratorBt')
let calbts = document.querySelector(' .calBt')


let num1 = "", num2 = "", opratorTypes

numBts.forEach(btn => {
    btn.addEventListener('click', (e) =>{
        let buttonValue = e.target.innerText
        if (num1 && opratorTypes) num2 += buttonValue
        else num1 += buttonValue
        input.value += buttonValue
    })
})

opratorBts.forEach(btn => {
    btn.addEventListener('click',(e) => {
        let buttonValue = e.target.innerText
        if (num1 && num2 && opratorTypes) return
        if(!opratorTypes) input.value += buttonValue
        else{
            let inputValue = input.value
            let inputLen = inputValue.length
            let subStrInpt = inputValue.substring(0, inputLen - 1)
            input.value = subStrInpt
            input.value += buttonValue
        }
        opratorTypes = buttonValue
    })

})
   
    calbts.addEventListener('click',() => {
        if(!num1 || !num2 || !opratorTypes) return
        num1 = parseInt(num1)
        num2 = parseInt(num2)
        let result;
        switch (opratorTypes) {
            case "+":
                result = num1 + num2
                break;
            case "-":
                result = num1 - num2
                break;
            case "/":
                result = num1 / num2
                break;
            case "*":
                result = num1 * num2
                break;
            default:
                break;
        }
        input.value = result
    })