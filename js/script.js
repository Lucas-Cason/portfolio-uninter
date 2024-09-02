document.querySelector('.form-contact').addEventListener('submit', function(event) {
   event.preventDefault(); // Evita o envio do formulário para propósitos de demonstração

   // Captura os valores dos campos do formulário
   const nome = document.querySelector('#name').value;
   const email = document.querySelector('#email').value;
   const mensagem = document.querySelector('#message').value;

   // Verifica se todos os campos estão preenchidos
   if (nome === '' || email === '' || mensagem === '') {
       alert('Por favor, preencha todos os campos.');
   } else {
       // Exemplo de como exibir os dados do formulário
       alert(`Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`);
   }
});
