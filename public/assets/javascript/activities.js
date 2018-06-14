// When user clicks add-btn
$("#add-btn-act").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newActivity = {
      action_item: $("#action-item").val().trim(),
      jobLocation: $("#job-location").val().trim(),
      resume_file_submitted: $("#resume-url").val().trim(),
      due_date: $("#due-date").val().trim(),
      date_applied: $("#date-applied").val().trim(),
      interview_date: $("#interview-date").val().trim()
          };

          console.log(newActivity);
  
    // Send an AJAX POST-request with jQuery
    $.post("api/activities/new", newActivity)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#action-item").val("");
    $("#job-location").val("");
    $("#resume-url").val("");
    $("#due-date").val("");
    $("#date-applied").val("");
    $("#interview-date").val("");
      });
