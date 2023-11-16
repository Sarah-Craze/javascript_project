let stairs = prompt("How many stairs ?")
stairs = parseInt(stairs)

let iteration = 1
while(iteration <= stairs ){
    console.log(' '.repeat(stairs - iteration) + '#'.repeat(iteration))
    iteration++
}