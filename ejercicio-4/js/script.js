let  list = 8;
let  number =  parseInt(prompt("Enter a number"));
let  size = 7;
//let  aling = alinearDerecha(number, size);

// ciclo me permite  digitar 8 numeros y entra a la funcion alinearDerecha
for(let j = 1; j < list; j++){
    number = parseInt(prompt("Enter a number"));
    alinearDerecha(number,size);
}

//Me retorna los 8 numeros digitados con un espaciado dependiendo del largo de los numeros convertidos en string
function alinearDerecha(num,space){

    let change_str = num.toString();//convierte numero a string
    let white_space = ' '; // espaciado
    for(let i = change_str.length; i < space; i++){ // el largo de la cadena es el contador si es menor a al tamano incrementa
        white_space += ' '; // agrega al string de numero los espacios
    }
    let chain = white_space+= change_str; // crea la cadena de espacio y el numero al final alineado a la derecha
    console.log(chain) 
    return chain; //retorna la cadena ya creada 
    
}

// imprime la funcion alinearDerecha 
//console.log(aling);

