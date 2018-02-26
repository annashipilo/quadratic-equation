module.exports = function solveEquation(equation) {

var number_arr = equation.match(/-?\s?\d+/g);

for(var i = 0; i < number_arr.length; i++){
  if(isNaN(number_arr[i])){
    var temp = number_arr[i].match(/\d+/);
    number_arr[i] = 0 - temp;
  }
}

var a = +number_arr[0];
var b = +number_arr[2];
var c = +number_arr[3];

var D = b*b - 4*a*c;

var result_one = Math.round((-b + Math.sqrt(D))/(2*a));
var result_two = Math.round((-b - Math.sqrt(D))/(2*a));

var result_arr = [];
result_arr.push(result_one,result_two);
console.log(result_arr);

for(var j = 0; j < result_arr.length; j++){
  if (result_arr[j] > result_arr[j+1]){
    var t = result_arr[j];
    result_arr[j] = result_arr[j+1];
    result_arr[j+1] = t;
  }
}
console.log('a', a,'b', b, 'b^2', b*b, 'c', c, '4*a*c', -4*a*c, 'd', D);

return result_arr;

}




