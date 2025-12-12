// waits until document is loaded (could be circumvented by placing script at the bottom but this works too)
document.addEventListener('DOMContentLoaded', function() {

   // Changes the year to the correct one in the footer
   document.getElementById("dateChange").innerText = new Date().getFullYear() + " Alan Walker Barbadillo. All Rights Reserved.";
   console.log("date changed appropriately. footer now displays " + document.getElementById("dateChange").innerText)

   // Page Progress Scroll Bar Functionality
   window.onscroll = function() {updatesScrollBar()};


   function updatesScrollBar() {
      var windowScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (windowScroll / height) * 100;
      document.getElementById("progressBar").style.width = scrolled + "%";
   }

});

// adding proper mailing functionality
function sendEmail() {
      //getting values from form
      var name = document.getElementById("name").value;
      console.log(name); //checking if actually getting value
      var email = document.getElementById("email").value;
      var subject = document.getElementById("subject").value;
      var message = document.getElementById("message").value;

      // creating proper mailto link
      var subjectLine = "Subject - " + name + " (" + email + ")" + " - " + subject;
      var bodyContent = message + "\n\nFrom: " + name + "\nEmail: " + email;
      var mailtoLink = "mailto:x00204054@mytudublin.ie" + "?subject=" + encodeURIComponent(subjectLine) +"&body=" + encodeURIComponent(bodyContent);
  
      console.log("new mail being made:", mailtoLink);
      window.location.href = mailtoLink;
}  ;