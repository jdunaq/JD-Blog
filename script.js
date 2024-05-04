document.getElementById('colorButton').addEventListener('click', function() {
    var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    this.style.backgroundColor = randomColor;
  });
  
  document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevent the default form submission
  
    const name = document.getElementById('name').value;
    const feedback = document.getElementById('feedback').value;
  
    if (!name || !feedback) {
      alert("Please fill in all fields.");
      return;
    }
  
    fetch('/', {  // This should point to your server endpoint in a real app
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, feedback })
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('message').innerText = "Thank you for your feedback!";
      document.getElementById('feedbackForm').reset();
    })
    .catch(error => {
      document.getElementById('message').innerText = "Error submitting feedback!";
    });
  });
  