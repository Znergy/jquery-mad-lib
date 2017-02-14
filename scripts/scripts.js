$(document).ready(function() {
  $(".btn").click(function() {
    var iPerson1 = $("#person1").val;
    var iPerson2 = $("#person2").val;
    var iAnimal = $("#animal").val;
    var iExclamation = $("#exclamation").val;
    var iVerb = $("#verb").val;
    var iNoun = $("#noun").val;
    
    $(".person1").text(iPerson1);
    $(".person2").text(iPerson2);
    $(".animal").text(iAnimal);
    $(".exclamation").text(iExclamation);
    $(".verb").text(iVerb);
    $(".noun").text(iNoun);
  });
});