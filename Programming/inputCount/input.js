$(document).ready(function(){

  var maxChars = 140;
  var inputBox = $('#textbox');
  var count = $('#count');

  inputBox.on('keyup', checkAndUpdateCount);

  checkAndUpdateCount();

  function checkAndUpdateCount(event){
    var currentText = inputBox.val();
    var remaining = maxChars - currentText.length;



    // count.text("update") will update count box
    if(remaining>=0) {
    count.text(remaining); //this allows the count to stop at 0 and not go to -1
  }

    // count.addClass('warn') will add a color warning via css.
    if(remaining <= 20) {
      count.addClass('warn');
  } else {
      count.removeClass('warn');
  }

    // we need to truncate text if needed and update inputBox.val(truncated_string);
    if(currentText.length > 140) {
      inputBox.val(currentText.substr(0,140));

  }

}
});


//OR

if(remaining >20) {
  count.removeClass('warn');
} else {
  count.addClass('warn');
}

if(remaining >=0) {
  count.text(remaining);
} else {
  count.text(0);
  var truncate = currentText.substring(0, maxChars-1);
  inputBox.val(truncate);
}
}

);
