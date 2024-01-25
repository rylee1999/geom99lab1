function initMap() {
  const myLatLng = { lat: 44.407, lng: -78.759 };
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });

  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Kein Reid",
  });
}

window.initMap = initMap;

