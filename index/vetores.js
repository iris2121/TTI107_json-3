// 1.5 Vetores
// declaração
v1 = []
v1[0] = 3.4
v1[10] = 2
v1[2] = "abc"
console.log(v1.length)
console.log(v1)
for (let i = 0; i < v1.length; i++){
     console.log(v1[i])
}
// métodos utilitários - primeiro ver funções - pronto 
const nomes = ["Ana Maria", "Antonio", "Rodrigo", "Alex","Cristina"]
// quero apenas nome que comecem com A
// método imperativo, especificar os passos que um programa deve seguir para alcançar um estado desejado
const aux = []
for (let i = 0; i< nomes.length; i++){
    if(nomes[i].startsWith("A")){
        aux.push(nomes[i])
    }
}
console.log(aux)
// métdo declarativo, código mais recusável e menos veloz
const aux2 = nomes.filter( x => x.startsWith("A")) // pode omitir o parâmetro() pq é só um elemento
console.log(aux2)