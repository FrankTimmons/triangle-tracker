$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    event.preventDefault();
    const number1 = parseFloat($("#input1").val());
    const number2 = parseFloat($("#input2").val());
    const number3 = parseFloat($("#input3").val());
    let result;

    let randomColor = Math.floor(Math.random()*16777215).toString(16);

    if (!number1 || !number2 || !number3){
      alert("Please enter a value for each side");
    } else if (number1 === number2 && number2 === number3) {
      result = "Equilateral!";
      $(".triangleBoom1").toggle("explode").delay(5000).toggle("explode");
      $(".triangleBoom3").toggle("explode").delay(5000).toggle("explode");
      $(".btn").slideToggle().delay(5000).slideToggle();
    } else if ((number1 + number2) <= number3 || (number2 + number3) <= number1 || (number1 + number3) <= number2) {
      result = "Not a triangle!";
      $(".triangleBoom1").toggle("explode").delay(5000).toggle("explode");
      $(".triangleBoom2").toggle("explode").delay(5000).toggle("explode");
      $(".triangleBoom3").toggle("explode").delay(5000).toggle("explode");
      $("#notTriangle").delay(1000).slideToggle().delay(3500).slideToggle();
      $(".btn").slideToggle().delay(5000).slideToggle();
    }else if (number1 === number2 || number1 === number3 || number2 === number3 ) {
      result = "Isosceles!";
      $(".triangleBoom2").toggle("explode").delay(5000).toggle("explode");
      $(".triangleBoom3").toggle("explode").delay(5000).toggle("explode");
      $(".btn").slideToggle().delay(5000).slideToggle();
    } else if (number1 !== number2 && number2 !== number3 && number1 !== number3) {
      result = "Scalene";
      $(".triangleBoom1").toggle("explode").delay(5000).toggle("explode");
      $(".triangleBoom2").toggle("explode").delay(5000).toggle("explode");
      $(".btn").slideToggle().delay(5000).slideToggle();
    }
    $("#output").fadeIn().text(result).delay(5000).fadeOut();
    $("body").css("background-color", "#"+randomColor);
  });
});