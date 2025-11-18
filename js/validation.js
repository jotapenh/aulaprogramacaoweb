const isValidCPF = (cpf) => {
    cpf = cpf.replace(/[^\d]/g, '');
    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) return false;

    let sum = 0;
    let remainder;

    for (let i = 1; i <= 9; i++) sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
    remainder = (sum * 10) % 11;
    if ((remainder === 10) || (remainder === 11)) remainder = 0;
    if (remainder !== parseInt(cpf.substring(10, 11))) return false;

    return true;
};

const showFeedback = (inputElement, message) => {
    const existingFeedback = inputElement.nextElementSibling;
    if (existingFeedback && existingFeedback.classList.contains('feedback-message')) {
        existingFeedback.remove();
    }

    const feedback = document.createElement('div');
    feedback.className = 'feedback-message';
    feedback.style.cssText = 'color: var(--cor-perigo); font-size: var(--fonte-pequena); margin-top: 4px;';
    feedback.textContent = message;
    
    inputElement.parentNode.insertBefore(feedback, inputElement.nextSibling);
};

export const handleFormSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const cpfInput = form.querySelector('#cpf');
    const telInput = form.querySelector('#telefone');
    
    let isValid = true;

    form.querySelectorAll('.feedback-message').forEach(el => el.remove());

    
    const rawCpf = cpfInput.value.replace(/[^\d]/g, '');
    if (!isValidCPF(rawCpf)) {
        showFeedback(cpfInput, 'CPF inválido. Verifique os números.');
        isValid = false;
    }

    
    const rawPhone = telInput.value.replace(/[^\d]/g, '');
    if (rawPhone.length < 10 || rawPhone.length > 11) {
        showFeedback(telInput, 'Telefone deve ter 10 ou 11 dígitos.');
        isValid = false;
    }

    
    if (isValid) {
        alert('✅ Dados validados com sucesso! Simulação de envio.');
        form.reset(); 
    } else {
        alert('❌ Por favor, corrija os erros destacados no formulário.');
    }
};