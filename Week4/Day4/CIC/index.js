let times = document.querySelector('.count')
let starts = document.querySelector('.start')
let restarts = document.querySelector('.restart')

let count = 0;

function startInterval(){
    setInterVal(() => {
        count +=1
        countDiv.innerText = count
    }, 1000);

    starts.addEventListener('click',(e) =>{
        let buttonval = e.target.innertext
        if(buttonval === 'start'){
            startInterval()
            e.target,innerText
        }
    })
}