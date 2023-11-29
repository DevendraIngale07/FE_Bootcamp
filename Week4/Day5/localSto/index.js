// localStorage.setItem('phoneNum', JSON.stringify(9011108348))
// localStorage.setItem('name', JSON.stringify(["Devendra", "Manoj", "Satish"]))
// let phoneNum = JSON.parse(localStorage.getItem('phoneNum'))
// let nameArr = JSON.parse(localStorage.getItem('nameArr'))
//  console.log(phoneNum, nameArr);



let btn = document.querySelector('button')
let h1 = document.querySelector('h1')

function stringify(val){
    return JSON.stringify(val)
}

function Parsify(val){
    return JSON.parse(val)
}

function checkUserLoggedIn(){
    let isUserloggedIn = Parsify(localStorage.getItem('isLoggedIn'))
    let user = Parsify(localStorage.getItem("user"))
    if (isUserloggedIn){
        h1.innerText = `Wellcome ${user.name}!`
        btn.innerText = 'Log out'
    }
}

checkUserLoggedIn()

btn.addEventListener('click', (e) => {
    let isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'))
    if (isLoggedIn){
        h1.innerText = 'Wellcome to Login page!'
        e.target.innerText = "Login"
    }
    else {
        let user = {name: "Devendra", email: 'devendraingale%5@gmail.com'}
        let isLoggedIn = true
        h1.innerText = `wellcom ${user.name}`
        e.target.innerText = 'Logout'
        localStorage.setItem('user', stringify(isLoggedIn))
        localStorage.setItem('isLoggedIn', stringify(isLoggedIn))
    }
})

