const contagem = require("../contagem");

test(" 1 a 10 ", () => {


    expect(contagem(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);


});

test(" contagem inversa ", () => {


    expect(contagem(5, 1)).toEqual([]);


});

