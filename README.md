Visão geral
O projeto é uma aplicação web simples onde o usuário informa seu nome, uma nota de 1 a 5, um comentário e escolhe uma categoria (produto, atendimento ou sugestão). Após o envio, o sistema valida os dados em tempo real e exibe uma mensagem personalizada de agradecimento, incluindo o nome, a categoria selecionada e um emoji correspondente à nota, com destaque visual pela cor de fundo.​

Tecnologias e conceitos
HTML5 semântico com uso de <form>, <fieldset>, <legend>, <label>, <main> e atributos como required, placeholder, min, max, autofocus e aria-label para acessibilidade.​

CSS3 com layout responsivo, display: flex, seletor universal com box-sizing: border-box, foco visual com :focus, validação visual com :valid e :invalid, transições suaves em transition: background-color 0.5s ease e pseudo-elementos ::before para ícones decorativos nos rótulos.​

Bootstrap 5 via CDN, utilizando sistema de grid (.row, .col-md-6), classes de formulário (.form-control, espaçamentos como .mb-3) e componente Alert para exibir o retorno da avaliação com as classes de contexto (alert-success, alert-warning, alert-danger).​

JavaScript vanilla para interceptar o envio do formulário, impedir o reload, validar campos (incluindo regra de nome válido), exibir mensagens de erro amigáveis e montar dinamicamente a mensagem final com emoji adequado para cada faixa de nota.​

Funcionalidades principais
Formulário de feedback completo: campos de nome, nota numérica (1–5), comentário e categoria, agrupados semanticamente e com foco automático no nome ao carregar a página.​

Validação e UX: validação nativa do navegador combinada com validação customizada em JavaScript, mensagens de erro em texto com classes Bootstrap (text-danger) e feedback visual imediato enquanto o usuário preenche.​

Mensagem dinâmica de agradecimento: exibição de um Alert do Bootstrap logo abaixo do formulário com o resumo do feedback, cor de fundo correspondente à avaliação e emoji diferente para notas baixas, médias e altas.​

Estilo limpo e responsivo: layout centralizado, uso de flexbox e grid, hover em botões, cores suaves por categoria e pequenos detalhes visuais com pseudo-elementos para deixar a interface mais agradável.​

Objetivo do projeto
Este projeto foi desenvolvido como avaliação prática, mas pensado para portfólio: demonstra domínio de fundamentos de HTML/CSS, integração com Bootstrap, manipulação de DOM em JavaScript puro e cuidado com experiência do usuário e acessibilidade.
