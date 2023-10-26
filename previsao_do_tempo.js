require('dotenv').config()
const axios = require('axios')

// const APPID=process.env.APPID
// const Q= process.env.Q
// const UNITS= process.env.UNITS
// const LANGUAGE= process.env.LANGUAGE
// const CNT= process.env.CNT
// const PRTOCOL= process.env.PRTOCOL
// const URL_BASE= process.env.URL_BASE

// operaor de destruição do JS

const {
    APPID,
    Q,
    UNITS,
    LANGUAGE,
    CNT,
    PROTOCOL,
    URL_BASE
} = process.env

//montando a url
const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${LANGUAGE}&cnt=${CNT}`

const minhaPromise = axios.get(url)

minhaPromise
    .then((res) => {
    console.log("Quem é o res data....")
    console.log(res.data)
    console.log("**************************")
    return res.data
    })
    .then((res) => {
        console.log("Quem é o res cnt?")
        console.log(res.cnt)
        console.log("**************************")
        return res
    })
    .then((res) => {
        console.log("Quem é o res list?")
        console.log(res.list)
        console.log("**************************")
        return res.list
    })
    //desafio
    .then((res) => {
        console.log("Quem é a temperatura minima da primeira previsao?")
        console.log(res[0]['main']['temp_min'])
        console.log("**************************")
        return res
    })
    //lição aula 9/11
        //o professor vai olhar o caderno
        //iterar sobre a coleção de previsões, exibindo temperatura minima, maxima, umidade relativa do ar, descrição de cada previsão
        // for..
