// Navegación Simple
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(sec => sec.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
}

// Inicialización de Gráficos con Chart.js
const ctxBar = document.getElementById('barChart').getContext('2d');
const barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May'],
        datasets: [{
            label: 'Casos Reportados',
            data: [12, 19, 3, 5, 2],
            backgroundColor: '#FF8C42'
        }]
    },
    options: { responsive: true, plugins: { title: { display: true, text: 'Tendencia Mensual' } } }
});

const ctxPie = document.getElementById('pieChart').getContext('2d');
new Chart(ctxPie, {
    type: 'doughnut',
    data: {
        labels: ['Virus', 'Epidemias', 'Otros'],
        datasets: [{
            data: [10, 5, 15],
            backgroundColor: ['#FF8C42', '#6B8E23', '#F3D266']
        }]
    }
});

// Manejo del Formulario
document.getElementById('form-paciente').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Registro guardado localmente (Simulación)');
    // Aquí iría el código para enviar los datos a tu PHP/Python
    this.reset();
});
