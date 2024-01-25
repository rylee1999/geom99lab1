let map;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 44.407, lng: -78.759 }, 
    zoom: 8,
  });
}

initMap();
