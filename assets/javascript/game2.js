
function setup () {

    var numberToGuess = Math.floor(Math.random() * 120) + 19;

    var numbersOnCrystals = [];

    var counter = 0;

    var numbers = [10, 5, 3, 7];

    function shuffle(a) {
        var j, x, i;
        for (i = a.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = a[i - 1];
            a[i - 1] = a[j];
            a[j] = x;
        }
    }   

    shuffle(numbers);
    console.log(numbers);
  }

  function loadImages () {

    $('#number').text(numberToGuess);

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');

      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src', 'http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg');

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }

    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));

      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
        alert('You won!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });

    }


  $( document ).ready(function() {
    loadImages();
    setup ();

  }
