import Products from '../../../Week4/Day4/Json/product.json' assert{type:'json'}

let body = document.querySelector('body')
function getproducts(){
    body.innerHTML += "<h1>Loading</h1>"
    let err = false
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

function printProducts(products){
    products.forEach(p => {
        products.innerHTML += `<p>${p.title}</p>`
    });
}

document.querySelector('button').addEventListener('click',() => {
    getproducts().then(products => printProducts(products))
})











// let btn = document.querySelector('button')
 
// function validatecart(cart){
//     let isValid = true
//     return isValid

// }