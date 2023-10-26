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
        for (let i=1 ; i <= numero; i++) 
        res += i
        resolve(res)

    })
    return p
}
const promessa = calculoRapido(10)
promessa.then((valor) => {console.log(`Valor calculado: ${valor}`)})
// a funçaõ passada para then é a função passada para resolve
// assim valor = res, que é o parâmetro de resolve
console.log("Outras coisas...")

// 1 + 2 + ... + n-1 + n
// desfaio 1
const calculoRapidinho = (n) => {
    if (n >= 1){
        // se o usuário informar um número positivo, fazer como antes
        return Promise.resolve(
            (n/2) * (n+1)
        )
    }
    // se nao, devolver promise no estado rejected com a mensagem "o numero deve ser positivo"
    return Promise.reject(("O número deve ser positivo")
    )
}

// desafio 2
const calculoRapidinho2= (n) => (
    n>=0
    ? 
    Promise.resolve((n/2) * (n+1)) 
    : 
    Promise.reject("O número deve ser positivo")
)


calculoRapidinho2(-10)
    .then(function(res){console.log(res)})
    .catch(erro => console.log("Erro: " + erro))


