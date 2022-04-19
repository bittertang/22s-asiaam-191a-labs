// declare the map
let mapOptions = {
    "mapCenter":[36.7783,-119.4179], 
    "zoomLevel": 5
};

const map = L.map('the_map').setView(mapOptions.mapCenter, mapOptions.zoomLevel);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);



// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.circleMarker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    createButtons(lat,lng,title)
    return message
}

function createButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title; //content of button
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 13); 
    })

    document.getElementById("contents").appendChild(newButton); //adds to contents id
}

function createLocButtons(lat,lng,title){
    const newButton = document.createElement("button");
    newButton.id = "button"+title;
    newButton.innerHTML = title; //content of button
    newButton.setAttribute("lat",lat);
    newButton.setAttribute("lng",lng);
    newButton.addEventListener('click', function(){
        map.flyTo([lat,lng], 12); 
    })

    document.getElementById("contents").appendChild(newButton); //adds to contents id
}

createLocButtons(37.8272, -122.2913, 'Bay Area recs')
createLocButtons(34.0182, -118.3404, 'LA recs')


addMarker(33.994640,-118.308929,'Meat Love KBBQ','prime beef bulgogi')
addMarker(34.063050,-118.297370,'Sun Nong Dan','galbi jjim (with cheese!)')
addMarker(34.038970,-118.442490,'Seoul Tofu','original soon tofu')
addMarker(34.062641,-118.399391,'Urth Cafe','vanilla icecream waffle and matcha latte')



fetch("map.geojson")
    .then(response => {
        return response.json()
    })
    .then(data =>{
        // Basic Leaflet method to add GeoJSON data
        L.geoJSON(data, {
            pointToLayer: (feature, latlng) => { 
                return L.circleMarker(latlng, {color: feature.properties.color})
            }
            }).bindPopup(layer => {
                return layer.feature.properties.place;
            }).addTo(map);
     })    
