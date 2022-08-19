const num = Number(prompt("Digite um numero para tabuada"))
const calc = [1,2,3,4,5,6,7,8,9,10]

for(let i in calc){
    console.log(calc[i] * num)
}