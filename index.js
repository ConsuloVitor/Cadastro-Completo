// Validação de CPF
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        alert("CPF inválido");
        document.getElementById("cpf").value = "";
        return false;
    }
    let soma = 0, resto;
    for (let i = 1; i <= 9; i++) soma += parseInt(cpf.substring(i-1, i)) * (11 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) {
        alert("CPF inválido");
        document.getElementById("cpf").value = "";
        return false;
    }
    soma = 0;
    for (let i = 1; i <= 10; i++) soma += parseInt(cpf.substring(i-1, i)) * (12 - i);
    resto = (soma * 10) % 11;
    if ((resto === 10) || (resto === 11)) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) {
        alert("CPF inválido");
        document.getElementById("cpf").value = "";
        return false;
    }
    return true;
}

// Validação de Email
function validarEmail(email) {
    // Expressão regular para validar formato de email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(email)) {
        alert("Email inválido");
        document.getElementById("email").value = "";
        return false;
    }
    return true;
}

// Consumir API de CEP
function buscarEndereco(cep) {
    cep = cep.replace(/[^\d]/g, '');
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