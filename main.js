// CASH DUM
let seltype = document.getElementById('typeSel');
let selsize = document.getElementById('sizeSel');
let txtK = document.getElementById('txtKilos');
let txtP = document.getElementById('txtPrecio');
let al = document.getElementById('alertDIV');

// INICIALIZADORES
habilitarSel();
eventos();

// LOGICA

function habilitarSel() {
    if (txtK.value != '' && txtP.value != '') {
        selsize.disabled = false;
        seltype.disabled = false;
    } else {
        selsize.disabled = true;
        seltype.disabled = true;
    }
}

function eventos() {
    txtK.addEventListener('keyup', validar);
    txtP.addEventListener('keyup', validar);
    selsize.addEventListener('change', calcular)
    seltype.addEventListener('change', calcular)
}

//PROGRAMAS
function validar(element) {

    if (element.key == '1' || element.key == '2' || element.key == '3' || element.key == '4' ||
        element.key == '5' || element.key == '6' || element.key == '7' || element.key == '8' ||
        element.key == '9' || element.key == '0' || element.key == '.') {

    } else {
        element.target.value = '';
    }

    habilitarSel();

}

function calcular(element) {

    let type = seltype.value;
    let size = selsize.value;
    let kilos = Number(txtK.value);
    let price = Number(txtP.value);
    let text = '';
    let res = 0;

    if (type != '' && size != '') {
        if (type == 'A') {
            if (size == '1') {
                // 20c
                res = kilos * (price + .20);
            } else {
                // 30
                res = kilos * (price + .30);
            }
        } else {
            if (size == '1') {
                // -30c
                res = kilos * (price - .30);
            } else {
                // -50c
                res = kilos * (price - .50);
            }
        }
        text = `<div class="alert bg-primary rounded text-white" >
                    Tipo: ${type} <br> Tamaño: ${size} <br> <strong> Costo: $${res.toFixed(2)}</strong>
                </div>`;
        al.innerHTML = text;
    }
}