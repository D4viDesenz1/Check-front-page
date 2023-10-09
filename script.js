function validarEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  var email = "exemplo@email.com";
  if (validarEmail(email)) {
    console.log("O e-mail é válido.");
  } else {
    console.log("O e-mail não é válido.");
  }
  