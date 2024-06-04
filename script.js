const Products = [
    {
        product: 'Wooden Cars',
        price: '$2.99',
        description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
        age: 'All Ages',
        measures: 'N/A',
        cardimg: 'images/car1.jpg',
        img1: 'images/car1.jpg',
        img2: 'images/car2.jpg',
        img3: 'images/car3.jpg',
        img4: 'images/car4.jpg',
        modalID: 'modal2'
    },
    {
        product: 'Wooden Train Set',
        price: '$10.99',
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
        price: '$4.99',
        description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. ',
        age: 'Toddlers',
        measures: '(3.5"H x 7"L x 7"W.)',
        cardimg: 'images/plane1.jpg',
        img1: 'images/plane1.jpg',
        img2: 'images/plane2.jpg',
        img3: 'images/plane3.jpg',
        img4: 'images/plane4.jpg',
        modalID: 'modal4'
    },
    {
        product: 'Wooden Boat',
        price: '$3.99',
        description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety.',
        age: 'All Ages',
        measures: '(10.5"W x 3.5"H)',
        cardimg: 'images/boat1.jpg',
        img1: 'images/boat2.jpg',
        img2: 'images/boat3.jpg',
        img3: 'images/boat4.jpg', 
        img4: 'images/boat5.jpg',
        modalID: 'modal5'
    },
    {
        product: 'Wooden Block Set',
        price: '$12.99',
        description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate',
        age: '3+',
        measures: '(13” L x 12” W x 2” H).',
        cardimg: 'images/Block1.png',
        img1: 'images/block1.jpg',
        img2: 'images/block2.jpg',
        img3: 'images/block4.jpg',
        img4: 'images/block5.jpg',
        modalID: 'modal6'
    },
];

function generateProductCards() {
    const productCardsContainer = document.getElementById('productCards');

    Products.forEach((product, index) => {
        const card = document.createElement('div');
        card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

        card.innerHTML = `
            <div class="carditem">
                <img src="${product.cardimg}" class="card-img-top cardimgborder" alt="${product.product}">
                <div class="card-body text-center">
                    <h5 class="card-title">${product.product}</h5>
                    <p class="card-text">${product.price}</p>
                    <a href="#" data-toggle="modal" data-target="#${product.modalID}">Learn More</a>
                </div>
            </div>
            <!-- Modal -->
            <div class="modal fade" id="${product.modalID}" tabindex="-1" role="dialog" aria-labelledby="ModelLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-sm-12 col-md-10 ">
                                    <img id="mainPic${index}" class="mainPic" src="${product.img1}">
                                </div>
                                <div class="col-sm-12 col-md-2 ">
                                    <img class="smallpic activeBorder" id="smallpic${index}-1" src="${product.img1}">
                                    <img class="smallpic" id="smallpic${index}-1" src="${product.img2}">
                                    <img class="smallpic" id="smallpic${index}-2" src="${product.img3}">
                                    <img class="smallpic" id="smallpic${index}-3" src="${product.img4}">
                                </div>    
                                <div class="col-12">
                                    <h4><br>${product.description}</h4>
                                    <h5>Age: ${product.age}</h5>
                                    <h6>Measures: ${product.measures}</h6>
                                    <h6>Price: ${product.price}</h6>
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

        smallImages.forEach(smallImage => {
            smallImage.addEventListener('mouseenter', function () { //iterates through all smallimages to make the changes on hover.
                mainImage.src = smallImage.src;
            });

            smallImage.addEventListener('mouseleave', function () {
                mainImage.src = product.img1;
            });
        });
    });
}

window.onload = generateProductCards;
