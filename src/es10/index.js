// Array.prototype.flat(nivel_de_profundidad): un nuevo método que nos permite aplanar arreglos.
// Array.prototype.flatMap() lo mismo que flat con el beneficio de que primero manipular la data para luego poder aplanar.
// String.prototype.trimStart() | String.prototype.trimEnd() permite quitar los espacios al inicio o al final dependiendo de la funciona.
// try/catch: ahora puedes utilizarlo sin necesidad de especificaro como catch(error) sino directamente usarlo en el scope del catch.
// Object.fromEntries() lo inverso a Object.entries(), es decir podemos convertir un objeto en una matriz clave/valor con Object.entries(), y hace lo inverso es decir de una matriz clave/valor a un objeto con Object.fromEntries().
// Symbol.prototype.description: permite regresar el descripcion opcional del Symbol


//FLAT
// vamos a crear una matriz

let array1=[1,2,3,[1,2,3,[1,2,3]]];

console.log(array1.flat(2));
// el numero 2 es la profundida del array 

// FLATMAP

let array=[1,2,3,4,5];
console.log(array.flatMap(value =>[value, value*2]));

//trim

//sirve para quitar espacios en un string 

let hello=  "       hello world";
console.log(hello);
console.log(hello.trimStart())

let hello=  "hello world                  ";
console.log(hello);
console.log(hello.trimEnd())



//optional catch biding
///// try/catch

try{

} catch{
    error
}


///////// fromEntries////////
// array to object

//convierte un array de arrays en un objeto 

let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries))


/////////////////////////////////
//-------------symbol object--------------------/
let mySymbol = 'My Symbol';
let symbol = Symbol(mySymbol);
console.log(symbol.description);