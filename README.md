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
