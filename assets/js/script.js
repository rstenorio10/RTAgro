document.addEventListener('DOMContentLoaded', () => {
    const anoAtual = document.getElementById('ano-atual');
    const chipsAgro = document.querySelectorAll('.chip-agro');
    const resumoAgro = document.getElementById('agro-resumo');

    // Atualiza o ano no rodapé automaticamente
    if (anoAtual) {
        anoAtual.textContent = new Date().getFullYear();
    }

    // Interatividade dos botões de frentes agro na seção inicial
    const mensagensAgro = {
        pulverizacao:
            '<strong>Pulverização com Drones:</strong> Aplicação aérea direcionada para modernizar as operações da fazenda com agilidade e precisão no Norte e Nordeste.',
        lavoura:
            '<strong>Manejo na Lavoura:</strong> Experiência prática em campo, incluindo aplicações próximas a Cuiabá no controle de plantas herbáceas e cigarrinha.',
        clima:
            '<strong>Monitoramento Climático:</strong> Aferição em campo com medidor digital (ex.: 61,7% RH e 30,4 °C) para maior critério técnico na aplicação.'
    };

    if (chipsAgro.length && resumoAgro) {
        chipsAgro.forEach((chip) => {
            chip.addEventListener('click', () => {
                const alvo = chip.getAttribute('data-alvo');

                chipsAgro.forEach((item) => item.classList.remove('ativo'));
                chip.classList.add('ativo');

                if (alvo && mensagensAgro[alvo]) {
                    resumoAgro.innerHTML = mensagensAgro[alvo];
                }
            });
        });
    }
});