var num1 = 0;
var num2 = 0;
var ind = 0;
var aux = 0;


function independente() {
    num1++;
    mostrarIndependente(num1);
    
}
function mostrarIndependente(soma) {
    document.getElementById("independente").value = soma;
}
function auxilio() {
    num2++;
    mostrarAuxilio(num2);
}
function mostrarAuxilio(soma) {
    document.getElementById("auxilio").value = soma;
}

function soma() {
    const ind = document.getElementsByClassName("btn-independente");
    const aux = document.getElementsByClassName("btn-auxilio");
    const resultado = document.getElementById("resultado");
    const resultPercInd = document.getElementById('percInd');
    const resultPercAux = document.getElementById('percAux');
    
    
    let percInd = 0;
    let percAux = 0;
    let somaInd = 0;
    let somaAux = 0;
    let total = 0;
    for (let m of ind) {
        somaInd += parseInt(m.value);
    }
    for (let n of aux) {
        somaAux += parseInt(n.value);
    }
    total = somaInd + somaAux;
    percInd = (100 * somaInd) / total;
    percAux = (100 * somaAux) / total;
    resultado.innerText = `${total}`;
    resultPercInd.innerText = `${percInd.toFixed(0)} %`;
    resultPercAux.innerText = `${percAux.toFixed(0)} %`;

    function drawChart() {
  
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Oportunidades com Idependencia',percInd],
          ['Oportunidades com Auxilio', percAux],          
        ]);
    
        var options = {
          title: 'Oportunidades  Independentes x Auxilio',
          is3D: true,
        };
    
        var chart = new google.visualization.PieChart(document.getElementById('piechart_3d'));
        chart.draw(data, options);
      }

      drawChart() 
}
function limpar() {
    location.reload();
    
}

/***google charts below */ 
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

