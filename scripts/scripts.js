$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var iPerson1 = $("input#person1").val();
    var iPerson2 = $("input#person2").val();
    var iAnimal = $("input#animal").val();
    var iExclamation = $("input#exclamation").val();
    var iVerb = $("input#verb").val();
    var iNoun = $("input#noun").val();
    
    $(".person1").text(iPerson1);
    $(".person2").text(iPerson2);
    $(".animal").text(iAnimal);
    $(".exclamation").text(iExclamation);
    $(".verb").text(iVerb);
    $(".noun").text(iNoun);
    
    $("#story").show();
    
    event.preventDefault();
  });
});

$(document).ready(function() {
  var x = 0;
  $("#bg-switch").on('click', function() {
    if(x == 0) {
      $("body").removeClass().addClass("bg-dark");
      $("#bg-switch").text("Light Background");
      $("button").removeClass("btn-dark").addClass("btn-light");
      x = 1;
    } else {
      $("body").removeClass().addClass("bg-light");
      $("#bg-switch").text("Dark Background");
      $("button").removeClass("btn-light").addClass("btn-dark");
      x = 0;
    }
  });
});