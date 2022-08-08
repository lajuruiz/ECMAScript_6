//object entries 
////Object entries devuelve los valores de una matriz

const datas={
    frontend:"laura",
    backend:"nelson",
    desing:"django",
}

const entries=Object.entries(datas);
console.log(entries);
console.log(entries.length)


//object values
// me devuelve los valores de un objeto a un arreglo

const data={
    frontend:"laura",
    backend:"nelson",
    desing:"django",
}

const values=Object.values(data);
console.log(values)
console.log(values.length )


//Padding
//// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string="hello";
console.log(string.padStart(7,"hi"));
console.log(string.padEnd(12,"--"));
console.log("food".padEnd(12,"******"));

//Trailling 
//Trailing comas, nos permite asignar elementos al objeto mediante comas.
// se usa la coma para saber que hay mas elementos

const obj={
    name:"oscar",
}


//asyncc Await
// se usa el if ternario
// primera parte la promesa 
const helloWorld=() =>{
    return new Promise((resolve,reject)=>{
        ( true/* false o  true */)
            ? setTimeout(() => resolve("hello world"),3000)
            : reject(new Error("test error"))
    })
}

// async await 

const helloAsync = async() =>{
    // se podrian generar mas variables const e invocar otras funciones.
    const hello= await helloWorld();
    console.log(hello);
}

//llamar a la funcion 
helloAsync();

//segunda opcion.....


const anotherFunction= async() => {
    try{
        const hello=await helloWorld();
        console.log(hello);
    } catch (error) {
        console.log(error)
    }
};
anotherFunction();
