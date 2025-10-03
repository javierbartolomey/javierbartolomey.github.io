function restar() {
    let valor1 = parseFloat(document.getElementById('numero1').value);
    let valor2 = parseFloat(document.getElementById('numero2').value);
    let resultado = valor1 - valor2;
    alert("El resultat es " + resultado);
}

function sumar() {
    let valor1 = parseFloat(document.getElementById('numero1').value);
    let valor2 = parseFloat(document.getElementById('numero2').value);
    let resultado = valor1 + valor2;
    alert("El resultat es " + resultado);
}

function multiplicar() {
    let valor1 = parseFloat(document.getElementById('numero1').value);
    let valor2 = parseFloat(document.getElementById('numero2').value);
    let resultado = valor1 * valor2;
    alert("El resultat es " + resultado);
}

function dividir() {
    let valor1 = parseFloat(document.getElementById('numero1').value);
    let valor2 = parseFloat(document.getElementById('numero2').value);
    let resultado = valor1 / valor2;
    alert("El resultat es " + resultado);
}