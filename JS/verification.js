$(document).ready(function() {
    //Variables to select some DOM elements
    $code = $('#code-input');
    $resetBtn = $('#reset-button');
    $nextBtn = $('#next-button');
   
    //Variables to validate code
    var validateCode = false;
    var newCode = '';

    //Function to generate a random code - the same used in sign up view 
    function codeGenerator() {
        var digitOne = Math.floor(Math.random() * 9);
        var digitTwo = Math.floor(Math.random() * 9);
        var digitThree = Math.floor(Math.random() * 9);
        var randomCode = '' + digitOne + digitTwo + digitThree;
        return randomCode;
    }

    // Button event that generates a new random code
    $resetBtn.on('click', function(event) {
      newCode = codeGenerator();
      alert('LAB-' + newCode);
      event.preventDefault();
    });

    // Code input event
    $code.on('input', function() {
      // Evaluates if the code entered is the same as the one provided
      if (($(this).val() === localStorage.keyphone) || ($(this).val() === newCode)) {
        enabledButton();
        validateCode = true;
      }
      else {
        // Cleans the input
        $code.val = ' ';
      }
    });

    
    $nextBtn.on('click', function(event) {
      // Evaluates if it is true
      if (validateCode) {
        window.location.href = 'signupform.html';
      } else {
        disabledButton();
      }
    });
  
    // Function that enables the button
    function enabledButton() {
      $nextBtn.prop('disabled', false);
      $nextBtn.addClass('good-btn');
    }
    // Function that disables the button
    function disabledButton() {
      $nextBtn.prop('disabled', true);
    }
  });