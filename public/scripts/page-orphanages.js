const map = L.map('mapid').setView([-22.5051203, -44.1591939], 12);

// create and add tilelayer
L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFybGVpcm0iLCJhIjoiY2tnOGI5ZmtmMDIxYzJ4cXh3Zmo5YXdybiJ9.ZW_OOvnhUIFd0NKSirLW6Q"
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

function addMarker({id, name, lat, lng}) {

    // create popup overlay
    const popup = L.popup({
        closeButton: false,
        className: 'map-popup',
        minWidth: 240,
        minHeight: 240
    }).setContent(`${name} <a href="/orphanage?id=${id}" class="choose-orphanage"> <img src="/images/arrow-white.svg" > </a>`)

    // create and add marker
    L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(popup);
};

const orphanagesSpan = document.querySelectorAll('.orphanages span');
orphanagesSpan.forEach((span) => {
    const orphanage = {
        id: span.dataset.id,
        name: span.dataset.name,
        lat: span.dataset.lat,
        lng: span.dataset.lng
    }

    addMarker(orphanage);
})

