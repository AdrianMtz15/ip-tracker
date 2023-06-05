import {createNewMap} from "./Map.js"
import {getNewIpInfo} from "./main.js"


function ipInfo(ip, newIp) {
    let URL = `https://geo.ipify.org/api/v1?apiKey=at_ey9bAbTm2dKF0ySFcIJmEiPBF89Su&ipAddress=${ip}`
    window.fetch(URL)
    
    .then(respuesta => respuesta.json())

    .then(responseJson => {
        const obj = responseJson

        let ipLat = obj.location.lat
        let ipLng = obj.location.lng
        let ipLocation = `${obj.location.city}, ${obj.location.region}, ${obj.location.country}`
        let ipTimezone = `GMT: ${obj.location.timezone}`
        let ipIsp = `${obj.isp}` 

        if (newIp) {
            getNewIpInfo(ip, ipLat, ipLng, ipLocation, ipTimezone, ipIsp)
        } else {
            createNewMap(ip, ipLat, ipLng, ipLocation, ipTimezone, ipIsp)
        }
    })
}

export  {ipInfo}
