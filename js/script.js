document.addEventListener('DOMContentLoaded' , () => {

const botaoMenu = document.querySelector('.menu-hamburguer');
const menuPrincipal = document.querySelector('#menu-principal');
botaoMenu.addEventListener('click' , () => {
    menuPrincipal.classList.toggle('aberto');
});
});

const applyMask = (input, mask) => {
    let value = input.value.replace(/\D/g, '');
    let formattedValue = '';
    let k = 0;

    for (let i = 0; i < mask.length; i++) {
        if (mask[i] === '#') {
            if (value[k]) {
                formattedValue += value[k++];
            } else {
                break;
            }
        } else {
            formattedValue += mask[i];
        }
    }
    input.value = formattedValue;
};


const maskCPF = (input) => {
    applyMask(input, '###.###.###-##');
};

const maskCEP = (input) => {
    applyMask(input, '#####-###');
};