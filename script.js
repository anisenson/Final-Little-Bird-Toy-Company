



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







