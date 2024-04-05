function goToPageTwo() {
  var name = document.getElementById('name').value;
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var nameError = document.getElementById('nameError');
  var usernameError = document.getElementById('usernameError');
  var emailError = document.getElementById('emailError');

  nameError.innerHTML = '';
  usernameError.innerHTML = '';
  emailError.innerHTML = '';

  if (name === '') {
    nameError.innerHTML = 'Nama tidak boleh kosong';
    return false;
  }

  if (username === '') {
    usernameError.innerHTML = 'Username tidak boleh kosong';
    return false;
  }

  if (email === '') {
    emailError.innerHTML = 'Email tidak boleh kosong';
    return false;
  } else if (!isValidEmail(email)) {
    emailError.innerHTML = 'Format email tidak valid';
    return false;
  }

  document.getElementById('page1').style.display = 'none';
  document.getElementById('page2').style.display = 'block';
  return false;
}

function goToPageOne() {
  document.getElementById('page2').style.display = 'none';
  document.getElementById('page1').style.display = 'block';
}

function showSuccessMessage() {
  var password = document.getElementById('password').value;
  var gender = document.getElementById('gender').value;
  var phone = document.getElementById('phone').value;
  var passwordError = document.getElementById('passwordError');
  var genderError = document.getElementById('genderError');
  var phoneError = document.getElementById('phoneError');

  passwordError.innerHTML = '';
  genderError.innerHTML = '';
  phoneError.innerHTML = '';

  if (password === '') {
    passwordError.innerHTML = 'Password tidak boleh kosong';
    return false;
  }

  if (phone === '') {
    phoneError.innerHTML = 'Nomor Telepon tidak boleh kosong';
    return false;
  }

  if (gender === '') {
    genderError.innerHTML = 'Jenis kelamin tidak boleh kosong';
    return false;
  }

  document.getElementById('page2').style.display = 'none';
  document.getElementById('successMessage').style.display = 'block';
  return false;
}

function registerAgain() {
  document.getElementById('page1').style.display = 'block';
  document.getElementById('successMessage').style.display = 'none';
}

function isValidEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
