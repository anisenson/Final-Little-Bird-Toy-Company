// Modal picture js //
document.addEventListener('DOMContentLoaded', function() {
    const mainImage = document.getElementById('mainPic');
    const smallImages = document.querySelectorAll('.smallpic'); //takes all id's with "smallpic*" and asigns it to smallImage
  
    smallImages.forEach(smallImage => { //iterates through all smallimages to make the changes on hover.
        smallImage.addEventListener('mouseenter', function() {
            mainImage.src = smallImage.src;
        });
  
        smallImage.addEventListener('mouseleave', function() {
            mainImage.src = 'images/car1.jpg'; 
        });
    });
  });
  
  
  // Product Cards
  const Products = [
      {
          product: 'Cars',
          price: '$2.99',
          description: 'these cars have a wonderful description',
          age: '2-3 years old',
          measures: '4x by 10x',
          cardimg: 'images/car1.jpg',
          img1: 'images/car1.jpg',
          img2: 'images/car2.jpg',
          img3: 'images/car3.jpg',
          img4: 'images/car4.jpg',
          modalID: 'modal2'
      },
      {
          product: '#',
          price: '#',
          description: '#',
          age: '#',
          measures: '#',
          cardimg: '',
          img1: '#',
          img2: '#',
          img3: '#',
          img4: '#',
          modalID: 'modal3'
      },    
      {
          product: '#',
          price: '#',
          description: '#',
          age: '#',
          measures: '#',
          cardimg: '',
          img1: '#',
          img2: '#',
          img3: '#',
          img4: '#',
          modalID: 'modal4'
      },
  ]
  
  
  function generateproductCards() {
      const productCardsContainer = document.getElementById('productCards');
  
      Products.forEach(product => {
          const card = document.createElement('div');
          card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');
  
          card.innerHTML =
              `
              <div class="carditem">
                  <img src="${product.cardimg}" class="card-img-top cardimgborder" alt=" ">
                  <div class="card-body text-center">
                      <h5 class="card-title">${product.product}</h5>
                      <p class="card-text">${product.price}</p>
                      <a href="#" data-toggle="modal" data-target="#${product.modalID}">Click Here</a>
                  </div>
              </div>
              <!-- Modal -->
              <div class="modal fade" id="${product.modalID}" tabindex="-1" role="dialog" aria-labelledby="ModelLabel" aria-hidden="true">
                  <div class="modal-dialog modal-dialog-centered modal-lg">
                      <div class="modal-content">
                          <div class="modal-body">
                              <div class="row">
                                  <div class="col-10">
                                      <img id="mainPic" src="${product.img1}">
                                  </div>
                                  <div class="col-2">
                                      <img class="smallpic" src="${product.img2}">
                                      <img class="smallpic" src="${product.img3}">
                                      <img class="smallpic" src="${product.img4}">
                                  </div>    
                                  
                                  <div class="col-12">
                                      <h3>${product.description}</h3>
                                      <h5>${product.age}</h5>
                                      <h6>${product.measures}</h6>
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
  }
  
  window.onload = generateproductCards;
  