// INCLUDES 

// SIRVE PARA VALIDAR SI DENTRO DEL STRING ESTA INCLUIDO UN NUMERO O UNA PALABRA \

let numbers=[1,2,3,4,5,6,7,8,9,0];
// validar si el numero 7 esta incluido
//para eso funciona este metodo 

if(numbers.includes(7)){
    console.log("Si esta incluido")
} else {
    console.log("no se encuentra")
}


// ejemplo 2
let name=["hola","casas", "hello", "django"] ;
// validar si el numero 7 esta incluido
//para eso funciona este metodo 

if(name.includes("hol")){
    console.log("Si esta incluido")
} else {
    console.log("no se encuentra")
}

/////////////////////////////////////////////////////////////////////////////////////
//operador de exponenciacion
// numeros elevados a una potencia 

let base=4;
let exponent=4;
let result=base ** exponent;

//Nota con los ** es el numero ** potencia 

console.log(result);

