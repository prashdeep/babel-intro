export function greet(message){
    return `Hello World !! ${message}`;
}

export const google_url = "http://google.com";

export const course={
    name:'React',
    duration:'2 weeks',
    price:20000
}

let innerFunction = function(){
    console.log("THis function cannot be used outside.")
}