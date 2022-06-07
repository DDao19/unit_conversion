let num = 20;
document.getElementById("hero-num").textContent = num;

function length() {
  let feet = num * 3.281; // meters to feet
  let meters = num / 3.281; // foot to meters

  let result1 = feet.toFixed(3); // meters = feet
  let result2 = meters.toFixed(3); // feet = meters
  document.getElementById("length").textContent =
    num +
    " meters = " +
    result1 +
    " feet | " +
    num +
    " feet = " +
    result2 +
    "meters";
}

function volume() {
  let gallons = num / 3.785; // Liters to gallons
  let liters = num * 3.785; // gallons to liters

  let result1 = gallons.toFixed(3); // liters = gallons
  let result2 = liters.toFixed(3); // gallons = liters
  document.getElementById("volume").textContent =
    num +
    " liters = " +
    result1 +
    " gallons | " +
    num +
    " gallons = " +
    result2 +
    "liters";
}

function weight() {
  let pounds = num * 2.205; // kilos to pounds
  let kilos = num / 2.205; // pounds to kilos

  let result1 = pounds.toFixed(3); // kilos to pounds
  let result2 = kilos.toFixed(3); // pounds to kilos
  document.getElementById("weight").textContent =
    num +
    " kilos = " +
    result1 +
    " pounds | " +
    num +
    " pounds = " +
    result2 +
    "kilos";
}

length();
volume();
weight();
