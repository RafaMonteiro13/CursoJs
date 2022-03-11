var num = [5, 8, 2, 9, 3]

console.log(num)
console.log('---------------------------------------')
console.log(`O vetor tem ${num.length} posições.`)
console.log(`O primeiro valor do veor é ${num[0]}`)
num.sort()
console.log(num)
console.log('---------------------------------------')
num.push(10)
console.log(num)
console.log('---------------------------------------')


let pos = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor 8 está na posição ${pos}`)
}