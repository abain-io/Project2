// The code in add.js handles what happens when the user clicks the "Add " button.

// When user clicks add-btn
$("#add-btn-con").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newContact = {
      first_name: $("#firstName").val().trim(),
      last_name: $("#lastName").val().trim(),
      email: $("#email-input").val().trim(),
      phone_number: $("#contact-phone").val().trim(),
      work_phone: $("#work-phone").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("api/contacts/new", newContact)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email-input").val("");
    $("#contact-phone").val("");
    $("#work-phone").val("");
  
  });

  // function --> create/return one single html item
  // make call to get all contacts
  // forEach contact return make a function to use that func
  // 