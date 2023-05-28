function ordenacaoNumeros(Arr){
    if(Arr.length <= 1){
      return Arr;
    }
  
    const pivot = Arr[Arr.length - 1];
    const esquerdaArr = [];
    const direitaArr = [];
  
    for(let i=0; i < Arr.length-1;i++){
      Arr[i] < pivot ? esquerdaArr.push(Arr[i]) :  direitaArr.push(Arr[i])
    }
  
    return [...ordenacaoNumeros(esquerdaArr) ,pivot,...ordenacaoNumeros(direitaArr)];
  
  }

  module.exports = ordenacaoNumeros;