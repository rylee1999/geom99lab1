const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    center: { lat: 44.402, lng: -78.759 }, 
    zoom: 8,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const markerViewWithText = new AdvancedMarkerElement({
    map,
    position: { lat: 44.402, lng: -78.759 },
    title: "Ken Reid Conservation Area",
  });
  // Adjust the scale.
  const pinScaled = new PinElement({
    scale: 1.5,
  });
  // emily park.
  const markerViewScaled = new AdvancedMarkerElement({
    map,
    position: { lat: 44.340, lng: -78.535 }, 
    content: pinScaled.element,
  });
  // Change the background color.
  const pinBackground = new PinElement({
    background: "#FBBC04",
  });
   // balsam lake.
  const markerViewBorder = new AdvancedMarkerElement({
    map,
    position: { lat: 44.626, lng: -78.865}, 
    content: pinBorder.element,
  });
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
  
  // ballyduff
  const markerViewBorder = new AdvancedMarkerElement({
    map,
    position: { lat: 444.143, lng: -78.621}, 
    content: pinBorder.element,
  });
 
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
 
}

initMap();
