
// When user clicks add-btn
$("#add-btn").on("click", function(event) {
    event.preventDefault();
  
    // Make a newCompany object
    var newCompany = {
      coName: $("#coName").val().trim(),
      coJobUrl: $("#coJobUrl").val().trim(),
      coPriority: $("#coPriority").val().trim(),
          };
  
    // Send an AJAX POST-request with jQuery
    $.post("/api/new", newCompany)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#coName").val("");
    $("#coJobUrl").val("");
    $("#coPriority").val("");
      });
  