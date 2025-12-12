// waits until document is loaded (could be circumvented by placing script at the bottom but this works too)
document.addEventListener('DOMContentLoaded', function() {

   // Changes the year to the correct one in the footer
   document.getElementById("dateChange").innerText = new Date().getFullYear() + " Alan Walker Barbadillo. All Rights Reserved.";
   console.log("date changed appropriately. footer now displays " + document.getElementById("dateChange").innerText)

});


