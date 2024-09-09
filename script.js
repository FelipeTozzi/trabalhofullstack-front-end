document.getElementById('formPessoa').addEventListener('submit', async (event) => {
    event.preventDefault();

    const Nome = document.getElementById('Nome').value;
    const cpf = document.getElementById('cpf').value;
    const telefone = document.getElementById('telefone').value;

    const addressData = {
        Nome,
        cpf,
        telefone,
    };

    try {
        const response = await fetch('http://localhost:3001/api/Pessoa', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            },
            body: JSON.stringify(addressData) 
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Endereço enviado';
            document.getElementById('formEndereco').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.message}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro no servidor';
    }
});
