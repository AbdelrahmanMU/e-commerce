//let img = document.getElementById('img');
let price = document.getElementById('price');
let description = document.getElementById('description');
let title = document.getElementById('title');
let img = document.getElementById('main-image');

var products;

function viewProduct(products) {
    let id = localStorage.getItem('id');

    for (let i = 0; i < products.length; i++){
        if (id == products[i].id) {
            img.setAttribute('src', `${products[i].image}`);
            title.innerText = `${products[i].title}`;
            price.innerText = `${products[i].price} L.E`;
            description.innerText = `${products[i].description}`
        }
    }
}


let xhrItem = new XMLHttpRequest();

xhrItem.open('GET', './products.json');

xhrItem.send();

xhrItem.onreadystatechange = () => {
    if (xhrItem.readyState == 4)
        if (xhrItem.status == 200) { 
            products = JSON.parse(xhrItem.response);
            
            viewProduct(products);
        }
}

