# QueroEstudar

Protótipo de uma plataforma para ajudar estudantes a organizar a rotina acadêmica. A interface usa um tema escuro com cores quentes e se adapta a telas menores.

## Páginas

- **Entrar** (`index.html`): tela de login demonstrativa.
- **Cadastro** (`cadastro.html`): formulário de criação de conta demonstrativo.
- **Início** (`app/dashboard.html`): página principal com atalhos para as ferramentas.
- **Calendário** (`app/calendario.html`): espaço reservado para eventos e compromissos.
- **Horários** (`app/horarios.html`): espaço reservado para a grade de aulas.
- **Anotações** (`app/anotacoes.html`): espaço reservado para notas de estudo.
- **Biblioteca** (`app/biblioteca.html`): espaço reservado para materiais.

O projeto ainda não tem back-end: os formulários não autenticam usuários e as páginas de estudo ainda não salvam dados.

## Como abrir

Não é necessário instalar dependências nem executar uma etapa de build. Abra `index.html` no navegador ou use a extensão **Live Server** do VS Code para servir o projeto localmente.

## Estrutura

```text
.
├── index.html
├── cadastro.html
├── styles.css
├── sidebar.js
├── assets/
│   ├── icons/
│   │   └── logo.svg
│   └── images/
└── app/
    ├── dashboard.html
    ├── calendario.html
    ├── horarios.html
    ├── anotacoes.html
    └── biblioteca.html
```

## Navegação

As páginas em `app/` compartilham a folha de estilos `styles.css` e o comportamento do menu lateral em `sidebar.js`. O menu pode ser recolhido no desktop e aberto como painel em telas menores. A preferência de recolhimento é guardada no armazenamento local do navegador.