// // computação síncrona : ocorre na ordem
//     // exemplo bloqueante
// function demorada(){
//     //exibir a data atual do sistema e deslocar 2 segundos
//     const dataAtualMais2Segundos = new Date().getTime() + 2000
//     //ficar extraindo a data atual do sistema ate que ela tenha passado do original
//     while(new Date().getTime() <= dataAtualMais2Segundos){

//     }
//     const d = 8 + 4
//     return d
// }

// const a1 = 2+3
// const b2 = 5+9
// const d = demorada()
// const e = 2 + a1 + b2 
//     //neste caso a constante e depende da execuçaõ das linhas 23 e 24 mas em processamento bloqueado depende do pocessamento da linha 25, por isso é vantajoso ter um processamento não bloquentte (simultâneo)


// // computacao assincrona
//     // exemplo não bloqueante
    
// function demorada(){
//     //exibir a data atual do sistema e deslocar 2 segundos
//     const dataAtualMais2Segundos = new Date().getTime() + 2000
//     //ficar extraindo a data atual do sistema ate que ela tenha passado do original
//     while(new Date().getTime() <= dataAtualMais2Segundos){

//     }
//     const d = 8 + 4
//     return d
// }

// const f = 2+3
// const g = 5+9

// setTimeout(() => {
//     const d = demorada()
//     console.log("d: " + d)
// })

// const i = 2 + a1 + b2 
// console.log("i: " + i)
//  // neste caso não foi necessário esperar o porcessamento 

 // computaçao sícrona e assíncrona
//  setTimeout(() => {
//     console.log("Dentro da setTimeout")
//  }, 0)

//  console.log("Depois da setTimeout")

// // // // /// /// /// /// /// 
// function demorada(tempo){
//     console.log(`demorarda: ${tempo}`)
//     const atualMaisTempo = new Date().getTime() + tempo
//     while(new Date().getTime() <= atualMaisTempo){}

//     const d = 8+4
//     return d
// }

// setTimeout(() => {
//     demorada(2000)
// }, 2000)
// setTimeout(() => {
//     demorada(1000)
// }, 1000)

// console.log("Fim do script principal")

// /// /// /// /// /// /// ///
console.log("1")

setTimeout(() => {
    console.log("2")
}, 0)
const atualMaisTempo = new Date().getTime() + 17 * 60 * 1000
while(new Date().getTime() <= atualMaisTempo);

console.log("3")
