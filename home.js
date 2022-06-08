// start ajax request
var xhrProduct = new XMLHttpRequest();
var xhrSlider = new XMLHttpRequest();

var products = new Array();
var sliderImg = new Array();

xhrProduct.open('GET', 'products.json');
xhrSlider.open('GET', 'slider.json');

xhrProduct.send();
xhrSlider.send();

xhrProduct.onreadystatechange = () => {
    if (xhrProduct.readyState == 4)
        if (xhrProduct.status == 200) {
            products = JSON.parse(xhrProduct.response);
            
            filterProducts()
        }
}

xhrSlider.onreadystatechange = () => {
    if (xhrSlider.readyState == 4)
        if (xhrSlider.status == 200) {
            sliderImg = JSON.parse(xhrSlider.response);
            slider(sliderImg)
        }
}
// ending Ajax request



// create filter
function filterProducts(filter = 'all') {
    addCards(products, filter)
}
// ending filter


// start slider
function slider(products) {
    var image = document.querySelector('.image');
    var pre = document.querySelector('#pre');
    var next = document.querySelector('#next');

    var counter = 0;

    image.style.backgroundImage = `url(${products[1].image})`;

    next.addEventListener("click", () => {
        if (counter >= products.length)
            counter = 0;

        image.style.backgroundImage = `url(${products[counter++].image})`;
        console.log(counter);
    });

    pre.addEventListener('click', () => {
        if (counter >= products.length || counter < 0)
            counter = 4;
        image.style.backgroundImage = `url(${products[counter].image})`;
        --counter;
    })

    function playSlider() {
        changeImg = setInterval(() => {
            var randomNumber = Math.round(Math.random() * (products.length - 1));
            image.style.backgroundImage = `url(${products[randomNumber].image})`
        }, 4000)
    }
    playSlider()
}
// ending slider



//starting cards
function addCards(cardsData, filter = 'all') {
    let image, title, price, description, addToCard;

    let cardsDiv = document.getElementById("cards");
    // cardsDiv.innerHTML = '';

    while (cardsDiv.hasChildNodes())
        cardsDiv.removeChild(cardsDiv.firstChild)

    for (var i = 0; i < cardsData.length; i++) {

        if (cardsData[i].category === filter || filter == 'all') {
            image = document.createElement("img");
            image.setAttribute("src", `${cardsData[i].image}`);

            title = document.createElement("h1");
            title.setAttribute('class', 'title')
            title.innerText = cardsData[i].title;

            price = document.createElement("p");
            price.innerText = cardsData[i].price + ' L.E';
            price.setAttribute("class", "price");

            description = document.createElement("p");
            description.setAttribute('class', 'description')
            description.innerText = cardsData[i].description;

            addToCard = document.createElement("button");
            addToCard.setAttribute('onclick', `viewProduct(${cardsData[i].id})`);
            addToCard.innerText = "View Product";

            let Form = document.createElement('form');
            Form.setAttribute('action', './details.html');    

            Form.appendChild(addToCard);

            let cardsDiv = document.getElementById("cards");

            let cardDiv = document.createElement("div");
            cardDiv.setAttribute("class", "card");

            cardDiv.setAttribute("id", "card");

            cardDiv.appendChild(image);
            cardDiv.appendChild(title);
            cardDiv.appendChild(price);
            cardDiv.appendChild(description);
            // cardDiv.appendChild(addToCard);
            cardDiv.appendChild(Form);

            cardsDiv.appendChild(cardDiv);
        }
    }
}
//ending cards


function viewProduct(id) {
    localStorage.setItem('id',id);
}


/** go up button */

let goUp = document.getElementById('goup');

window.onscroll = () => {
    if (window.pageYOffset >= 400)
        goUp.style.display = 'block';
    else
        goUp.style.display = 'none';
}

goUp.onclick = () => {
    window.scrollTo(0, 0);
}