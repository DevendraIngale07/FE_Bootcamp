let productContainers = document.querySelector(".productContainer")
let h1 = document.querySelector("h1")
let btn = document.querySelector(".btn")



async function getProduct() {
    try{
        h1.innerText = "Loading Your Product...."
        btn.innerText="Loading"
        btn.disabled= true
        
        let api = 'https://dummyjson.com/products'
        let res = await fetch(api)
        let data = await res.json()
        
        renderProduct(data.products)
        btn.innerText="Data Fetch"
        btn.disabled= false

        h1.innerText = ''

    }catch (error) {
        console.log(error.message);
    }
}

function renderProduct(product){
    product.forEach((product) => {
        let productCard = `<div class="card">
    <div class="imgBox">
      <img
        src=${product.thumbnail}
        alt=" shoes Img"
      />
      <div class="viewMore">View More</div>
      <div class="best">Best Seller</div>
    </div>
    <div class="container">
      <h2>${product.title}</h2>
      <p>
        ${product.description}
      </p>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
    </div>`

    productContainers.innerHTML += productCard;
    })
}
btn.addEventListener('click',getProduct)

//POST METHOD

// let addBtn = document.querySelector('.addBtn')
// let inpt = document.querySelector('input')



//     addBtn.addEventListener('click', async () => {
//         let inpVal = inpt.value
//         if (!inpVal) return
//         let api = 'https://dummyjson.com/products/add'
//         let option = {
//             metod: "POST",
//             headers:{
//                 'Content-Type': 'application/json' 
//             },
//             body: JSON.stringify({ title: inpVal })
//         }
//         let res = await fetch(api, option)
//         let date= await res.json()
//         console.log(data);
        

//         fetch(api, option)
//     })
