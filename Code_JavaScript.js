// JavaScript Document
<script type="text/javascript">
//Declaraciones
var cantidad = new Array(100);
var restoCinco, restoTres;
var fizz = "Fizz";
var buzz = "Buzz";
var fizzBuzz = "FizzBuzz"
//Cálculo de los múltiplos de los números del 1 al 100
for (i=1;i<101;i++){
restoTres=i%3
restoCinco=i%5
if (restoTres == 0 && restoCinco == 0)
{cantidad[i]=fizzBuzz
}else{if (restoTres == 0)
{cantidad[i] = fizz
}else{if (restoCinco == 0)
{cantidad[i]=buzz
}else{cantidad[i] = i}}}
}
//Impresión de los 100 valores según condiciones anteriores
for (i=1;i<101;i++){
document.write(cantidad[i])
document.write(", ")
}
</script>