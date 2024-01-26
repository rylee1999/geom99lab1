import { faBus } from "@fortawesome/free-solid-svg-icons";
const parser = new DOMParser();

async function initMap() {
  // Request needed libraries.
  const { Map } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement, PinElement } = await google.maps.importLibrary(
    "marker",
  );
  const map = new Map(document.getElementById("map"), {
    center: { lat: 37.419, lng: -122.02 },
    zoom: 14,
    mapId: "4504f8b37365c3d0",
  });
  // Each PinElement is paired with a MarkerView to demonstrate setting each parameter.
  // Default marker with title text (no PinElement).
  const markerViewWithText = new AdvancedMarkerElement({
    map,
    position: { lat: 37.419, lng: -122.03 },
    title: "Title text for the marker at lat: 37.419, lng: -122.03",
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
   // use a FontAwesome svg
  new google.maps.Marker({
    position: { lat: 36.6163, lng: -100.61 },
    map,
    icon: {
      path: faBus.icon[4],
      fillColor: "#0000ff",
      fillOpacity: 1,
      anchor: new google.maps.Point(
        faBus.icon[0] / 2, // width
        faBus.icon[1], // height
      ),
      strokeWeight: 1,
      strokeColor: "#ffffff",
      scale: 0.075,
    },
    title: "FontAwesome SVG Marker",
  });
}

window.initMap = initMap;
