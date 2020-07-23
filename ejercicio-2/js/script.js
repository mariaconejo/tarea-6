

let number_1 = parseInt(prompt('Enter a number one'));
let number_2 = parseInt(prompt('Enter a number two'));
let divide = div(number_1, number_2);
// funcion que me retorna true si el los numeros se pueden dividir 
//y false si no es posible dividirlos
function div (num1, num2){

    let flag = false;
    if(num1 % num2 == 0){ // residuo
        return  true;
    }else{
        return  false;
    }

}

// imprime lo que retorna la funcion div se hace afuera de la funcion 
console.log(`Division between ${number_1} and ${number_2} is : ${divide}`);

//-----------------------------------------------------------------------//
const number = parseInt(prompt("Enter a number"));
let emoji = emojis(number);

// funcion de emojis que me retorna un mensaje con un emoji 
//dependiendo de las condiciones 
function emojis (num){
    // mensaje
    let msj = '';
// si no es un numero o el numero es negativo me indica un error
if (isNaN(num) || (num < 0)){
    msj = `Error, invalid number or isn't a number`;

}else{
        //utilice 21
    if (num % 3 == 0 && num % 5 != 0){
        msj = `🚀 ${num}`;

        //utilice 50
    }else if (num % 5 == 0 && num % 3 != 0){
        msj = `🍔 ${num}`;

        //utilice 60
    }else if((num % 3 == 0) && (num % 5 == 0)){
        msj = `🍺 ${num}`;
    }else{
        msj = `Isn't possible to divide ${num} between 3 and 5`;
    }
    
}
    return msj;
}


// imprime lo que retorna la funcion emojis 
console.log(emoji);