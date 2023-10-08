// Selecionar o formulário e os campos de entrada
const form = document.getElementById("cadastro-form");
const nomeInput = document.getElementById("nome");
const emailInput = document.getElementById("email");
const SobrenomeInput = document.getElementById("Sobrenome");

// Adicionar um evento de envio ao formulário
form.addEventListener("submit", function (e) {
    // Impedir o envio padrão do formulário
    e.preventDefault();

    // Verificar se todos os campos estão preenchidos
    if (nomeInput.value.trim() === "" || emailInput.value.trim() === "" || senhaInput.value.trim() === "") {
        alert("Por favor, preencha todos os campos.");
    } else {
        // Se todos os campos estiverem preenchidos, você pode enviar os dados para o servidor ou realizar outra ação aqui.
        alert("Cadastro realizado com sucesso!");
        // Limpar os campos após o envio (opcional)
        form.reset();
    }
});
