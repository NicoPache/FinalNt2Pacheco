import Vue from "vue";

 Vue.filter("codificado", function(value) {
    let result=""
      for (let i = 0; i < value.length; i++) {
       
        value = value.toLowerCase()
        if (value[i]=='a') {
           result += 'u'
        }else if (value[i]=='e') {
           result += 'o'
        } else if (value[i]=='o') {
            result+= 'e'
        }else if (value[i]=='u') {
            result+= 'a'
        }else{
            result += value[i]
        }
      }
      
      return  result;
}); 

Vue.filter("mayusculas", function(value) {
   
    let result= value.toUpperCase()
    
    return  result;
});

Vue.filter("minuscula", function(value) {
   
    let result= value. toLowerCase()
    
    return  result;
});
Vue.filter("mayMin", function(value) {
  let resultado =""
  for (let i = 0;i < value.length; i++) {
      if (i%2==0) {
          resultado += value[i].toUpperCase();
      }else{
        resultado += value[i].toLowerCase();
      }
      
  }
  return resultado
});
Vue.filter("minMay", function(value) {
    let resultado =""
    for (let i = 0;i < value.length; i++) {
        if (i%2!=0) {
            resultado += value[i].toUpperCase();
        }else{
          resultado += value[i].toLowerCase();
        }
        
    }
    return resultado
  });

