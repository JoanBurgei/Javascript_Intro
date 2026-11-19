export default function greet(name ='Guest'){
    console.log(`hello${name}`)
}
greet()

const add = (a,b) => a+b

export {add as sum}