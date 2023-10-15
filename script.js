document.addEventListener("DOMContentLoaded", function() {
    function calculateAge() {
      const currentYear = new Date().getFullYear();
      const birthYear = 2004;
      const age = currentYear - birthYear;
  
      // Update the age placeholder in the HTML
      document.getElementById('age-placeholder').textContent = age;
    }
  
    // Call the function to calculate and display the age
    calculateAge();
  });
  