
// The code in add.js handles what happens when the user clicks the "Add " button.

// When user clicks add-btn
$("#add-btn-job").on("click", function(event) {
    event.preventDefault();
  
    // Make a newBook object
    var newJob = {
      jobTitle: $("#job-title").val().trim(),
      co_name: $("#company-name").val().trim(),
      jobLocation: $("#job-location").val().trim(),
      jobPriority: $("#job-priority").val().trim(),
      resume_file_submitted: $("#resume-url").val().trim(),
      jobPostingSource: $("#job-source").val().trim(),
      skillsRequired: $("#skills-required").val().trim()
    };
  
    // Send an AJAX POST-request with jQuery
    $.post("api/jobOpenings/new", newJob)
      // On success, run the following code
      .then(function(data) {
        // Log the data we found
        console.log(data);
      });
  
    // Empty each input box by replacing the value with an empty string
    $("#job-title").val("");
    $("#company-name").val("");
    $("#job-location").val("");
    $("#job-priority").val("");
    $("#resume-url").val("");
    $("#job-source").val("");
    $("#skills-required").val("");
  
  });

  // function --> create/return one single html item
  // make call to get all contacts
  // forEach contact return make a function to use that func
  // 