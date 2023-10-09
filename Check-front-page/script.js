function validarEmail(email) {
    // Expressão regular para validar um endereço de e-mail
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
  // Exemplo de uso:
  var email = "exemplo@email.com";
  if (validarEmail(email)) {
    console.log("O e-mail é válido.");
  } else {
    console.log("O e-mail não é válido.");
  }
  