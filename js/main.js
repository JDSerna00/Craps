var tiro1 = 0;
var tiro2 = 0;
var posiciones = [0, -160, -320, -481, -642, -803];
var dado1, dado2, botonTirar;
var turno = 0;
var puntos = 0;
window.onload = init;

function init() {
    botonTirar = document.getElementById('botonTirar');

    dado1 = document.getElementById('dado1');
    dado2 = document.getElementById('dado2');
}

function tirardado() {
    return Math.floor(Math.random() * 6) + 1;
}

function reiniciar() {
    tiro1 = 0;
    tiro2 = 0;
    turno = 0;
    puntos = 0;
    
    document.getElementById('puntos').innerHTML = puntos;
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('boton_tirar').disabled = false;
}

function actualizarDado(ref, cara) {
    ref.style.backgroundPosition = posiciones[cara - 1] + 'px';
}

function jugar() {
    tiro1 = tirardado();
    tiro2 = tirardado();

    actualizarDado(dado1, tiro1);
    actualizarDado(dado2, tiro2);
    
    turno++;
    var resultado = tiro1 + tiro2;
    var textoResultado = '';

    if (puntos != 0) {
        if (resultado == 7) { 
            textoResultado += `Shame buddy, you lost`;
            document.getElementById('boton_tirar').disabled = true;
        } else if (puntos == resultado) {
            textoResultado += `Hey how lucky, you won`;
            document.getElementById('boton_tirar').disabled = true;
        }
        
        document.getElementById('resultado').innerHTML = textoResultado;
    } else {
        if (resultado == 7 || resultado == 11) { 
            textoResultado += `Hey how lucky, you won`;
            document.getElementById('boton_tirar').disabled = true;
        }
    
        if (resultado == 2 || resultado == 3 || resultado == 12) {
            textoResultado += `Shame buddy, you lost`;
            document.getElementById('boton_tirar').disabled = true;
        }
    
        if (resultado == 4 || resultado == 5 || resultado == 6 || resultado == 8 || resultado == 9 || resultado == 10) {
            textoResultado += `You have set a point`;
            puntos = resultado;
            document.getElementById('puntos').innerHTML = puntos;
        }

        document.getElementById('resultado').innerHTML = textoResultado;
    }
}