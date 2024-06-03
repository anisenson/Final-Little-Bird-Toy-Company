



// Modal picture js //

document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('mainPic');
  const smallImages = document.querySelectorAll('.smallpic');

  smallImages.forEach(smallImage => {
      smallImage.addEventListener('mouseenter', function() {
          mainImage.src = smallImage.src;
      });

      smallImage.addEventListener('mouseleave', function() {
          mainImage.src = 'images/car1.jpg'; 
      });
  });
});







