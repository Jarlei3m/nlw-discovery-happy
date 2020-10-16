const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanCoordinates = document.querySelector('.coordinates');

const map = L.map('mapid', options).setView([spanCoordinates.dataset.lat, spanCoordinates.dataset.lng], 14);

// create and add tilelayer
L.tileLayer(
    "https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiamFybGVpcm0iLCJhIjoiY2tnOGI5ZmtmMDIxYzJ4cXh3Zmo5YXdybiJ9.ZW_OOvnhUIFd0NKSirLW6Q"
    // 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker

L.marker([spanCoordinates.dataset.lat, spanCoordinates.dataset.lng], { icon })
.addTo(map)

// image gallery
function selectImage(event) {
    const button = event.currentTarget

    // remove '.active'
    const buttons = document.querySelectorAll('.images button');
    buttons.forEach(button => (
        button.classList.remove('active')
    ));

    // show selected image
    const image = button.children[0]
    const imageContainer = document.querySelector('.orphanage-details > img');

    imageContainer.src = image.src

    // add '.active'
    button.classList.add('active');
}

