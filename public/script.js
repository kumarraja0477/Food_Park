let openShopping = document.querySelector('.shopping');
let PlaceOrdered = document.querySelector('.PlaceOrdered');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

PlaceOrdered.addEventListener('click', ()=> {
  // Redirect to the order successful page
  window.location.href = "order.html";
});

let products = [
    {
        id: 1,
        name: 'Burger',
        image: '1.jpg',
        price: 120
    },
    {
        id: 2,
        name: 'Chicken',
        image: '2.jpg',
        price: 310
    },
    {
        id: 3,
        name: 'Pizza',
        image: '3.jpg',
        price: 220
    },
    {
        id: 4,
        name: 'Pastry Cake',
        image: '4.jpg',
        price: 125
    },
    {
        id: 5,
        name: 'Fruit Juice',
        image: '5.jpg',
        price: 320
    },
    {
        id: 6,
        name: 'Ice-Cream',
        image: '6.jpg',
        price: 120
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}


//loader
function loader() {
    document.querySelector(".loader-container").classList.add("fade-out");
  }
  
  function fadeOut() {
    setInterval(loader, 1500);
  }
  
  window.onload = fadeOut;
  

  //review section swiper
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
  });
  
  var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });



  //search-button

  let searchInput = document.querySelector('.search input');
  let searchButton = document.querySelector('.search button');
  
  searchInput.addEventListener('input', searchFood);
  searchButton.addEventListener('click', searchFood);
  
  function searchFood() {
    let searchText = searchInput.value.toLowerCase().trim();
  
    if (searchText === '') {
      showAllProducts();
      return;
    }
  
    let filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText)
    );
  
    list.innerHTML = '';
  
    if (filteredProducts.length === 0) {
      list.innerHTML = '<div class="no-results">No matching results found.</div>';
    } else {
      filteredProducts.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
          <img src="image/${value.image}">
          <div class="title">${value.name}</div>
          <div class="price">${value.price.toLocaleString()}</div>
          <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
      });
    }
  }
  
  function showAllProducts() {
    list.innerHTML = '';
    products.forEach((value, key) => {
      let newDiv = document.createElement('div');
      newDiv.classList.add('item');
      newDiv.innerHTML = `
        <img src="image/${value.image}">
        <div class="title">${value.name}</div>
        <div class="price">${value.price.toLocaleString()}</div>
        <button onclick="addToCard(${key})">Add To Cart</button>`;
      list.appendChild(newDiv);
    });
  }
