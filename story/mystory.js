//code template codes from:https://developers.google.com/maps/documentation/javascript/examples/polyline-simple.
//code template comes from:https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility.
//url :https://rylee1999.github.io/geom99lab1/story/mystory.html.
function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 3.5,
    center: { lat:52.299, lng: -0.943},
    mapTypeId: "terrain",
  });
  const RyleesflightPathCoordinates = [
    { lat: 64.797, lng: -17.117 },
    { lat: 55.953, lng: -3.185 }, 
    { lat: 47.185, lng: 9.683 },
    { lat: 51.152, lng: 14.968 }, 
    { lat: 36.398, lng: 25.458  },
  ];
  const flightPath = new google.maps.Polyline({
    path: RyleesflightPathCoordinates,
    geodesic: true,
    strokeColor: "#FFD700",
    strokeOpacity: 1.0,
    strokeWeight: 2,
  });

   const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: {lat: 44.449, lng: -78.805 },
    map,
    icon: image,
    title: "My Home!",
  });
    
  
  flightPath.setMap(map);
  const RyleestourStops = [
    [{ lat: 64.797, lng: -17.117  }, "Vatnajökull National Park, Iceland"],
    [{  lat: 55.953, lng: -3.185  }, "Edinburgh, Scotland"],
    [{ lat: 47.185, lng: 9.683  }, "Liechtenstein, Switzerland"],
    [{ lat: 51.152, lng: 14.968 }, "Görlitz, Germany"],
    [{ lat: 36.398, lng: 25.458 }, "Santorini, Greece"],
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

