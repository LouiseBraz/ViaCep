class RecuperacaoForm {
  email = null;

  constructor (email) {
    this.email = email;
  }

  log (error) {
    console.log(error);
  }

  validate () {
    try {
      if(!this.email) throw new Error('Email vazio')
      return true;
    } catch (error) {
      this.log(error);
      alert(error.message);
      return false;
    }
  }

  send () {
    if(this.validate()) alert(`O email de recuperação foi enviado para ${this.email}`)
  }
}

function getForm () {
  return {
    email: document.getElementById('email').value,
  }
}

function Submit () {
  const { email } = getForm();
  const form = new RecuperacaoForm(email);
  form.send();
}

