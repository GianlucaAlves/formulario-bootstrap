Sistema de Coleta e Validação de Feedback Web
Aplicação web para coleta de feedbacks de usuários, com validação em tempo real e exibição de uma mensagem dinâmica de agradecimento baseada na nota e na categoria escolhida.

✨ Funcionalidades
Formulário de feedback com:

Nome

Nota (1 a 5)

Comentário

Categoria (produto, atendimento ou sugestão)

Validação em tempo real:

Validação nativa do navegador

Regras adicionais em JavaScript (incluindo validação de nome)

Mensagens de erro amigáveis

Mensagem dinâmica de agradecimento:

Uso de componente Alert do Bootstrap

Cor do alerta de acordo com a avaliação (positiva, neutra, negativa)

Emoji diferente para cada faixa de nota

Interface responsiva e acessível:

Layout centralizado

Comportamento consistente em diferentes tamanhos de tela

Melhorias de acessibilidade com atributos semânticos e aria-*

🛠 Tecnologias utilizadas
HTML5 semântico

form, fieldset, legend, label, main

Atributos: required, placeholder, min, max, autofocus, aria-label

CSS3

Layout responsivo com display: flex

box-sizing: border-box via seletor universal

Estados de foco com :focus

Feedback visual de validação com :valid e :invalid

Transições suaves (transition: background-color 0.5s ease)

Pseudo-elementos ::before para ícones decorativos nos rótulos

Bootstrap 5 (via CDN)

Grid system (.row, .col-md-6)

Classes de formulário (.form-control, .mb-3, etc.)

Componente Alert (alert-success, alert-warning, alert-danger)

JavaScript vanilla

Interceptação do envio do formulário (preventDefault)

Validação customizada de campos

Exibição de mensagens de erro com classes do Bootstrap (text-danger)

Montagem dinâmica da mensagem final com emoji por faixa de nota

🚀 Como executar
Clone o repositório:

bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
Abra o arquivo index.html diretamente no navegador
ou sirva o projeto com qualquer servidor HTTP simples.

Exemplo com VS Code Live Server ou um servidor estático à sua escolha.

🔍 Comportamento da aplicação
Ao carregar a página, o foco vai automaticamente para o campo de nome.

Enquanto o usuário preenche:

Campos obrigatórios e intervalos de nota são validados.

Mensagens de erro são exibidas abaixo dos campos, quando necessário.

Ao enviar o formulário com dados válidos:

A página não é recarregada.

Um Alert do Bootstrap aparece logo abaixo do formulário com:

Nome do usuário

Categoria selecionada

Comentário

Emoji e cor de fundo correspondentes à nota informada

🎯 Objetivo do projeto
Este projeto foi desenvolvido como uma avaliação prática e pensado para compor portfólio, demonstrando:

Domínio de HTML e CSS semântico

Integração com Bootstrap 5 sem dependência de frameworks JS

Manipulação de DOM usando apenas JavaScript puro

Preocupação com UX, mensagens de erro claras e acessibilidade básica
