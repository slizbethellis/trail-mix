$(function() {
  $("#advent-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newAdvent = {
      adventure_name: $("#adventure_name").val().trim(),
      adventure_verbiage1: $("#adventure_verbiage1").val().trim(),
      adventure_verbiage2: $("#adventure_verbiage2").val().trim(),
      adventure_verbiage3: $("#adventure_verbiage3").val().trim(),
      adventure_verbiage4: $("#adventure_verbiage4").val().trim(),
      adventure_verbiage5: $("#adventure_verbiage5").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/admin", {
      type: "POST",
      data: newAdvent
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});