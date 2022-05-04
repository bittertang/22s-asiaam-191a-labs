// declare variables
let mapOptions = {'center': [34.07291,-118.444],'zoom': 15}

// use the variables
const map = L.map('the_map').setView(mapOptions.center, mapOptions.zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// create a function to add markers
function addMarker(lat,lng,title,message){
    console.log(message)
    L.marker([lat,lng]).addTo(map).bindPopup(`<h2>${title}</h2> <h3>${message}</h3>`)
    return message
}

const dataUrl = "https://docs.google.com/spreadsheets/d/e/2PACX-1vT2xQFQv4HF30c-UcBO0RuR-cnkOkBbrBmJXwrwWFFoMaN7VMr8RYXHY4eUyGNa1oMKrqlL-akDKK0L/pub?output=csv"


function loadData(url){
    Papa.parse(url, {
        header: true,
        download: true,
        complete: results => {results.data.forEach(marker => addMarker(marker.lat, marker.lng, marker["What year are you?"], marker["Describe a time you struggled academically at UCLA."]))}
    })
}


loadData(dataUrl)

