// 1.6 Funções
function hello(){
    console.log("Funções possuem nome, parâmetros(), e corpo{} com comandos")
    console.log("Oi")
}
hello()

function hello(nome){
    console.log(`Oi, ${nome}`)
}
hello("João")

function some(a, b){
    console.log(a + b, "Também da pra usar return, método mais atual:")
    return a + b 
}
const res = some(2,3)
console.log(res)

// funções anônimas
//em js funções são cidadãs de primeira classe
const dobro = function(n){
    return n*2
}
console.log(dobro(2))

// parâmetros de função com valores padrão
let triplo = function triplo(n){
    return n*3
}
console.log(triplo(10))
console.log(triplo())
// arrow functions, mais modernas com mais vantagens
const hello = () => {console.log("Oi")}
hello()
const hello2 = () => console.log(2)
hello2()
// se voce não colaca chaves não da para utilizar return, não é implcito
const dobro2 = (n) => {return n*2}
const dobroV2 = (n) => n*2
const dobroV3 = n => n*2
dobro()
// ex, para que a unção funcione é necessário retirar as chaves(chave e return implcitos) ou adicionar o return(naa implicito)
const ehPar = n => n % 2 == 0
console.log(2)
const eAgora = () => console.log("?")
console.log(eAgora())
const eAgoraV2 = n => ehPar(n)
console.log(eAgoraV2(2))

// Desafios - exercícios
// 1. Dada a lista[1,2,3], produxzir [1,4,9]
const numero = [1, 2, 3]
const resultados = []
for(let i = 0; i < numeros.length; i++ ){
    resultados.push(numeros[i] * numeros[i])
}
console.log((resultados))
// 2. produza uma lista, para cada elemento recebido use a função recebida para encontrar seu mapeamento
function mapear(lista, funcao){
    const aux = []
    for (let i = 0; i < lista.length; i++ ){
        aux.push(funcao(lista[i]))
    }
    return aux
}
  // 2.1 chame a mapear, produzindo uma lista de booleano true para multiplos de 3 e false para quem não for (use uma arrow function, sem return e sem parametros)
  const numeros = [1, 2 ,3]
  console.log(mapear(numeros, n => n % 3 === 0))
  // 2.2 adaptar para que ao invés de mostar booleano mostre "é multiplo de tres" ou "não é multiplo de 3", incluindo o valor, usando interpolção, considere que mapear ja existe
  console.log(numeros.map(n => n % 3 === 0 ? `${n}, é multiplo de tres` : `${n}, não é multiplo de tres`))
