const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');

togglePassword.addEventListener('click', function() {
  // Toggle between password and text type
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;

  // Toggle eye icon class based on password visibility
  this.classList.toggle('fa fa-eye-slash'); // Font Awesome icon for hidden password
});
