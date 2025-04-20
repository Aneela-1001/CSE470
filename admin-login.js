function adminLogin() {
    const password = document.getElementById('adminPassword').value;
    const message = document.getElementById('loginMessage');
  
    if (password === 'admin123') {
      window.location.href = '/dashboard.html'; // or wherever the admin dashboard is
    } else {
      message.style.display = 'block';
    }
  }
  