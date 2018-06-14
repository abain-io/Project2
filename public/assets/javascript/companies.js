
// When user clicks add-btn
$("#add-btn-com").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newCompany = {
      co_name: $("#company-name").val().trim(),
      co_url: $("#job-url").val().trim(),
      co_email: $("#company-email").val().trim(),
      co_phone: $("#company-phone").val().trim(),
      co_address: $("#company-address").val().trim(),
      co_city: $("#company-city").val().trim(),
      co_state: $("#company-state").val().trim(),
      priority: $("#priority").val().trim()
      userId: 
          };

          console.log(newCompany);
  
    // Send an AJAX POST-request with jQuery
    $.post("api/companies/new", newCompany)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#company-name").val("");
    $("#job-url").val("");
    $("#company-email").val("");
    $("#company-phone").val("");
    $("#company-address").val("");
    $("#company-city").val("");
    $("#company-state").val("");
    $("#company-priority").val("");
      });
