// import { get } from 'axios';
const axios = require('axios');

const getLugarLatLng = async (direccion) => {

    let encodedUrl = encodeURI(direccion)

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`)
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }

    const data = resp.data.results[0];
    const address = data.formatted_address;
    const latitud = data.geometry.location.lat;
    const longitud = data.geometry.location.lng;
    return {
        direccion: address,
        lat: latitud,
        lng: longitud
    }
}

module.exports = {
    getLugarLatLng
}

