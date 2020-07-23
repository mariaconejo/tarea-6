let number_1 = 1;
let number_2 = 1;
let greater = max (number_1, number_2);

// funcion que me retorna un mensaje con  el numero mayor
// quise hacerlo con un ciclo para hacerlo mas dinamico respetando 
//las condiciones del enunciado.
function max(num1, num2){
    let msj = ''; // me retorna un mensaje dependiendo de la condicion
    // los numeros deben ser diferentes de 0 , si ambos son 0 
    // el ciclo se detiene y me imprime un mensaje de 'saliste'
    while(num1 && num2 != 0){ 

        num1 = parseInt(prompt('Enter a number one'));
        num2 = parseInt(prompt('Enter a number two'));
        if(num1 > num2){
            msj = `The greastest number is: ${num1}`;
        }else if (num1 < num2){ 
            msj = `The greastest number is: ${num2}`;
        }else if (num1 == 0 && num2 == 0){ // si ambos son iguales a 0 se detiene el ciclo
            msj = `Saliste`;
        }else if(isNaN(num1) || isNaN(num2)){ // si alguno de los dos numeros que se digita no es un numero retorna error 
            msj = `Error`; 
        }
        console.log(msj);
    }
    return msj // retorna mensaje
}

console.log(greater); // imprime lo que contienen la funcion max

