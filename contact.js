function initMap(){
    const location = {
        lat: 34.301346273763635,
        lng: -118.83667589817092,
    };
    const map = new google.maps.Map(document.querySelector('.google-maps'), {
        zoom: 14.5,
        center: location,
    });
}
