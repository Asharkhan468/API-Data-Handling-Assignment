const div = document.querySelector("#div");

axios("https://fakestoreapi.com/products")


.then((res)=>{
    res.data.map((item)=>{
        div.innerHTML += `<div class="card" style="width: 14rem;">
  <img src="${item.image}" class="card-img-top" alt="product image">
  <div class="card-body">
    <h5 class="card-title">${item.title}</h5>
    <h5 class="card-text">Price: ${item.price}</h5>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

    })

})
.catch((err)=>{
    console.log(err);

})