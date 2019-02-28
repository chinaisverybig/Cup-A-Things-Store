'use strict';

var addToCart = document.querySelector(".addToCartButton");

addToCart.addEventListener("click",
  function() {
    document.querySelector(".addToCartButton").innerHTML = "Noodle Added to Cart!";
  }
);