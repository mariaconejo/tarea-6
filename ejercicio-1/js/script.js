let number_1 = parseInt(prompt('Enter a number one'));
let number_2 = parseInt(prompt('Enter a number two'));
let greater = max (number_1, number_2);

function max(num1, num2){
    let msj = '';
    while(num1 != 0 && num2 != 0){
        num1 = parseInt(prompt('Enter a number one'));
        num2 = parseInt(prompt('Enter a number two'));
        if(num1 > num2){
            msj = `The greastest number is: ${num1}`;
        }else if(num1 < num2){
            msj = `The greastest number is: ${num2}`;
        }else if (num1 == 0 && num2 == 0){
            msj = `Exit`;
        }
        console.log(msj);
    }
    
    return msj
    
}
console.log(greater);

