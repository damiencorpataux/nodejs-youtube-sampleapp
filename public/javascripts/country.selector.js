$(document).ready(function(){
  $('#countries').select2({
    placeholder: 'Select an country' // although it should not happen
  });
});
function updateCountry(countryCode) {
  var searchParams = new URLSearchParams(window.location.search);
  searchParams.set("country", countryCode);
  window.location.search = searchParams.toString();
}
