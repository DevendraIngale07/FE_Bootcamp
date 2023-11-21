// arr [1,2,3,4,5,6,7,8];
// let sliceArr = arr.slice(2,5)




let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14]

let div = arr.reduce((acc, val, index,origArr) =>{
    if(val % 2 === 0) acc.push(val)
    return acc
},[])
//  const fullname1 = {fullName 

// }

 const fullName = (fullname1) => {
    let arr = fullname1.split(" ")
    let fname = arr[0]
    let lname = arr[1]
    return {fname, lname}
 }

 console.log(fullName('devendra ingale'));




 //  function fullName( fanme, lname){
//     const fullName = ()
//  };


    
 

