

function numeroPrimo(num) {
    for (var divisor = 2; divisor < num; divisor++) 
    if (num % divisor == 0) return false;
    return true;
}

module.exports = numeroPrimo;