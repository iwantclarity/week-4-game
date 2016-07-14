
  $( document ).ready(function() {

    var numberToGuess = 0; //First set the number for the user to guess

    var numbersOnCrystals = []; //Define the array to store the numbers for the crystals

    var counter = 0; //Set the counter that will be added to by the user

        
        //The function makes sure that at the start and at the end of games the numbers are reset
        function NumberReset() {   

        numberToGuess = 0;

        numbersOnCrystals = [];        

        for (i=0; i < 4; i++) {
          var numberToArray = Math.floor(Math.random() * 12) + 1;
          numbersOnCrystals.push(numberToArray);
        }

        numberToGuess = Math.floor(Math.random() * 120) + 19; 

        $('#number').text(numberToGuess);

        counter = 0;


        $('#yourNumber').text(counter);

        }

    NumberReset();

    console.log(numbersOnCrystals);

 

    var picArray = ["assets/images/pic1.jpg", "assets/images/pic2.jpg", "assets/images/pic3.jpg","assets/images/pic4.jpg"];

    for (var i=0; i< numbersOnCrystals.length; i++){

      var imageCrystal = $('<img>');

      imageCrystal.attr('data-num', numbersOnCrystals[i]);

      imageCrystal.attr('src', picArray[i]);

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }

    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));

      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
        alert('You won!!!!');
        NumberReset();


      }else if( counter > numberToGuess){
        alert('You lost!');
        NumberReset();

      }
    });

  });
