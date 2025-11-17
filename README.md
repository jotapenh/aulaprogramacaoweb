# PROJETO: PLATAFORMA WEB - ANIMAPET

## 📋 Descrição do Projeto

Este é o projeto final para a disciplina de Sistemas Web, desenvolvido para a Plataforma de Engajamento Social **ANIMAPET**. O objetivo é criar uma plataforma web completa e responsiva, focada em performance, acessibilidade (WCAG 2.1 Nível AA) e boas práticas de desenvolvimento (Design System, Versionamento GitFlow).

O projeto é composto por três páginas principais:
1. **Página Inicial (`index.html`):** Apresentação da ONG, missão e estatísticas.
2. **Página de Projetos (`projetos.html`):** Detalhes dos projetos em andamento, utilizando layout em Grid.
3. **Página de Cadastro (`cadastro.html`):** Formulário completo para voluntários com validação de dados.

## ✨ Requisitos Técnicos e Implementação

O projeto atende integralmente aos requisitos obrigatórios das Entregas I, II, III e IV.

### 🎨 Design System (Entrega I)

* **Paleta de Cores:** Implementada com 8 variáveis CSS (`:root`).
* **Tipografia:** Implementada com 5 tamanhos de fonte variáveis.
* **Espaçamento:** Implementado com 6 valores modulares (`rem`).
* **Componentes:** Implementação de Badges, Alertas, Cards e Botões.

### 📐 Layout e Responsividade (Entrega II)

* **Layout:** Utilização de **CSS Grid** e **Flexbox** para o layout principal (Header, Main, Footer).
* **Responsividade:** Implementação de **Media Queries** para adaptação em dispositivos móveis (Mobile-First).

### ⚙️ Funcionalidades e Validação (Entrega III)

* **Validação de Formulário:** Validação de todos os campos do `cadastro.html` usando atributos HTML5 e pseudo-classes CSS (`:valid`, `:invalid`).
* **JavaScript:** Implementação de lógica JS para o menu *dropdown* e funcionalidade do *menu-hamburguer* em telas menores.

### 🔒 Acessibilidade e Versionamento (Entrega IV)

* **Acessibilidade (WCAG 2.1 AA):**
    * Garantia de **Contraste Mínimo (4.5:1)**.
    * Implementação de **Navegação por Teclado** (`:focus` em links e botões).
    * Implementação de **Modo Escuro Acessível** via `@media (prefers-color-scheme: dark)`.
* **Versionamento:**
    * Estratégia **GitFlow** (Branches `main`, `develop`, `feature/*`).
    * Histórico de **Commits Semânticos** (`feat`, `fix`, `chore`).
* **Otimização para Produção:**
    * **Minificação:** Remoção de espaços e quebras de linha no HTML.
    * **Compressão de Imagens:** Conceito configurado (simulando otimização de arquivos na pasta `imagem/`).

## 🛠️ Tecnologias Utilizadas

* HTML5
* CSS3 (Variáveis CSS, Grid, Flexbox, Media Queries)
* JavaScript

## 👤 Desenvolvedor

* **Nome:** João Pedro Nunes Da Hora
* **RGM:** 46095683