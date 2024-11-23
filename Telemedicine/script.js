
// Add hover effects to feature cards
document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'scale(1)';
    });
});

// Add search functionality
document.querySelector('.search-bar').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    document.querySelectorAll('.feature-card').forEach(card => {
        const text = card.textContent.toLowerCase();
        card.style.display = text.includes(searchTerm) ? 'block' : 'none';
    });
});

// Add click handlers for buttons
document.querySelectorAll('.action-button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`${button.textContent} button clicked!`);
    });
});
  
//Form handling  sign up and login
document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    const valid = validateForm();
  
    if (valid) {
      const formData = captureFormData();
      displaySummary(formData);
      document.getElementById('formSummary').style.display = 'block';
    }
  });
  
  document.querySelectorAll('input, select').forEach(element => {
    element.addEventListener('input', realTimeValidation);
  });
  
  function validateForm() {
    let isValid = true;
  }
  
  document.getElementById('signupForm').addEventListener('submit', function(event) {
      let valid = true;
  
      document.getElementById('signupForm').addEventListener('submit', function(event) {
          let valid = true;
    
        
          // Email validation
          const email = document.getElementById('email').value;
          const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (!emailPattern.test(email)) {
            document.getElementById('emailError').textContent = 'Please enter a valid email address.';
            valid = false;
          }
    
          // Password validation
          const password = document.getElementById('password').value;
          if (password.length < 8) {
            document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
            valid = false;
          }
    
          // Confirm Password validation
          const confirmPassword = document.getElementById('confirmPassword').value;
          if (password !== confirmPassword) {
            document.getElementById('confirmPasswordError').textContent = 'Passwords do not match.';
            valid = false;
          }
    
          // Age validation
          const age = document.getElementById('age').value;
          if (age < 18 || age > 100 || isNaN(age)) {
            document.getElementById('ageError').textContent = 'Please enter a valid age between 18 and 100.';
            valid = false;
          }
    
          // Terms and Conditions validation
          const terms = document.getElementById('terms').checked;
          if (!terms) {
            document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
            valid = false;
          }
    
          if (!valid) {
            event.preventDefault(); // Prevent form submission if validation fails
          }
        });
      // Email validation
      const email = document.getElementById('email').value;
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Please enter a valid email address.';
        valid = false;
      }
  
      // Password validation
      const password = document.getElementById('password').value;
      if (password.length < 8) {
        document.getElementById('passwordError').textContent = 'Password must be at least 8 characters long.';
        valid = false;
      }
  
      // Confirm Password validation
      const confirmPassword = document.getElementById('confirmpassword').value;
      if (password !== confirmPassword ) {
        document.getElementById('confirmpasswordError').textContent = 'Passwords do not match.';
        valid = false;
      }
  
      // Age validation
      const age = document.getElementById('age').value;
      if (age < 18 || age > 100 || isNaN(age)) {
        document.getElementById('ageError').textContent = 'Please enter a valid age between 18 and 100.';
        valid = false;
      }
      //gender validation
      const gender= document.getElementById('gender').checked;
      if (!gender) {
        document.getElementById('genderError').textContent = 'You must pick your gender.';
        valid = false;
      }
  
      // Terms and Conditions validation
      const terms = document.getElementById('terms').checked;
      if (!terms) {
        document.getElementById('termsError').textContent = 'You must agree to the terms and conditions.';
        valid = false;
      }
  
      if (!valid) {
        event.preventDefault(); // Prevent form submission if validation fails
      }
    });