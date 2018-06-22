$(document).ready(function () {
  //Variable declarations to select DOM elements
  var $flagSelect = $('li');
  var $phone = $('#phone-input');
  var $next = $('#next-button');

  // Creating an event for each flag
  $flagSelect.on('click', function () {
    var $valueSelect = $(this).data('code');
    //console.log($valueSelect);//
    //A condition that if it is true it will change the area code depending on the country selected
    if ($valueSelect === 'ARG') {
      $('<img src="../assets/images/argentina-flag-icon-256.png" class="country-flag">');
      $phone.val('+54');
    } else if ($valueSelect === 'GT') {
      $('<img src="../assets/images/guatemala-flag-icon-256.png" class="country-flag">');
      $phone.val('+502');
    } else if ($valueSelect === 'MEX') {
      $('<img src="../assets/images/mexFlag.png" class="country-flag">');
      $phone.val('+52');
    } else if ($valueSelect === 'UK') {
      $('<img src="../assets/images/united-kingdom-flag-icon-256.png" class="img-country">');
      $phone.val('+44');
    }
  });

  // Event to verify if the phone number has 10 digits / phone input
  $phone.on('input', function (event) {
    var inputValue = $(this).val();
    if (inputValue.length === 11) { //It's eleven instead of 10 because of the plus symbol
      enabledButton();
    } else {
      disabledButton();
    }
  });

  // Event on the next button / alert with a code and next view
  $next.on('click', function (event) {
    // The default action of the event is canceled
    event.preventDefault();
    // Variable to create a random code for the user
    var code = codeGenerator();
    //Sweet alert didn't work so I added a regular alert to show the code msg
    alert('Tu código es: LAB-' + code);
    //swal("Your code is:", "LAB"+ code);
    //Keeps the code data and the input value
    localStorage.keyphone = code;
    localStorage.number = $phone.val();
    //Takes the user to the next view
    window.location.href = 'verification.html';
  });


  function doCheck() {
    var allFilled = true;
    $('input[type=text]').each(function () {
      if ($(this).val() == '') {
        allFilled = false;
        return false;
      }
    });
    $('input[type=submit]').prop('disabled', !allFilled);
  }

  $(document).ready(function () {
    $('input[type=text]').keyup(doCheck).focusout(doCheck);
  });

  // Function to enable the "next button"
  function enabledButton() {
    $next.prop('disabled', false);
  }

  // Function to disable the "next button"
  function disabledButton() {
    $next.prop('disabled', true);
  }

  //Second try to disable/enable the next button.
  // $('#phone-input').toggle(
  //   function()
  //   {
  //     $('#next-button').attr("disabled");
  //   },
  //   function()
  //   {
  //     $('#next-button').removeAttr("disabled")
  //   });




//Function to generate a random code 
function codeGenerator() {
  var digitOne = Math.floor(Math.random() * 9);
  var digitTwo = Math.floor(Math.random() * 9);
  var digitThree = Math.floor(Math.random() * 9);
  var randomCode = '' + digitOne + digitTwo + digitThree;
  return randomCode;
}