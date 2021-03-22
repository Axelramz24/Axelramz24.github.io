function limpiar(){
    document.getElementById('forma').reset();
}
 function funcion(){
     var v1 = parseInt(document.getElementById('v1').value);
     var v2 = parseInt(document.getElementById('v2').value);
     document.getElementById('resultado').innerHTML = ('la suma es:') + (v1+v2) + 
     ('\nla resta es:') + (v1-v2) +
      ('\nla divicion es:') + (v1/v2) + 
       ('\nla multiplicacion es:') + (v1*v2) ;
 }
