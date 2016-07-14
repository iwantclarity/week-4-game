$(document).ready(function() {

    var numberToGuess = 0; //First set the number for the user to guess

    var numbersOnCrystals = []; //Define the array to store the numbers for the crystals

    var counter = 0; //Set the counter that will be added to by the user

    //Displays the 4 images
    var picArray = ["assets/images/pic1.jpg", "assets/images/pic2.jpg", "assets/images/pic3.jpg", "assets/images/pic4.jpg"];

    //The function makes sure that at the start and at the end of games the numbers are reset
    function NumberReset() {

        numberToGuess = 0;  //Make sure number to guess is reset

        numbersOnCrystals = []; //Make sure array is empty

        //Creates 4 random numbers between 1 - 12 and adds them to the array
        for (i = 0; i < 4; i++) {
            var numberToArray = Math.floor(Math.random() * 12) + 1;
            numbersOnCrystals.push(numberToArray);
        }
        //Creates a number that the user has to guess
        numberToGuess = Math.floor(Math.random() * 120) + 19;

        //Puts that number that the user needs to guess on the page in html
        $('#number').text(numberToGuess);

        counter = 0; // Resets numeber

        $('#yourNumber').text(counter); //Set that number to zero

    }

    //Runs function on start of page to begin the game.
    NumberReset();

    //Used to check if the array is updating
    // console.log(numbersOnCrystals);
    
    //Prints the image with the necessary tags and data num
    for (var i = 0; i < numbersOnCrystals.length; i++) {

        var imageCrystal = $('<img>');

        imageCrystal.attr('data-num', numbersOnCrystals[i]);

        imageCrystal.attr('src', picArray[i]);

        imageCrystal.attr('alt', 'crystals');

        imageCrystal.addClass('crystalImage');

        $('#crystals').append(imageCrystal);
    }


    //Register clicks and adds num from data num to counter
    $('.crystalImage').on('click', function() {
        counter = counter + parseInt($(this).data('num'));

        $('#yourNumber').text(counter);


        //Display if you win
        if (counter == numberToGuess) {
            alert('You won!!!!');
            NumberReset();

        //Display if you lose    
        } else if (counter > numberToGuess) {
            alert('You lost!');
            NumberReset();

        }
    });

});