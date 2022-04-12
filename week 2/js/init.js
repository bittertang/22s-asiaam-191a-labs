// JavaScript const variable declaration
const map = L.map('the_map').setView([26, 30], 2); 

// Leaflet tile layer, i.e. the base map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map); 


function my_first_function(){
    console.log('hi from function')
}

my_first_function()


function add_marker(lat,lng,popup){
    L.circleMarker([lat, lng]).addTo(map) 
    .bindPopup(popup)
}

add_marker(37.804363, -122.271111, 'Oakland, California')
add_marker(22.396427, 114.109497, 'Hong Kong')
add_marker(21.027763, 105.834160, 'Hanoi, Vietnam')
add_marker(51.507351, -0.127758, 'London, England')
add_marker(49.282730, -123.120735, 'Vancouver, Canada')

