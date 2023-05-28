
function MDC(a,b){
  
    for(let i=b;i>1;i--){
      
      if(a%i == 0 && b%i==0){
        return i;
      }
    }
    
    
  }

module.exports = MDC;