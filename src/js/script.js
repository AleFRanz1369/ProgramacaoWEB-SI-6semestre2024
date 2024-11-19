// Set default dark mode
document.body.classList.add('dark-mode');

// Toggle dark mode theme
const toggleThemeButton = document.getElementById('toggle-theme');
const pageTitle = document.getElementById('page-title');
toggleThemeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');

    if (document.body.classList.contains('dark-mode')) {
        toggleThemeButton.textContent = '☀️ Modo Claro';
        pageTitle.style.color = '#f4f4f4';
    } else {
        toggleThemeButton.textContent = '🌙 Modo Escuro';
        pageTitle.style.color = '#333';
    }
});

// Accessibility menu toggle
const accessibilityButton = document.getElementById('accessibility-btn');
const accessibilityMenu = document.getElementById('accessibility-menu');
accessibilityButton.addEventListener('click', () => {
    accessibilityMenu.classList.toggle('hidden');
    accessibilityMenu.classList.toggle('visible');
});

// Font size control
const increaseFontButton = document.getElementById('increase-font');
const decreaseFontButton = document.getElementById('decrease-font');
const resetFontButton = document.getElementById('reset-font');
let fontSize = 1; 

increaseFontButton.addEventListener('click', () => {
    fontSize += 0.1;
    document.body.style.fontSize = `${fontSize}em`;
});

decreaseFontButton.addEventListener('click', () => {
    fontSize = Math.max(0.8, fontSize - 0.1); 
    document.body.style.fontSize = `${fontSize}em`;
});

resetFontButton.addEventListener('click', () => {
    fontSize = 1;
    document.body.style.fontSize = `${fontSize}em`;
    pageTitle.style.textAlign = 'left';
});

// Title alignment controls
document.getElementById('align-left').addEventListener('click', () => {
    pageTitle.classList.remove('centered', 'right');
    pageTitle.style.textAlign = 'left';
});

document.getElementById('align-center').addEventListener('click', () => {
    pageTitle.classList.remove('right');
    pageTitle.classList.add('centered');
    pageTitle.style.textAlign = 'center';
});

document.getElementById('align-right').addEventListener('click', () => {
    pageTitle.classList.remove('centered');
    pageTitle.classList.add('right');
    pageTitle.style.textAlign = 'right';
});

// Toggle width of the table
const toggleWidthButton = document.getElementById('toggle-width');
const mainTable = document.getElementById('main-table');

toggleWidthButton.addEventListener('click', () => {
    mainTable.classList.toggle('full-width');
    mainTable.classList.toggle('normal-width');

    if (mainTable.classList.contains('full-width')) {
        toggleWidthButton.textContent = '🔄 Modo Normal';
    } else {
        toggleWidthButton.textContent = '🔄 Tela Completa';
    }
});

// Data counter
const dataCounter = document.getElementById('data-counter');
const valorInicial = 36; // Valor inicial para subtração

const updateDataCounter = () => {
    const rows = document.querySelectorAll('tbody tr');
    const rowCount = rows.length;
    dataCounter.textContent = `Registros preenchidos: ${rowCount}`;
    return rowCount; // Retorna o número de linhas
};


// Atualiza o contador e gera o gráfico
const rowCount = updateDataCounter();
const valorRestante = valorInicial - rowCount;

// Configuração do gráfico donut
const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
    type: 'doughnut', // Tipo de gráfico
    data: {
        labels: ['Em andamemto', 'Preenchido'], // Rótulos do gráfico
        datasets: [{
            label: 'Número de Registros',
            data: [valorRestante, rowCount], // Usa o valor restante e o número de registros
            backgroundColor: [
                'rgba(0, 0, 255, 0.4)', // Cor do restante
                'rgba(75, 192, 192, 0.2)'  // Cor dos preenchidos
            ],
            borderColor: [
                'rgba(0, 0, 255, 1)',
                'rgba(75, 192, 192, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Evolução dos projetos entregues'
            }
        }
    }
});
