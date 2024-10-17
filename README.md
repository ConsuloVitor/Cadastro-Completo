<h1 align="center"> Cadastro Completo </h1>

![image](https://github.com/user-attachments/assets/430073cb-0399-4cee-ab73-15907e1f9f02)
<h3 align="center"> Este projeto contém três funções em JavaScript que realizam a validação de CPF e email, além de uma função para consulta de endereço usando a API do ViaCEP. </h3>
<h2>Funções Incluídas:</h2>
<h4>• Validação de CPF (validarCPF). </h4>
<h4>• Validação de Email (validarEmail). </h4>
<h4>• Consulta de Endereço por CEP (buscarEndereco). </h4>


## 1. Validação de CPF
> A função <code>validarCPF</code> verifica se um CPF é válido de acordo com as regras de validação dos dígitos verificadores.

<h2>Funcionamento:</h2>
<h4>• <code>Sanitização do CPF:</code> Remove todos os caracteres que não são dígitos.</h4>
<h4>• <code>Verificação de formato:</code> O CPF precisa ter exatamente 11 dígitos e não pode ser uma sequência repetida (como <code>"111.111.111-11"</code>). </h4>
<h4>• <code>Cálculo dos dígitos verificadores:</code> São feitos dois cálculos baseados nos primeiros 9 e 10 dígitos do CPF para validar os dois últimos dígitos. </h4>
<h4>• Se o CPF for inválido, a função exibe um alerta, limpa o campo do CPF e retorna <code>false</code>. </h4>

<h3 align="center"> Código </h3>

```
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        alert("CPF inválido");
        document.getElementById("cpf").value = "";
        return false;
    }
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) {
        alert("CPF inválido");
        document.getElementById("cpf").value = "";
        return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) {
        alert("CPF inválido");
        document.getElementById("cpf").value = "";
        return false;
    }
    return true;
}
```

## 2. Validação de Email
> A função <code>validarEmail</code> verifica se um endereço de email tem um formato válido usando uma expressão regular.

<h2>Funcionamento:</h2>
<h4> 1. Sanitização e validação do formato: A função utiliza uma expressão regular para garantir que o email tenha:</h4>
• Um nome de usuário seguido de <code>@</code>.

• Um domínio seguido por um ponto <code>.</code> e uma extensão de domínio válida.
<h4> 2. Se o CPF for inválido, a função exibe um alerta, limpa o campo do CPF e retorna <code>false</code>. </h4>
• Se o formato do email for inválido, a função exibe um alerta e limpa o campo de email.

• Se o formato for válido, a função retorna <code>true</code>.

<h3 align="center"> Código </h3>

```
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Email inválido");
        document.getElementById("email").value = "";
        return false;
    }
    return true;
}
```

## 2. Consulta de Endereço por CEP
> A função <code>buscarEndereco</code> consulta a API ViaCEP para obter o endereço completo (rua, bairro, cidade e estado) com base no CEP fornecido.

<h2>Funcionamento:</h2>
<h4> 1. <code>Sanitização do CEP:</code> Remove todos os caracteres que não são dígitos.</h4>

<h4> 2. <code>Verificação de formato:</code> O CEP deve conter exatamente 8 dígitos.</h4>

<h4> 3. <code>Consulta à API ViaCEP:</code></h4>
• Faz uma requisição à API para buscar o endereço.

• Se o CEP for encontrado, os campos de endereço do formulário são preenchidos automaticamente.

• Se houver um erro ou o CEP for inválido, uma mensagem de alerta será exibida.

<h3 align="center"> Código </h3>

```
function buscarEndereco(cep) {
    cep = cep.replace(/[^\d]/g, ''); // Remove caracteres não numéricos
    if (cep.length !== 8) {
        alert("CEP inválido");
        return;
    }

    const url = `https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.erro) {
                alert("CEP não encontrado!");
                return;
            }
            document.getElementById("rua").value = data.logradouro;
            document.getElementById("bairro").value = data.bairro;
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("estado").value = data.uf;
        })
        .catch(error => {
            console.error('Erro ao buscar o endereço:', error);
            alert("Erro ao buscar o endereço.");
        });
}
```
<h3 align="center"> Como Utilizar O Código </h3>














