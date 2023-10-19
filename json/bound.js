// opeação IO-Bound (Input/Output)
// operaçõs CPU-Bound


// 1. Definir uma função que será chamada quando a leitua do arquivo terminar 
// essa é uma função callback, pois nós a definimos mas nunca a chamamos. Ela é chamada automaticamente pelo ambiente, quando algo de interesse acontece
const fs = require ('fs')
const abrirArquivo = function(nomeArquivo){
    const exibirConteudo = function(erro, conteudo){
        //verifica se tem erro. se tiver só exibe e acaba
        if (erro) {
            console.log(`Deu erro: ${erro}`)
        } else {
            // se nao tiver mostra o conteudo
            console.log(`Conteúdo é: ${conteudo.toString()}`)
            //calcular o dobro do valor lido
            const dobro = Number(conteudo.toString())*2
            //escrever a função que vai ser executada depois de o dobre ter sido escrito num novo arquivo
            const finalizar = function(erro){
                console.log(`${erro? "Erro ao salvar" : "Salvo com sucesso"}`)
            }
            //chamar função que escreve o dobro num novo arquivo e chma a funçaõ definida anteriormente
            fs.writeFile("dobro.txt", dobro.toString(), finalizar)
        }
    }
    fs.readFile(nomeArquivo, exibirConteudo)
}

abrirArquivo("arquivo.txt")
