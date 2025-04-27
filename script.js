const botaoAdicionar = document.querySelector('.btn-primary');
const campoTexto = document.querySelector('input[type="text"]');
const containerTarefas = document.querySelector('.d');

botaoAdicionar.addEventListener('click', function() {
    const texto = campoTexto.value.trim();

    if (texto !== '') {
        const p = document.createElement('p');
        p.className = 'espacamento';
        p.style.display = 'flex';
        p.style.justifyContent = 'space-between';
        p.style.alignItems = 'center';
        p.style.marginTop = '10px'; // Só para dar uma separada visual se quiser

        const spanTexto = document.createElement('span');
        spanTexto.textContent = texto;

        const spanBotoes = document.createElement('span');

        const botaoOk = document.createElement('button');
        botaoOk.type = 'button';
        botaoOk.className = 'btn btn-success';
        botaoOk.innerHTML = '<i class="bi bi-check-lg"></i>';

        const botaoExcluir = document.createElement('button');
        botaoExcluir.type = 'button';
        botaoExcluir.className = 'btn btn-danger';
        botaoExcluir.innerHTML = '<i class="bi bi-x-lg"></i>';

        // Colocar os botões dentro do span
        spanBotoes.appendChild(botaoOk);
        spanBotoes.appendChild(botaoExcluir);

        // Colocar o texto e botões dentro do <p>
        p.appendChild(spanTexto);
        p.appendChild(spanBotoes);

        // Adicionar o <p> na div .d
        containerTarefas.appendChild(p);

        // Limpar o campo de texto
        campoTexto.value = '';

        // Evento de marcar como concluído
        botaoOk.addEventListener('click', function() {
            spanTexto.style.textDecoration = 'line-through';
            spanTexto.style.color = 'gray';
        });

        // Evento de excluir
        botaoExcluir.addEventListener('click', function() {
            p.remove();
        });
    }
});