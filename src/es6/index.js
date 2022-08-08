
function newFunction( name, age, country){
    var name=name || "oscar";
    var age= age || 32;
    var country= country || "MX";
    console.log(name,age,country);
}
//es6

function newFuction2(name="oscar", age=32, country="MX"){
    console.log(name, age,country);
}
newFuction2();
newFuction2("ricardo","23",)

// forma antigua
//concatenar
let hello="hello";
let world= "word";
let epicPhrase= hello + " " + world;
console.log(epicPhrase);

// forma nueva 
let epicPhrase2= `${hello} ${world}`;
console.log(epicPhrase2);


// multilinea

let cosa="hola soy django y amo a mis papas \n"
+ "y me  gustar ir a la guarderia."

// multilinea con es6

let cosa1=`otra frace epica que necesitamos
otra fease epica
`;
console.log(cosa);
console.log(cosa1);

//desestructuracion

let person={
    "name":"Laura",
    "lastname": "Ruiz",
    "age": 28,
    "country":"CO"
}

console.log(person.name, person.age, person.country);

//es6

let {name, age, country}= person;
console.log(name,age,country);


// spread operator

let team1=["oscar", "julian", "ricardo"];
let team2=["laura","yessica","camila"];

let education=["david", ...team1,...team2];
console.log(education);

//let 

{
    var globalVar="global var";
}
{
    let globalLet="global let";
}

console.log(globalVar);
console.log(globalLet);
//genera un error en la variable let, se debe de hacer asi: 

{
    let globalLet="global let";
    console.log(globalLet);
}

//Arrow Functions, Promesas y Parámetros en objetos

//* propiedad de objetos mejorada

//antigua 
let name="laura";
let age=28;

obj={name:name , age:age};

//es6
obj2={name,age};

console.log(obj2);

//arrow functions

const names=[
    {name:"laura", age:32, country:"CO"},
    {name:"nelson", age:27,country:"CO"}
];

/* let listOfNames= names.map(function(item){
    console.log(item.name);
});

//arrow function es6
let listOfNames2=names.map(item => console.log(item.name)); */

const listOfNames3= (name , age,country) =>{
console.log(name, age, country)
}
listOfNames3("django",2,"CO")

const listOfNames4=name => {
    console.log(name);
}
listOfNames4("laura")

const square= num => num * num
console.log(square(92));

///////////////////////////////////////////////////////////
//promesas (asincronismo)

const helloPromise=() => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve("hey")
        }else{
            reject("UPS!!")
        }
    });
}

// parte 2 ejecutamos la funcion

helloPromise()
.then(response=>console.log(response))
.catch (error => console.log(error));


////////////////////////////////////////
// clases
// se usa la palabra reservada class, se debe de usar un constructor
// sum es un metodo (pueden ser varios)

class calculator{
    constructor(){
        this.valueA=0;
        this.valueB=0;
    }
    sum(valueA,valueB){
        this.valueA=valueA;
        this.valueB=valueB;
        return this.valueA + this.valueB;
    }
}
// se genera una constante

const calc =new calculator();
console.log(calc.sum(4,2));

//Modulos

// con export default podemos exportar una variable o funcion 
//por defectoo de un archivo asi:

//se crea un archivo js de donde se va a exportar 
//a mi archivo actual 
// ejemplo archivo llamado modulo.js ahi se escribio este codigo 
// let hello = () => {
//     return "helloooo!!"
// }
// export default hello

// para importarla a mi archivo actual o principal se hace de la 
// siguiente forma:

// import {hello} from "./modulo"

// NOTA: A diferencia del export default en esta ocasión podemos exportar más de una variable o función que se encuentre en nuestro archivo, pero para importarlas debemos hacerlo con el nombre exacto de esa variable entre llaves.

import {hello} from "./module";
hello();


//generators
//funcion especial que returna una serie de valores segun el algoritmo definido


function* helloWorld(){
    if(true){
        yield "hello,";
    }
    if(true){
        yield "world";
    }
};

const generatorHello=helloWorld();

console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);