document.addEventListener("DOMContentLoaded", function() {
    function calculateAge() {
      const currentYear = new Date().getFullYear();
      const birthYear = 2004;
      const age = currentYear - birthYear;
      document.getElementById('age-placeholder').textContent = age;
    }
    calculateAge();
  });
