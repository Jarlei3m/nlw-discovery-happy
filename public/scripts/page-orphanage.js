const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const map = L.map('mapid', options).setView([-22.5051203, -44.1591939], 12);

// create and add tilelayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
})

// create and add marker
L.marker([-22.5051203, -44.1591939], { icon })
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
