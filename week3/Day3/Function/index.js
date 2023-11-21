// function normal(){
//     console.log("hiiii");
// }
// normal()

// //Arrow function
// const arroFun = (name) => "hello," + name + "!";
// console.log(arroFun("Devendra"));

// //Anonymous function
// document.getElementById("myButton").onclick =
// function () {
//     alert("Button clicket");
// };
//  function table(){
//     for (let a=1;a<10;a++)
//         for (let a=1;a<10;b++){
//             document.write(a + "*" + b + "=" + a*b)
//         }
//  }

// table();
// {
//     case "+":
//         c= 10+20;
//         break;
//     case "-":
//         c= 10-20;
//         break;
//     case "*":
//         c= 10*20;
//         break;
//     case "/":
//         c= 10/20;
//         break;
//     case "**":
//         c= 10**20;
//         break;
//     return c;
// }

function calu(num1, num2, operand){
    let c;
    switch (operand) {
        case '+':
            c=num1+num2;
            break;
        case '-':
            c=num1-num2;
            break;
        case '*':
            c=num1*num2;
            break;
        case '/':
            c=num1/num2;
            break;
    
        default:
            break;
    }
    return c;
}

console.log( calu(10,20, "+"));
