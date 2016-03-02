$(document).ready(function(){

  var guessLetters = $('#guesses');
  var newGame = $('#new_game');
  var turnSetting = $('#turns_settings');
  var turnElement = $('#turns');
  var letters = $('#letters');
  var turn_count;

  var words = ["hangman", "boo", "happy", "sad", "tgif", "friday", "beer"];

  newGame.on('click', function(){
     turn_count = parseInt(turnSetting.val());
     turnElement.html(turn_count);

     guessLetters.empty();
     letters.empty();

     generateGuesses();


     var word = getRandomWord();
     displayWordSpaces(word);

  });

  guessLetters.on('click', '.letter', function(){
      var element = $(this);

      if(turn_count === 0) {
          // Display Letters
          //addClass('missed')
          return
      }

      if(element.hasClass('selected')){
          return
      }

      element.addClass('selected');

      var selectedLetter = element.data('letter');
      var notFound = true;

      letters.find('.letter').each(function(){
          var aLetter = $(this);

         if( aLetter.data('letter') === selectedLetter ) {
             aLetter.html(selectedLetter);
             notFound = false;
         }
      });

      if(notFound){
         turnElement.html(--turn_count);
      }

  });


  function getRandomWord(){
      var index = Math.floor(Math.random() * words.length);
      return words[index];
  }


  function displayWordSpaces(word){
      for(var i = 0; i < word.length; i++) {
          var element = $('<span />');
          element.addClass('letter');
          element.data('letter', word[i]);
          element.html('&nbsp;');
          element.appendTo(letters);
      }
  }

  function generateGuesses(){
      for(var i=97; i <= 122; i++){
        var letter = String.fromCharCode(i);
        $('<span data-letter="'+letter+'">'+ letter + '</span>')
          .addClass('letter')
          .appendTo('#guesses');
      }
  }



});
