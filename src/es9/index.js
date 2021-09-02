////Spread operator  ...

const obj={
    name:"laura",
    age:28,
    country:"Co",
}

//usamos operador de reposo

let {name,...all}=obj;
console.log(all);


//propiedades de propagacion

const obj={
    name:"laura",
    age:28,
}

const obj1={
    ...obj,
    country:"Colombia",
}

console.log(obj1)

// promise finally 

// funcion y promesa 

const helloWord= () =>{
    return new Promise((resolve, reject) => {
        (true)
        ? resolve("hello World")
        : reject(new Error("test error"))
    });
};

helloWord()
.then(response => console.log(response))
.catch(error =>console.log(error))
.finally(() => console.log("finalizo"))


//regex 

const regexData= /([0-9]{4})-([0-9]{2})-([0-9]{2})/
const match = regexData.exec("2018-04-20");

const year= match[1];
const month= match[2];
const day= match[3];
console.log(year,month,day)