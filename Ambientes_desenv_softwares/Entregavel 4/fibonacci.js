
function GenerateFibonacci(number){
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
      fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
    }

// function fibonacci(n) {
//     return n < 1 ? 0
//          : n <= 2 ? 1
//          : fibonacci(n - 1) + fibonacci(n - 2)
//  }
 
// console.log(fibonacci(4))

module.exports =GenerateFibonacci; // generate