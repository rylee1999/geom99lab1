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
 //emily.
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
 
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 44.340, lng: -78.535 }, 
    content: pinGlyph.element,
  });
  //balleyduf.
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
 
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 44.143, lng: 78.621 },
    content: pinGlyph.element,
  });
  //balsam.
  // Change the glyph color.
  const pinGlyph = new PinElement({
    glyphColor: "white",
  });
 
  const markerViewGlyph = new AdvancedMarkerElement({
    map,
    position: { lat: 44.625, lng: -78.864 }, 
    content: pinGlyph.element,
  });
  
}

initMap();
