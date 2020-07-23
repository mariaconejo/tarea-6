let number = parseInt(prompt("Enter a number"));
let primes = esPrimo(number);

// funcion que me retorna true si es primo y false si no es primo
function esPrimo(num){

    // 0 y 1 no se consideran numeros primos ni compuesto y 
    //4 es un numero compuesto porque que tiene mas de dos divisores
    // los numeros primos y compuestos solamente son los naturales positivos mayores o iguales a 2 
    // si digita algo que no sea un numero o un numero menor 
    //a 2 da error
    if(!isNaN(num) &&  num >= 2){
        //si el numero es divisible es primo es falso
        let prime = true;
        if (num == 0 || num == 1 || num == 4){
                prime = false;
        }
    //el for comienza de 2 porque ni 0 y 1 son numeros ni 
    //primos ni compuestos, si encuentra otro numero con el que se pueda dividir
    // primo es falso
        for (let i = 2; i < num ; i++) {
            if (num % i == 0) {
                prime = false;
            }
        }
        if ( prime == true){
                return true;
        }else{
                return false;
        }

    }else{
        console.log('error');
    }
}
// imprime lo que retorna la funcion esPrimo 
console.log(`Is the number prime? ${primes}`); 

