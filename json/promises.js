// promises

function calculoDemorado(numero){
    let res = 0
    for (let i=1 ; i <= numero; i++) res += i
    return res
}
console.log(calculoDemorado(10))

// caso fosse um processamento bloque ado poderia haver problemas
// uma alternativa aos callbacks é usar promises operando de maneira não bloqueante

function calculoRapido(numero){
    const p = new Promise(function(resolve,reject){
        let res = 0
        for (let i=1 ; i <= numero; i++) res += i
        resolve(res)

    })
    return p
}
const promessa = calculoRapido(10)
promessa.then((valor) => {console.log(`Valor calculado: ${valor}`)})
// a funçaõ passada para then é a função passada para resolve
// assim valor = res, que é o parâmetro de resolve
console.log("Outras coisas...")



