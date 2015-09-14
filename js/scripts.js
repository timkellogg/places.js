$(document).ready(function() {

  // get the inputs from the form

  $('form').submit(function(event) {
    event.preventDefault();

    var inputtedName     = $("input#new-name").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedTime     = $("input#new-time").val();
    var inputtedNote     = $("input#new-note").val();

    var newPlace = { name: inputtedName, location: inputtedLocation, time: inputtedTime,
                     note: inputtedNote }

    $("ul#places").append("<li><span class='place'>" + newPlace.name + ", " + newPlace.location +
                          ", " + newPlace.time + ", " + newPlace.note + "</span></li>")

    $("input#new-name").val("");
    $("input#new-location").val("");
    $("input#new-time").val("");
    $("input#new-note").val("");

    $(".place").last().click(function() {
      $("#show-place").show();
      $(".place-title").text(newPlace.name);
      $(".new-name").text(newPlace.name);
      $(".new-location").text(newPlace.location);
      $(".new-time").text(newPlace.time);
      $(".new-note").text(newPlace.note);
      $(".new-landmark").text(newPlace.landmark);
    });
  });
});
