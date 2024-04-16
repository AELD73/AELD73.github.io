document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([19.4326, -99.1332], 11); // Coordenadas de la Ciudad de México

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    L.marker([19.670915622237473, -99.01647539815298]).addTo(map)
        .bindPopup('Herrajes Ferroviarios y Materiales, S.A. de C.V.')
        .openPopup();
});