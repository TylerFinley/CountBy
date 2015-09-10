var countBy = function(endBy,countTo) {

  var outputs = [];
  var number = 0;

  while (number < endBy) {
      number+= countTo;
      outputs.push(number);
  }
    return outputs;



};

$(document).ready(function() {
  $("form#countby").submit(function(event) {
    var endBy = parseInt($("input#endBy").val());
    var countTo = parseInt($("input#countTo").val());
    var result = countBy(endBy,countTo);

    $("#count").text(result);
    $("#result").show();

    event.preventDefault();

  });
});
