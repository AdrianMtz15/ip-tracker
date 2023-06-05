import ipUser from "./IpUser.js"
import {newMap} from "./Map.js"

const ipInfoIp = document.querySelector('.ip-info__ip')
const ipInfoLocation = document.querySelector('.ip-info__location')
const ipInfoTimezone = document.querySelector('.ip-info__timezone')
const ipInfoIsp = document.querySelector('.ip-info__isp')
const ipInputValue = document.querySelector('#input-ip')
const inputBtn = document.querySelector('#input-ip-icon')

// Ejecuto la funcion ipUser para traer la ip del usuario que ingresa
ipUser()


// Añado un evnetlistener al boton para que cuando se le de click para una nueva ip ejecute la funcion ipinfo
// dandole el valor de la nueva ip
inputBtn.addEventListener('click', () => {
    ipInfo(ipInputValue.value, true)
})


// Creo la funcion que sera ejecutada si se le da click al boton para buscar la info de una ip, esta funcion
// mueve el mapa a la ubicacion de la nueva ip y establece un marcador, ademas de cambiar la infomracion
// dentro del div con la funcion print ipInfo
function getNewIpInfo(ip, ipLat, ipLng, ipLocation, ipTimezone, ipIsp) {
    newMap.moveMarker(ipLat, ipLng)
    newMap.moveMap(ipLat, ipLng)
    printIpInfo(ip, ipLocation, ipTimezone, ipIsp)
}


function printIpInfo(ip, ipLocation, ipTimezone, ipIsp) {
    ipInfoIp.innerText = `${ip}`
    ipInfoLocation.innerText = `${ipLocation}`
    ipInfoTimezone.innerText = `${ipTimezone}`
    ipInfoIsp.innerText = `${ipIsp}` 

}


export { getNewIpInfo, printIpInfo }

