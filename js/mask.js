const applyMask= (value, pattern) => {
    let i = 0;
    const v = value.toString().replace(/\D/g, '');
    return pattern.replace(/#/g, () => v[i++] || '');
};

export const maskCPF = (input) => {
    input.value = applyMask(input.value, '###.###.###-##');
};

export const maskCEP = (input) => {
    input.value = applyMask(input.value, '#####-###');
};

export const maskTelefone = (input) => {
    const isCelular = input.value.replace(/\D/g, ''). length > 10;
    const pattern = isCelular ? '(##) #####-####' : '(##) ####-####';
    input.value = applyMask(input.value, pattern);
}

window.maskCPF = maskCPF;
window.maskCEP = maskCEP;
window.maskTelefone = maskTelefone;