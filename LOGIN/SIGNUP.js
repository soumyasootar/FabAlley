
      document.getElementById('form').addEventListener('submit', function() {
        // Get the value of the name field.
        var username = document.getElementById('username').value;
        // var password = document.getElementById('password').value;
  
        // Save the name in localStorage.
        localStorage.setItem('username', username);
        // localStorage.setItem('password', password);
        alert("Login successfully");
        location.href = "index.html";
      });

