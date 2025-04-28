const botaoAdicionar = document.querySelector('.btn-primary');
const campoTexto = document.querySelector('input[type="text"]');
const containerTarefas = document.querySelector('.d');
const filtroSelect = document.getElementById('filtro');

// Adiciona tarefa
botaoAdicionar.addEventListener('click', function() {
    const texto = campoTexto.value.trim();

    if (texto !== '') {
        const p = document.createElement('p');
        p.className = 'espacamento';
        p.style.display = 'flex';
        p.style.justifyContent = 'space-between';
        p.style.alignItems = 'center';
        p.style.marginTop = '10px';

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

        spanBotoes.appendChild(botaoOk);
        spanBotoes.appendChild(botaoExcluir);

        p.appendChild(spanTexto);
        p.appendChild(spanBotoes);

        containerTarefas.appendChild(p);

        // Marcar tarefa como concluída
        botaoOk.addEventListener('click', function() {
            if (p.classList.contains('pendente')) {
                p.classList.remove('pendente');
                p.classList.add('concluida');
            } else if (p.classList.contains('concluida')) {
                p.classList.remove('concluida');
                p.classList.add('pendente');
            }
            aplicarFiltro();
        });

        // Excluir tarefa
        botaoExcluir.addEventListener('click', function() {
            p.remove();
            aplicarFiltro();
        });

        p.classList.add('pendente'); // Inicialmente a tarefa é pendente
        campoTexto.value = '';
        aplicarFiltro();
    }
});

// Função para aplicar o filtro
filtroSelect.addEventListener('change', function() {
    aplicarFiltro();
});

function aplicarFiltro() {
    const statusFiltro = filtroSelect.value;
    const tarefas = containerTarefas.querySelectorAll('p');

    tarefas.forEach(tarefa => {
        const status = tarefa.classList.contains('concluida') ? 'feitos' : 'nao-feitos';

        if (statusFiltro === 'todas') {
            tarefa.style.display = 'flex';
        } else if (statusFiltro === 'feitos' && status === 'feitos') {
            tarefa.style.display = 'flex';
        } else if (statusFiltro === 'nao-feitos' && status === 'nao-feitos') {
            tarefa.style.display = 'flex';
        } else {
            tarefa.style.display = 'none';
        }
    });
}
