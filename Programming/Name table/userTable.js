$( document ).ready(function() {
  var userTable = $('#users tbody');  //$('#users').find('tbody')

  var nameField = $('#name');
  var emailField = $('#email');

  var add_btn = $('#add');
  var clearAll_btn = $('#clearAll');

//STEP 5 Finish removing the line when the remove button is clicked
userTable.on('click', 'button.remove', function() { //look up event delegation!!! on internet
  var btn = $(this); //"this" allows us to begin walking up to the parent (the tr line we want to remove when we hit the remove button)
  btn.parents("tr").remove(); //"this" tends to only be used with event listeners in javascript
});

//STEP 6 Check to see if the email is valid (the else/if statement)
add_btn.on('click', function(){
  var name = nameField.val();
  var email = emailField.val();

  if(email.match(/^.+?\@.+\..+?$/)) {
    emailField.removeClass('invalid');

    addUser({
      name: name,
      email: email
    });

  //addUser({  //rewritten above!!
      //name: nameField.val(), //this means it will "get" something for us
      //email: emailField.val()
  //});

      //STEP 4 Make certain that when you click the add button that the cell is empty
      nameField.val(""); //this now means that it will pass in an empty string
      emailField.val("");

  } else {
    emailField.addClass('invalid');
  }

});
  //STEP 3 an empty row gets created
  function addUser(user) {
    //console.log(user); add a user and test this....then need to add rows when you hit the add button
      var userRow = $(
        "<tr>" +
            "<td>" + user.name + "</td>" +
            "<td>" + user.email + "</td>" +
            "<td><button class='remove btn btn-primary btn-xs'>remove</button></td>" +
          "</tr>");
      userTable.append(userRow);

  }

  //STEP 2 - next, make dummy data on the table to play with Line #26 in html
  clearAll_btn.on('click', function(){
      userTable.empty();
  });

});
