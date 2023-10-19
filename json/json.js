// let pessoa = {
//     nome: "João",
//     idade: 17,
// }

// //o acesso a propriedades pode ser feito com ponto
// console.log("Me chamo " + pessoa.nome);
// //e com [] também
// console.log("Tenho " + pessoa["idade"] + " anos");

// // uma pessoa se chama maria tem 21 anos e mora na rua b numero 121
// let pessoa2 = {
//     nome: 'Maria',
//     idade: 21,
//     endereco: {
//         rua: 'Rua B',
//         numero: 121,
//     }
// }
// console.log("Me chamo " + pessoa2.nome + ". Tenho " + pessoa2.idade + " anos. Moro na " + pessoa2.endereco["rua"] + "numero" + pessoa2.endereco["numero"])

// // uma concessionária tem cnpj e endereçao (rua número e bairro) Ela possui B carros em estoque. Cada um tem uma marca modelo e ano de fabricação
// let concessionaria = {
//     cnpj: 45654654654654-654 ,
//     endereco: {
//         rua: "Tamarutaca",
//         numero: 254,
//         bairro: "Centro",
//     } ,
//     estoque: {
//         veiculos: [
//             {
//                 marca: "Ford",
//                 modelo: "Mustang Mach",
//                 anofab: 2023,
//             },
//             {
//                 marca: "Jaguar",
//                 modelo: "F-Type",
//                 anofab: 2022,
//             },
//             {
//                 maraca: "Fiat",
//                 modello: "Uno",
//                 ano: 2014,
//             },
//         ],
//     } ,
// };
// let quantos = {
//     quantidade: (concessionaria.estoque.veiculos).length,
// }
// console.log(concessionaria)
// console.log(concessionaria.estoque)
// console.log(quantos)

// // estrutura de repetição para mostrar todas as marcas e modelos
//  // for/of
// for (let veiculos of concessionaria.estoque.veiculos){
//     console.log(`maraca: ${veiculos.marca}`),
//     console.log(`modelo: ${veiculos.modelo}`),
//     console.log(`data de fabricação: ${veiculos.anofab}`)
// }

// // Uma calculadora realiza as operações de soma e subtração
// // soma de dois numeros (arrow com return)
// // subtração de dois numeros (arrow function sem return)
// // raiz quadrada de um numero regular (sem function)
// let calculadora ={
//     soma: (a,b) => a + b,
//     subtracao: function(a,b) {return a-b;},
//     raizquad:  function raiz(a,b){ return Math.sqrt(a), Math.sqrt(b)}
// }
// console.log(calculadora.soma(2,3))
// console.log(calculadora.subtracao(2,3))
// console.log(calculadora.raizquad(4,9))
// // sem usar operador .
// console.log(calculadora["soma"](2,3))
// console.log(calculadora["subtracao"](2,3))
// console.log(calculadora["raizquad"](4,9))