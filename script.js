let map = L.map('map').setView([21.02890, -89.58300], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="#">haawCode</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

 L.marker([21.02890, -89.58300]).addTo(map)
     .bindPopup('Dental')
     .openPopup();