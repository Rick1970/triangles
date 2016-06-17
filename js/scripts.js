$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var num1 = parseInt($("#add1").val());
    var num2 = parseInt($("#add2").val());
    var num3 = parseInt($)"#add3").val());



    $("#outputAdd").text(result);
  });
});
