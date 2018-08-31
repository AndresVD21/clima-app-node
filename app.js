
// import { getLugarLatLng } from './lugar/lugar';
const lugar = require('./lugar/lugar');
// import { getClima } from './clima/clima';
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async (direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temperatura = await clima.getClima(coords.lat, coords.lng);

        return `El clima en ${coords.direccion} es de ${temperatura}°`
    } catch (error) {
        return `No se pudo determinar el clima en ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));


