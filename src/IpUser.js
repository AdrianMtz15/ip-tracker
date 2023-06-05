import {ipInfo} from "./IpInfo.js"

// creo la funcion get ip que es llamada por ipUser cuando trae el ip del usuario y esta funcion llama
// a ipInfo con el ip para traer la informacion del ip

function ipUser() {
    const getIpUrl = 'https://api.ipify.org?format=json'

    window.fetch(getIpUrl)
    .then(respuestaIp => respuestaIp.json())
    
    .then(responseJson => {
        getIp(responseJson.ip)
    })
    
}

function getIp(ip) {
    ipInfo(ip, false)
}

export default ipUser


