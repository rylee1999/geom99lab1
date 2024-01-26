// This example creates a 2-pixel-wide red polyline showing the path of
// the first trans-Pacific flight between Oakland, CA, and Brisbane,
// Australia which was made by Charles Kingsford Smith.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3,
    center: { lat:52.299, lng: -0.943},
    mapTypeId: "terrain",
  });
  const RyleesflightPathCoordinates = [
    { lat: 64.797, lng: -17.117 },
    { lat: 55.953, lng: -3.185 }, 
    { lat: 47.185, lng: 9.683 },
    { lat: 51.152, lng: 14.968 }, 
  ];
  const flightPath = new google.maps.Polyline({
    path: RyleesflightPathCoordinates,
    geodesic: true,
    strokeColor: "#FF0000",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

  flightPath.setMap(map);
  const RyleestourStops = [
    [{ lat: 64.797, lng: -17.117  }, "Vatnajökull National Park, Iceland"],
    [{  lat: 55.953, lng: -3.185  }, "Edinburgh, Scotland"],
    [{ lat: 47.185, lng: 9.683  }, "Liechtenstein, Switzerland"],
    [{ lat: 51.152, lng: 14.968 }, "Görlitz, Germany"],
  ];
  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  RyleestourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

window.initMap = initMap;

