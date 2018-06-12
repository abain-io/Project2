// The code in add.js handles what happens when the user clicks the "Add " button.

// When user clicks add-btn
$("#new").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newContact = {
      first_name: $("#firstName").val().trim(),
      last_name: $("#lastName").val().trim(),
      email: $("#email").val().trim(),
      phone_number: $("#phoneNumber").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("api/new", newContact)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#phoneNumber").val("");
  
  });
  