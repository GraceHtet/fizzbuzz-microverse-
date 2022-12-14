module.exports = function () {
  // write your code here

  function fizzBuzz (arr){

      if(arr % 3 === 0 && arr % 5 === 0 ){
        int.push("FizzBuzz");
      }else if(arr % 3 === 0){
        int.push("Fizz");
      }else if(arr % 5 === 0 ){
        int.push("Buzz");
      }else{
        int.push(arr);
      }

  }

  let int = [];

  for(let i=1; i< 101; i++){

    fizzBuzz(i);

  }

  return int;

}
