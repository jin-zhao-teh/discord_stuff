function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Error");
  }
}

function showPosition(position) {
  alert(
    String(position.coords.latitude) + ", " + String(position.coords.longitude)
  );
}

getLocation();