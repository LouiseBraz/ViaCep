class CadastroForm {
  nome = null;
  email = null;
  senha = null;
  confSenha = null;
  rg = null;
  cep = null;
  estado = null;
  cidade = null;
  bairro = null;
  rua = null;
  numero = null;
  complemento = null;

  constructor(person, address) {
    this.nome = person.nome;
    this.email = person.email;
    this.senha = person.senha;
    this.confSenha = person.confSenha;
    this.rg = person.rg;
    this.cep = address.cep;
    this.estado = address.estado;
    this.cidade = address.cidade;
    this.bairro = address.bairro;
    this.rua = address.rua;
    this.numero = address.numero;
    this.complemento = address.complemento;
  }

  log (error) {
    console.log(error);
  }

  validate () {
    try {
      if(!this.nome.length) throw new Error('Nome vazio')
      if(!this.email.length) throw new Error('Email vazio')
      if(!this.senha.length) throw new Error('Senha vazia')
      if(!this.confSenha.length) throw new Error('Confirmação de senha vazia')
      if(this.confSenha !== this.senha) throw new Error('Senha e Confirmação de senha devem ser iguais')
      if(!this.rg.length) throw new Error('RG vazio')
      if(!this.cep.length) throw new Error('CEP vazio')
      if(!this.estado.length) throw new Error('Estado vazio')
      if(!this.bairro.length) throw new Error('Bairro vazio')
      if(!this.rua.length) throw new Error('Rua vazio')
      return true;
    } catch (error) {
      this.log(error);
      alert(error.message);
      return false;
    }
  }

  getParams () {
    return JSON.stringify({
      nome: this.nome,
      email: this.email,
      senha: this.senha,
      confSenha: this.confSenha,
      rg: this.rg,
      cep: this.cep,
      estado: this.estado,
      cidade: this.cidade,
      bairro: this.bairro,
      rua: this.rua,
      numero: this.numero,
      complemento: this.complemento,
    });
  }

  send() {
    if(this.validate()) {
      alert(`Formulário enviado: ${(this.getParams())}`);
    }
  }
}

function getFormPerson () {
  return {
    nome: document.getElementById('nome').value,
    email:  document.getElementById('email').value,
    senha:  document.getElementById('senha').value,
    confSenha:  document.getElementById('confSenha').value,
    rg:  document.getElementById('rg').value,
  }
}

function getFormAddress () {
  return {
    cep: document.getElementById('cep').value,
    estado: document.getElementById('estado').value,
    cidade:  document.getElementById('cidade').value,
    bairro:  document.getElementById('bairro').value,
    rua:  document.getElementById('rua').value,
    numero:  document.getElementById('numero').value,
    complemento:  document.getElementById('complemento').value,
  }
}

async function fillAddress () {
  try {
    getFormAddress();
      
    if(cep.value.length >= 8) {
      const data = await fetch(
        `http://viacep.com.br/ws/${cep.value}/json/`,
        {method: 'GET' })
      .then(response => response.json())
      .catch(error => console.log(error.message));
     
      estado.value = data.uf;
      cidade.value = data.localidade;
      bairro.value = data.bairro;
      rua.value = data.logradouro;
      numero.value = data.gia;
      complemento.value = data.complemento;
    } 
  } catch (error) {
    log(error);
  }
}

const Submit = () => {
  try {
    const person = getFormPerson();
    const address = getFormAddress();
    const form = new CadastroForm(person, address)
    form.send();
  } catch (error) {
    log(error);
  }
}

document.getElementById("cep").addEventListener("keyup", fillAddress);











