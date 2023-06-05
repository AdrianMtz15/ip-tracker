import { printIpInfo } from "./main.js"

const blackIcon = new L.Icon({
    iconUrl: '../images/marker-icon-2x-black.png',
    shadowUrl: 'images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
})

class Map {
    constructor(ipAddress, ipLat, ipLng, ipLocation, ipTimezone, ipIsp) {
        this.ipAddress = ipAddress
        this.ipLat = ipLat
        this.ipLng = ipLng
        this.ipLocation = ipLocation
        this.ipTimezone = ipTimezone
        this.ipIsp = ipIsp
        this.map
        this.marker
    }

    createMap() {
        const tilesProvider = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        this.map = L.map('map').setView([this.ipLat, this.ipLng], 13);
    
        L.tileLayer(tilesProvider, {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.marker = L.marker([this.ipLat, this.ipLng], {icon: blackIcon}).addTo(this.map)
    }

    moveMarker(lat, lng){
        this.marker.setLatLng([lat, lng]) 
    }

    moveMap(lat, lng){ 
        this.map.setView([lat, lng])
    }
}

let newMap

function createNewMap(ip, ipLat, ipLng, ipLocation, ipTimezone, ipIsp) {
    newMap = new Map(ip, ipLat, ipLng, ipLocation, ipTimezone, ipIsp)
    newMap.createMap()
    printIpInfo(ip, ipLocation, ipTimezone, ipIsp)
}

export  {Map, createNewMap, newMap}