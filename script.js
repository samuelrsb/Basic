const numeroSecreto = Math.floor(Math.random() * 10) + 1;
let tentativas = 0;

function verificarAdivinhacao() {
    const entradaAdivinhacao = document.getElementById('entradaAdivinhacao');
    const mensagemResultado = document.getElementById('resultado');
    const palpiteUsuario = parseInt(entradaAdivinhacao.value);

    if (isNaN(palpiteUsuario) || palpiteUsuario < 1 || palpiteUsuario > 10) {
        mensagemResultado.textContent = 'Por favor, digite um número válido entre 1 e 10.';
    } else {
        tentativas++;

        if (palpiteUsuario === numeroSecreto) {
            mensagemResultado.textContent = `Parabéns! Você acertou o número em ${tentativas} tentativas.`;
            mensagemResultado.style.color = 'green';
            desabilitarEntradaEBotao();
        } else {
            mensagemResultado.textContent = palpiteUsuario > numeroSecreto ? 'Muito alto! Tente novamente.' : 'Muito baixo! Tente novamente.';
            mensagemResultado.style.color = 'red';
        }
    }
}

function desabilitarEntradaEBotao() {
    document.getElementById('entradaAdivinhacao').disabled = true;
    document.querySelector('button').disabled = true;
}
