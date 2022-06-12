class LoginForm {
  email = null;
  senha = null;

  DB = {
    pessoas: [
      {
        email: 'pedro@gmail.com',
        senha: '123456'
      },
      {
        email: 'maria@hotmail.com',
        senha: '654321'
      },
      {
        email: 'jose@gmail.com',
        senha: '321456'
      }
    ]
  }

  accessDB () {
    const login = this.DB.pessoas.filter((pessoa) => {
      return (pessoa.email === email.value && pessoa.senha === senha.value);
    })
    return (login.length);
  }

  constructor (email, senha) {
    this.email = email;
    this.senha = senha;
  }

  log (error) {
    console.log(error);
  }

  validate () {
    try {
      if(!this.email.length) throw new Error('Email vazio')
      if(!this.senha.length) throw new Error('Senha vazia')
      return true;
    } catch (error) {
      this.log(error);
      alert(error.message);
      return false;
    }
  }

  login () {
    if(this.accessDB()) {
      alert(`Usuário Logado: ${this.email}`);
    } else {
      alert("Falha de login, as informações digitadas podem estar incorretas");
    }
  }
}

function getForm () {
  return {
    email: document.getElementById('email').value,
    senha: document.getElementById('senha').value,
  }
}

function Submit () {
  const { email, senha } = getForm();
  const form = new LoginForm(email, senha)
  if (form.validate()) {
    form.login();
  }
}

