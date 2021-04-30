var tiro1;
var tiro2;
var posiciones = [0, -160, -320, -481, -642, -803];
var dado1, dado2, botonTirar;
var turno = 0
window.onload = init;

function init() {
    botonTirar = document.getElementById("botonTirar");

    dado1 = document.getElementById("dado1");
    dado2 = document.getElementById("dado2");
}

function tirardado() {
    return Math.floor(Math.random() * 6) + 1;
}

function actualizarDado(ref, cara) {
    ref.style.backgroundPosition = posiciones[cara - 1] + "px";
}

function jugar() {
    tiro1 = tirardado();
    tiro2 = tirardado();

    actualizarDado(dado1, tiro1);
    actualizarDado(dado2, tiro2);
    
    turno++;
    var resultado = tiro1 + tiro2;
    var textoResultado = '';


    if (resultado == 7 || resultado == 11) { 
        // textoResultado = textoResultado + 'Hey how lucky, you won'; 
        textoResultado += `Turno ${turno} Hey how lucky, you won`;
    }

    if (resultado == 2 || resultado == 3 || resultado == 12) {
        // textoResultado =  textoResultado + 'Shame buddy, you lost';
        textoResultado += `Turno ${turno} Shame buddy, you lost`;
    }

    if (resultado == 4 || resultado == 5 || resultado == 6 || resultado == 8 || resultado == 9 || resultado == 10) {
        // textoResultado = textoResultado + 'Congrats! You scored a point';
        textoResultado += `Turno ${turno} Congrats! You scored a point`;
    }

    document.getElementById('resultado').innerHTML = textoResultado;
}