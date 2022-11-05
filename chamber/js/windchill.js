const s = parseInt(document.getElementById("windSpeed").innerHTML);
const t = parseInt(document.getElementById("temp").innerHTML);

if (t <= 50 && s > 3.0) {
  const windchill =
    35.74 +
    0.6215 * t -
    35.75 * Math.pow(s, 0.16) +
    0.42756 * t * Math.pow(s, 0.16);
  document.getElementById("windChill").innerHTML =
    Math.round((windchill + Number.EPSILON) * 100) / 100;
} else {
  document.getElementById("windChill").innerHTML = "N/A";
}
