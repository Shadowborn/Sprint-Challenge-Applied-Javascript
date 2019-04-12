class Carousel {
    constructor(slide) {
        this.slide = slide;
        this.slide.addEventListener('click', () => this.buttonTab());
    }

    buttonTab(){

        // Select all elements with the .tab class on them
        const carousel = document.querySelectorAll('.carousel');
        
        // Iterate through the NodeList removing the .active-tab class from each element
        carousel.forEach(newTabCard => newTabCard.classList.remove('carouselImg'));
    
        // Select all of the elements with the .card class on them
        const cards = document.querySelectorAll('.carousel img');
    
        // Iterate through the NodeList setting the display style each one to 'none'
        cards.forEach(newTabCard => newTabCard.style.display = 'none');
        
        // Add a class of ".active-tab" to this.tabElement
        this.tabElement.classList.add('active-tab');
      
        // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
        this.cards.forEach(card => card.selectCard());
      }
}

class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
      this.cardElement = cardElement;
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
      this.cardElement.style.display = 'flex';
    }
  
  }



let carousel = document.querySelector('.carousel');
let carouselLeft = document.querySelector('.left-button');
let carouselRight = document.querySelector('.right-button');
let carouselImages = document.querySelector('.carousel img');

carouselImages.forEach(function (button) {
    return new Carousel(button);
});

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/