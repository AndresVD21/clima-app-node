// import { get } from 'axios';
const axios = require('axios');

const getClima = async (lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=78f326a7d598d8f08a9795eeba3b4eec`)
    const regexBad = new RegExp('^4[0-9]{2}$');
    if (regexBad.test(resp)) {
        throw new Error(`There is a problem with the coordinades lat:${lat}, lon:${lng}`)
    }
    const temperatura = resp.data.main.temp;
    return temperatura;
}

module.exports = {
    getClima
}