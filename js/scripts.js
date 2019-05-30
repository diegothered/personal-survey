$(document).ready(function() {
  $("#fav-things-form").submit(function(event) {
    var color = $("input#color").val();
    var food = $("input:radio[name=food]:checked").val();

    $(".color").text(color);
    $(".food").text(food);


    $("#your-favs").show();
    event.preventDefault();
  })
  $()







});
