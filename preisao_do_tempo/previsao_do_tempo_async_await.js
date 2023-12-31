require('dotenv').config()
const axios = require('axios')
//operador de desestruturação do JS
const { 
  APPID,
  Q,
  UNITS,
  MY_LANGUAGE,
  CNT,
  PROTOCOL,
  URL_BASE
} = process.env

const url = `${PROTOCOL}://${URL_BASE}?q=${Q}&units=${UNITS}&appid=${APPID}&lang=${MY_LANGUAGE}&cnt=${CNT}`

//Utilize async/await para iterar sobre a coleção de previsões, exibindo temp_min, temp_max, humidity, description

const obterPrevisoes = async () => {
    //const data = (await anxios.get(url)).data
    const {list} = (await anxios.get(url)).data
    for (let previsao of list){
        const dt = new Date(+(previsao.dt) * 100) 
        console.log(dt.toTimeString)
    }
}

obterPrevisoes()

