const Products = [ //objects for products card
    {
        product: 'Wooden Cars',
        price: '$8.99',
        description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
        age: 'All Ages',
        measures: 'N/A',
        cardimg: 'images/car1.jpg',
        img1: 'images/car1a.jpg',
        img2: 'images/car2.jpg',
        img3: 'images/car3.jpg',
        img4: 'images/car4.jpg',
        modalID: 'modal2'
    },
    {
        product: 'Wooden Train Set',
        price: '$14.99',
        description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size with moving wheels and a fully ecological design.',
        age: '3+',
        measures: '(84cm L x 11cm H x 13cm W)',
        cardimg: 'images/train1.jpg',
        img1: 'images/train1.jpg',
        img2: 'images/train2.jpg',
        img3: 'images/train3.jpg',
        img4: 'images/train7.jpg',
        modalID: 'modal3'
    },
    {
        product: 'Wooden Airplane',
        price: '$9.99',
        description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. ',
        age: 'Toddlers',
        measures: '(3.5"H x 7"L x 7"W.)',
        cardimg: 'images/plane1.jpg',
        img1: 'images/plane1.jpg',
        img2: 'images/plane2.jpg',
        img3: 'images/plane3.jpg',
        img4: 'images/Plane4.png',
        modalID: 'modal4'
    },
    {
        product: 'Wooden Boat',
        price: '$8.99',
        description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety.',
        age: 'All Ages',
        measures: '(10.5"W x 3.5"H)',
        cardimg: 'images/boat1.png',
        img1: 'images/boat1.png',
        img2: 'images/boat2.png',
        img3: 'images/boat3.png', 
        img4: 'images/boat4.png',
        modalID: 'modal5'
    },
    {
        product: 'Wooden Block Set',
        price: '$17.99',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate',
        age: '3+',
        measures: '(13” L x 12” W x 2” H).',
        cardimg: 'images/Block1.png',
        img1: 'images/Block1.png',
        img2: 'images/block2.jpg',
        img3: 'images/block4.png',
        img4: 'images/block5.jpg',
        modalID: 'modal6'
    },
    {
        product: 'Wooden Sailboat',
        price: '$12.99',
        description: 'Sturdy enough to withstand years of hard play and then be passed on to the kids of the next generation. Each wooden toy is carefully handmade with all edges and corners rounded, and then hand sanded to a pleasant feeling satin smooth natural finish that the toddler can safely chew on.',
        age: '3+',
        measures: '(13” L x 12” W x 2” H).',
        cardimg: 'images/sailboat4.png',
        img1: 'images/sailboat4.webp',
        img2: 'images/sailboat1.webp',
        img3: 'images/sailboat2.webp',
        img4: 'images/sailboat3.webp',
        modalID: 'modal7'
    },
];

//function to generate the product cards 
function generateProductCards() {
    const productCardsContainer = document.getElementById('productCards');

    Products.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

        card.innerHTML = `
            <div class="carditem">
                <img src="${product.cardimg}" class="card-img-top cardimgborder img-fluid" alt="${product.product}">
                <div class="card-body text-center p-2">
                    <h5 class="card-title">${product.product}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="#" data-toggle="modal" data-target="#${product.modalID}"><button class="btn btn-secondary">Learn More</button></a>   
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="${product.modalID}" tabindex="-1" role="dialog" aria-labelledby="ModelLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-md-12 col-lg-10 text-center">
                                    <img id="mainPic${index}" class="mainPic" src="${product.img1}">
                                </div>
                                <div class="col-md-12 col-lg-2 text-center">
                                    <img class="smallpic activeBorder" id="smallpic${index}-1" src="${product.img1}">
                                    <img class="smallpic" id="smallpic${index}-2" src="${product.img2}">
                                    <img class="smallpic" id="smallpic${index}-3" src="${product.img3}">
                                    <img class="smallpic" id="smallpic${index}-4" src="${product.img4}">
                                </div>
                            </div>
                            <hr>
                            <div class="row">
                                <div class="col-12 p-3">
                                    <h4>${product.description}</h4>
                                    <ul>
                                    <li><h6>Age: ${product.age}</h6></li>
                                    <li><h6>Measures: ${product.measures}</h6></li>
                                    <li><h6>Price: ${product.price}</h6></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer" style="display: flex; justify-content: space-between;">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productCardsContainer.appendChild(card);
    });

    // Add event listeners for the modals
    Products.forEach((product, index) => {
        const mainImage = document.getElementById(`mainPic${index}`);
        const smallImages = document.querySelectorAll(`#${product.modalID} .smallpic`); //takes all id's with "smallpic*" and asigns it to smallImage
        const activeBorder = document.querySelector(`#${product.modalID} .activeBorder`);

        smallImages.forEach(smallImage => {
            smallImage.addEventListener('mouseenter', function () { //iterates through all smallimages to make the changes on hover.
                mainImage.src = smallImage.src;
                activeBorder.classList.add('no-border');
            });

            smallImage.addEventListener('mouseleave', function () {
                mainImage.src = product.img1;
                activeBorder.classList.remove('no-border');
            });
        });
    });
}

window.onload = generateProductCards;


function refresh() {
    location.reload();
}





// Function to calculate total price
function calculateTotalPrice() {
    // Get all checkboxes and their corresponding select elements
    const productRows = document.querySelectorAll('.order-form .row.mx-4.mb-3');

    // Define toy prices
    const toyPrices = {
        "Wooden Car $8.99": 8.99,
        "Wooden Train Set $14.99": 14.99,
        "Wooden Airplane $9.99": 9.99,
        "Wooden Boat $8.99": 8.99,
        "Wooden Block Set $17.99": 17.99,
        "Wooden Sailboat $12.99": 12.99
    };

    let totalPrice = 0;

    // Iterate over product rows to calculate total price
    productRows.forEach((row) => {
        const checkbox = row.querySelector('input[type="checkbox"]');
        const select = row.querySelector('select');

        if (checkbox && checkbox.checked && select) {
            const toyName = checkbox.nextElementSibling.textContent.trim();
            const quantity = parseInt(select.value) || 0;
            totalPrice += toyPrices[toyName] * quantity;
        }
    });

    // Display total price if the element with ID 'totalPrice' exists
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
    }
}

// Event listeners for checkboxes and selects
document.addEventListener('change', function(event) {
    if (event.target.matches('input[type="checkbox"]') || event.target.matches('select')) {
        calculateTotalPrice();
    }
});

// Initial calculation
calculateTotalPrice();

// js for reviews slide show
let slideIndex = 1;
showSlides(slideIndex);

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function setCurrentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (let slide of slides) {
    slide.style.display = "none";
  }

  for (let dot of dots) {
    dot.className = dot.className.replace(" active", "");
  }

  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}


