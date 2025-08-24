// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    // Basic validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      document.getElementById('formResponse').textContent = "Please fill in all fields.";
      return;
    }
  
    // Simulate form submission
    document.getElementById('formResponse').textContent = "Thank you! Your message has been sent.";
    
    // Reset form
    this.reset();
  });
  