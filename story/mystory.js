const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    center: { lat: 44.403, lng: -78.757 },
    zoom: 12,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).

  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 44.403, lng: -78.757 }, 
    content: pinGlyph.element,
  });
  
  const image =
    "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png";
  const beachMarker = new google.maps.Marker({
    position: { lat: -33.89, lng: 151.274 },
    map,
    icon: image,
  });
 
}

initMap();
