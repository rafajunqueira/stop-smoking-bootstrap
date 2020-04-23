var minutosVida = 0;
var diasVida = 0
var horasVida = 0
var tempoVida = 0

function isInputNumber(evt) {
    let ch = String.fromCharCode(evt.which);

    if (!(/[0-9]/.test(ch))) {
        evt.preventDefault();
    }

}

function plusOne(e) {
    let numCig = document.getElementById("num-cig");
    if (isNaN(numCig.value) || numCig.value == '') {
        numCig.value = 1;
    } else {
        numCig.value = parseInt(numCig.value) + 1;
    }
}

function plusTwo(e) {
    let numCig = document.getElementById("num-cig");
    if (isNaN(numCig.value) || numCig.value == '') {
        numCig.value = 2;
    } else {
        numCig.value = parseInt(numCig.value) + 2;
    }
}

function plusFive(e) {
    let numCig = document.getElementById("num-cig");
    if (isNaN(numCig.value) || numCig.value == '') {
        numCig.value = 5;
    } else {
        numCig.value = parseInt(numCig.value) + 5;
    }
}

function calcular() {
    var numCigDia = document.getElementById("num-cig").value;
    tempoVida = numCigDia * 11;

    if (tempoVida < 59) {
        returnAnswer(1);
    }

    if (tempoVida > 59 && tempoVida < 1440) {
        returnAnswer(2);
    }

    if (tempoVida > 1440) {
        returnAnswer(3);
    }
}

function returnAnswer(v) {
    if (v == 1) {
        alert(`1 Você perdeu ${tempoVida} minutos de vida hoje.`);
    }
    if (v == 2) {
        horasVida = parseInt(tempoVida / 60);
        minutosVida = tempoVida % 60;
        alert(`2 Você perdeu ${horasVida} horas e ${minutosVida} minutos de vida hoje.`);
    }
    if (v == 3) {
        horasVida = parseInt(tempoVida / 60);
        if (horasVida > 23) {
            do {
                diasVida++;
                horasVida = horasVida - 24;
            } while (horasVida > 23)
        }
        minutosVida = parseInt(horasVida % 60);
        alert(`3 Você perdeu ${diasVida} dias, ${horasVida} horas e ${minutosVida} minutos de vida hoje.`);
    }
}