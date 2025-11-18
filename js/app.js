const projectData = [
    { id: 1, title: "Resgate de Animais Silvestres", description: "Foco no resgate e reabilitação de fauna local.", tags: ["Urgente", "Silvestre"], image: "image/project1.png" },
    { id: 2, title: "Vacinação Comunitária", description: "Campanhas de vacinação em bairros carentes.", tags: ["Saúde", "Comunidade"], image: "image/project2.png" },
    { id: 3, title: "Adoção Responsável", description: "Promover feiras de adoção e conscientização.", tags: ["Adoção", "Bem-estar"], image: "image/project3.png" },
];

const projectCardTemplate = (project) => {
    const tagHtml = project.tags.map(tag => `<span class="badge badge-primary">${tag}</span>`).join('');

    return `
        <article class="card col-4">
            <img src="${project.image}" alt="Imagem do Projeto ${project.title}" class="card-imagem">
            <h3 class="card-titulo">${project.title}</h3>
            <p class="card-texto">${project.description}</p>
            <div>${tagHtml}</div>
            <a href="#" class="botao-acao" style="margin-top: 15px;">Saiba Mais</a>
        </article>
    `;
};

const renderProjects = () => {
    const projectContainer = document.querySelector('.projects-container');
    if (projectContainer) {
        projectContainer.innerHTML = projectData.map(projectCardTemplate).join('');
    }
};


import { handleFormSubmit } from './validation.js';

document.addEventListener('DOMContentLoaded', () => {


    const botaoMenu = document.querySelector('.menu-hamburguer');
    const menuPrincipal = document.querySelector('#menu-principal');

    if (botaoMenu && menuPrincipal) {
        botaoMenu.addEventListener('click', () => {
            menuPrincipal.classList.toggle('aberto');
        });
    }

    
    const registrationForm = document.querySelector('form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleFormSubmit);
    }
    
    
    const loadContent = () => {
        const path = window.location.pathname;
        
        if (path.includes('projetos.html')) {
            renderProjects();
        }
    };

    
    loadContent();
});