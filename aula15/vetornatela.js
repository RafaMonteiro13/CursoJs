let valores = [8, 4, 5, 9, 1, 7]
console.log(valores)

for (pos = 0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('-----------------------------------------')

valores.sort()
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}