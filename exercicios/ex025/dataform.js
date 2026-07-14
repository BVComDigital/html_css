// 1. Seleciona o formulário pelo ID
const formulario = document.getElementById('exemploform');

// 2. Escuta o momento em que o usuário clica em enviar (submit)
formulario.addEventListener('submit', function(event) {
    // Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    // 3. Coleta TODOS os dados do formulário automaticamente
    const dadosForm = new FormData(formulario);

    // 4. Transforma os dados em um objeto JavaScript limpo
    const dadosObjeto = Object.fromEntries(dadosForm.entries());

    // Pronto! Aqui você tem acesso a tudo
    console.log(dadosObjeto); 
    // O resultado no console será: { nome: "João", telefone: "(11) 99999-9999" }
});