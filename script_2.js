let num = prompt("De quel nombre veux-tu calculer la factorielle ?")
num = parseInt(num)

let total = 1

while(num > 0){
    total *= num
    num--
}

console.log(total)