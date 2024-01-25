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
  const markerViewScaled = new AdvancedMarkerElement({
    map,
    position: { lat: 44.340, lng: -78.535 }, 
    content: pinScaled.element,
  });
  // Change the background color.
  const pinBackground = new PinElement({
    background: "#FBBC04",
  });
  const markerViewBackground = new AdvancedMarkerElement({
    map,
    position: { lat: 37.419, lng: -122.01 },
    content: pinBackground.element,
  });
  // Change the border color.
  const pinBorder = new PinElement({
    borderColor: "#137333",
  });
  const markerViewBorder = new AdvancedMarkerElement({
    map,
    position: { lat: 44.626, lng: -78.865}, 
    content: pinBorder.element,
  });
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 37.415, lng: -122.02 },
    content: pinGlyph.element,
  });
  // Hide the glyph.
  const pinNoGlyph = new PinElement({
    glyph: "",
  });
  const markerViewNoGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 444.144, lng: -78.621 }, 
    content: pinNoGlyph.element,
  });
}

initMap();
