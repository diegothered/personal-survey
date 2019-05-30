$(document).ready(function() {
  $("#fav-things-form").submit(function(event) {
    var color = $("input#color").val();
    var food = $("input#food").val();
    var animal = $("input#animal").val();

    $(".color").text(color);
    $(".food").text(food);
    $(".animal").text(animal);

    $("#your-favs").show();

    event.preventDefault();

  });
});
