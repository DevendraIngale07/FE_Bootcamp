import Products from '../../../Week4/Day4/Json/product.json' assert{type:'json'}


let err = true

function Promise1(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!err) {
                res(Products)
                body.innerText = ""
                console.log('Data fetched')
            }
            else rej (new Error('Some error occured plz try again'))

        }, 3000);
    })
}
function Promise2(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!err) {
                res(Products)
                body.innerText = ""
                console.log('Data fetched')
            }
            else rej (new Error('Some error occured plz try again'))

        }, 1000);
    })
}
function Promise3(){
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (!err) {
                res(Products)
                body.innerText = ""
                console.log('Data fetched')
            }
            else rej (new Error('Some error occured plz try again'))

        }, 1000);
    })
}

console.log("OutSide Function");

async function callpromises(){
    try {
        console.log("Inside CallPromises function");
        let Promise1Data = await Promise1()
        let Promise2Data = await Promise2()
        let Promise3Data = await Promise3()
        console.log("after we get resoled promise1 data")
        return "My data"

    }   catch (error){
        console.log("Error", error.message);
    }

}


callpromises()

console.log("after function has been called");



