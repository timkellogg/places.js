$(document).ready(function() {
  $("#add-landmark").click(function() {
    $("#new-landmark").append(
      '<div class="form-group">'+
        '<label for="new-landmark">Landmark</label>'+
        '<input type="text" required class="form-control" id="new-landmark">'+
      '</div>'
      );
  });

  $('form').submit(function(event) {
    event.preventDefault();
    var inputtedName     = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedTime     = $("input#new-time").val();
    var inputtedNote     = $("input#new-note").val();
    var newPlace = { name: inputtedName, location: inputtedLocation, time: inputtedTime,
                     note: inputtedNote, landmarks: [] }

    $(".new-landmark").each(function() {
      var inputtedLandmark = $(this).find("input.new-landmark-name").val();
      var newLandmark = { name: inputtedLandmark };
      newPlace.landmarks.push(newLandmark);
    });

    $("ul#places").append("<li><span class='place'>" + newPlace.name + "</span></li>")
    $("input#new-name").val("");
    $("input#new-location").val("");
    $("input#new-time").val("");
    $("input#new-note").val("");
    $("ul#landmarks").text("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $(".place-title").text(newPlace.name);
      $(".new-name").text(newPlace.name);
      $(".new-location").text(newPlace.location);
      $(".new-time").text(newPlace.time);
      $(".new-note").text(newPlace.note);
      newPlace.landmarks.forEach(function(landmark) {
        console.log(landmark);
        console.log(landmark.name);
        $("ul#landmarks").append("<li>" + landmark.name + "</li>");
      });
    });
  });
});
