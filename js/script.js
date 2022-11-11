const apiKey = 'cd9bdd00ecb28000e4d862b0';

const valor = document.querySelector('#valor'),
    btnFlecha = document.querySelector('#flecha'),
    txtConversion = document.querySelector('#txtConversion'),
    btnResultado = document.querySelector('#btnResultado'),
    valorInicial = document.querySelector('#valorInicial'),//Revisar
    valorFinal = document.querySelector('#valorFinal'),
    desplegable = document.querySelectorAll('form select')//Revisar

const crearSelectsValores = async () => {
    const respuesta = await fetch('./js/valores.json');
    const valoresJson = await respuesta.json();

    desplegable.forEach((element, index) => {
        for (const item of valoresJson) {
            let valorPredeterminado = (index == 0) ? ((item.nombre == 'Byte') ? 'selected' : '') : ((item.nombre == 'bit') ? 'selected' : '');
            let html = `<option value = "${item.nombre}" ${valorPredeterminado}>${item.nombre}</option>`;
            element.insertAdjacentHTML('beforeend', html);
        }
    });
}

crearSelectsValores();

function calculoValores() {
    if (valor.value == 0 || valor.value == '') {
        Swal.fire({
            icon: 'error',
            title: 'Error!',
            text: 'Debe ingresar un valor mayor a cero'
        })
    }

    let valorDato = parseFloat(valor.value);
    //Bit
    if (valorInicial.value == 'bit' && valorFinal.value == 'bit') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'bit' && valorFinal.value == 'Byte') {
        let resultado = (valorDato / 8).toFixed(2);
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'bit' && valorFinal.value == 'Kilobyte') {
        let resultado = (valorDato / 8000).toFixed(2);
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'bit' && valorFinal.value == 'Megabyte') {
        let resultado = (valorDato / 8e+6);
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'bit' && valorFinal.value == 'Gigabyte') {
        let resultado = (valorDato / 8e+9);
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'bit' && valorFinal.value == 'Terabyte') {
        let resultado = (valorDato / 8e+12);
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'bit' && valorFinal.value == 'Petabyte') {
        let resultado = (valorDato / 8e+15);
        txtConversion.innerHTML = valorDato + ' bits es ' + resultado + ' petabytes';
    }
    //Byte
    if (valorInicial.value == 'Byte' && valorFinal.value == 'bit') {
        let resultado = valorDato * 8;
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'Byte' && valorFinal.value == 'Byte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'Byte' && valorFinal.value == 'Kilobyte') {
        let resultado = (valorDato / 1000);
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'Byte' && valorFinal.value == 'Megabyte') {
        let resultado = (valorDato / 1e+6);
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'Byte' && valorFinal.value == 'Gigabyte') {
        let resultado = (valorDato / 1e+9);
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'Byte' && valorFinal.value == 'Terabyte') {
        let resultado = (valorDato / 1e+12);
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'Byte' && valorFinal.value == 'Petabyte') {
        let resultado = (valorDato / 1e+15);
        txtConversion.innerHTML = valorDato + ' bytes es ' + resultado + ' petabytes';
    }
    //Kilobyte
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'bit') {
        let resultado = valorDato * 8000;
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'Byte') {
        let resultado = valorDato * 1000;
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'Kilobyte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'Megabyte') {
        let resultado = (valorDato / 1000);
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'Gigabyte') {
        let resultado = (valorDato / 1e+6);
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'Terabyte') {
        let resultado = (valorDato / 1e+9);
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'Kilobyte' && valorFinal.value == 'Petabyte') {
        let resultado = (valorDato / 1e+12);
        txtConversion.innerHTML = valorDato + ' kilobytes es ' + resultado + ' petabytes';
    }
    //Megabyte
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'bit') {
        let resultado = valorDato * 1e+6;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'Byte') {
        let resultado = valorDato * 1e+6;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'Kilobyte') {
        let resultado = valorDato * 1000;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'Megabyte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'Gigabyte') {
        let resultado = valorDato / 1000;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'Terabyte') {
        let resultado = valorDato / 1e+6;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'Megabyte' && valorFinal.value == 'Petabyte') {
        let resultado = valorDato / 1e+9;
        txtConversion.innerHTML = valorDato + ' megabytes es ' + resultado + ' petabytes';
    }
    //Gigabyte
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'bit') {
        let resultado = valorDato * 8e+9;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'Byte') {
        let resultado = valorDato * 1e+9;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'Kilobyte') {
        let resultado = valorDato * 1e+6;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'Megabyte') {
        let resultado = valorDato * 1000;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'Gigabyte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'Terabyte') {
        let resultado = valorDato / 1e+6;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'Gigabyte' && valorFinal.value == 'Petabyte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' gigabytes es ' + resultado + ' petabytes';
    }
    //Terabyte
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'bit') {
        let resultado = valorDato * 1e+12;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'Byte') {
        let resultado = valorDato * 1e+12;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'Kilobyte') {
        let resultado = valorDato * 1e+9;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'Megabyte') {
        let resultado = valorDato * 1e+6;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'Gigabyte') {
        let resultado = valorDato * 1000;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'Terabyte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'Terabyte' && valorFinal.value == 'Petabyte') {
        let resultado = valorDato / 1000;
        txtConversion.innerHTML = valorDato + ' terabytes es ' + resultado + ' petabytes';
    }
    //Petabyte
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'bit') {
        let resultado = valorDato * 8e+15;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' bits';
    }
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'Byte') {
        let resultado = valorDato * 1e+15;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' bytes';
    }
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'Kilobyte') {
        let resultado = valorDato * 1e+12;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' kilobytes';
    }
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'Megabyte') {
        let resultado = valorDato * 1e+9;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' megabytes';
    }
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'Gigabyte') {
        let resultado = valorDato * 1e+6;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' gigabytes';
    }
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'Terabyte') {
        let resultado = valorDato * 1000;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' terabytes';
    }
    if (valorInicial.value == 'Petabyte' && valorFinal.value == 'Petabyte') {
        let resultado = valorDato * 1;
        txtConversion.innerHTML = valorDato + ' petabytes es ' + resultado + ' petabytes';
    }
}

btnResultado.addEventListener('click', (e) => {
    e.preventDefault();
    calculoValores();
});

btnFlecha.addEventListener('click', () => {
    let invertir = valorInicial.value;
    valorInicial.value = valorFinal.value;
    valorFinal.value = invertir;
})