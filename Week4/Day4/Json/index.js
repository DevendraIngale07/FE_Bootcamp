import ProdsJson from './product.json' assert{type: 'json'};

let productContainers = document.querySelector(".productContainer");
console.log(ProdsJson);

ProdsJson.forEach((product) => {
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
      <h2>Product Name</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum
        consectetur doloribus sunt dolorem unde placeat nisi dolorum
        molestiae.
      </p>
      <p>Price: $599</p>
      <button>Add to Cart</button>
    </div>
  </div>`

    productContainers.innerHTML += productCard;

})
