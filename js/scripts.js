var countBy = function(endBy,countTo) {

  var outputs = [];
  var number = 0;

  while (number < endBy) {
      number+= countTo;
      outputs.push(number);
  }
    return outputs;



};
