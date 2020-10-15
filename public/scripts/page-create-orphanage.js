const map = L.map('mapid').setView([-22.5051203, -44.1591939], 12);

// create and add tilelayer
L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
).addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "./public/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;
// create and add marker
map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    // remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat, lng], { icon })
    .addTo(map)

})


// add images field
function addPhotoField() {
    // get images container
    const container = document.querySelector('#images');

    // get container to double .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    // clone last image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);
  
    // verify if field is empty
    const input = newFieldContainer.children[0];

    if(input.value == "") {
        return
    }; 

    // cleaning fields
    input.value = "";

    // clone container of #images
    container.appendChild(newFieldContainer);
}

// remove images field
function removeField(event) {
    const span = event.currentTarget;

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if( fieldsContainer.length <= 1) {
        span.parentNode.children[0].value="";
        return
    }

    //remove field
    span.parentNode.remove();

}

// select yes or no
function toggleSelect(event) {
    const option = event.currentTarget;
    const options = document.querySelectorAll('.button-select button');

    options.forEach(option => option.classList.remove('active') );

    option.classList.add('active');

    const input = document.querySelector('[name="open_on_weekends"]');
    input.value = option.dataset.value;
}