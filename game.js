
function MemoryGame(){
    this.cards = [];
    this.imageArray = [
        'images/barb.png',
        'images/archer.png',
        'images/hog.png',
        'images/icewiz.png',
        'images/giant.png',
        'images/gob.png',
        'images/prince.png',
        'images/bomber.png',
        'images/pekka.png',
    ];
    this.initGame = function () {
        var images = this.imageArray.concat(this.imageArray);
        this.cards = this.createCards(images)
    };
    this.createCards = function(images){
        var cardArray = [];
        for ( var i = 0; i < images.length; i++){
            var newCard = new Card(images[i], this);
            var cardDomElement = newCard.render();
            $(".game-container").append(cardDomElement);
            cardArray.push(newCard);
        }
        return cardArray;
    }
}







// //Initiate on page load and instantiate game and responsive objects

// function Game(){
//     this.images= [];
//     this.initizialize = function(){
//         this.createBoard(this.shuffleCards)
//     }
//     this.imageArray =[
//         'images/barb.png', 
//         'images/archer.png',
//         'images/hog.png', 
//         'images/icewiz.png',
//         'images/giant.png', 
//         'images/gob.png', 
//         'images/prince.png', 
//         'images/bomber.png',
//         'images/pekka.png',
//     ];

//     this.shuffleCards = function (imageArray) {
//         var imageArray = imageArray.concat(imageArray);
//         var currentIndex = imageArray.length, temp, randomIndex;
//         while (0 !== currentIndex) {
//             randomIndex = Math.floor(Math.random() * currentIndex);
//             currentIndex -= 1;
//             temp = imageList[currentIndex];
//             imageArray[currentIndex] = imageArray[randomIndex];
//             imageArray[randomIndex] = temp;
//         }
//         return imageArray;
//     };

//     this.createBoard = function (imageArray) {
//         for ( var i = 0; i < imageArray.length; i++){
//             var card = new Card(this, imageArray[i]);
//             var cardElement = card.render();
//             $('.game-container').append(cardElement);
//             this.images.push(card);
//         }
//         return this.cardList;
//         }
//     }
// }

// function Card(parentObj, frontImage) {
//     this.parent = parentObj;
//     this.frontImage = frontImage;

//     //Creates the DOM elements for the card deck and is instantiated in the Game object
//     this.render = function () {
//         var card = $('<div>', {
//             class: 'card'
//         });
//         var flipContainer = $('<div>', {
//             class: 'flip-container'
//         });
//         var front = $('<div>', {
//             class: 'front',
//             css: {
//                 backgroundImage: 'url(' + this.frontImage + ')',
//             }
//         });
//         var back = $('<div>', {
//             class: 'back'
//         });
//         card.append(flipContainer);
//         flipContainer.append(front, back);
//         card.click(this.handleClick.bind(this));
//         this.flipContainer = flipContainer;
//         this.card = card;
//         return card;
//     };

//     //Handles the cards clicked and updates the stats
//     this.handleClick = function () {
//         this.parent.handleCardClick(this);
//         this.parent.updateStats();
//     };

//     //Hides the back of the card, and adds the flip class for animation
//     this.revealSelf = function () {
//         this.flipContainer.toggleClass('flipped');
//         this.card.toggleClass('revealed');
//     };

//     //Shows the back of the card and removes the flip animation 
//     this.hideSelf = function () {
//         this.flipContainer.removeClass('flipped');
//         this.card.removeClass('revealed');
//     };

//     //Targets the front image
//     this.getID = function () {
//         return this.frontImage;
//     };
// }
