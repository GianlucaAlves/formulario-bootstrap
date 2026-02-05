<div align="center">

# 📝 Sistema de Coleta e Validação de Feedback

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)

**Uma aplicação web moderna para coleta de feedbacks de usuários, com validação em tempo real e feedback visual dinâmico.**

[Funcionalidades](#-funcionalidades) •
[Tecnologias](#-tecnologias-utilizadas) •
[Instalação](#-como-executar) •
[Demonstração](#-demonstração) •
[Autor](#-autor)

</div>

---

## 📋 Sobre o Projeto

Este projeto consiste em um **sistema de coleta de feedback** que permite aos usuários avaliarem serviços através de um formulário intuitivo e responsivo. A aplicação oferece validação completa dos dados em tempo real e exibe mensagens dinâmicas de agradecimento personalizadas com base na avaliação do usuário.

### 🎯 Objetivo

Demonstrar habilidades práticas em desenvolvimento front-end, incluindo:

- Estruturação semântica com **HTML5**
- Estilização avançada com **CSS3** e **Bootstrap 5**
- Manipulação de DOM e validação com **JavaScript Vanilla**
- Boas práticas de **UX/UI** e **acessibilidade**

---

## ✨ Funcionalidades

### 📝 Formulário Completo

- **Nome do usuário** - com validação de caracteres alfabéticos
- **Nota de avaliação** - escala de 1 a 5
- **Comentário** - campo de texto livre
- **Categoria** - seleção entre Produto, Atendimento ou Sugestão

### ✅ Validação Inteligente

- Validação nativa do navegador com atributos HTML5
- Validação customizada via JavaScript (incluindo regex para nome)
- Mensagens de erro amigáveis e contextualizadas
- Feedback visual instantâneo nos campos (bordas coloridas)

### 🎨 Feedback Visual Dinâmico

| Nota |    Cor do Alerta     | Emoji |
| :--: | :------------------: | :---: |
|  5   |  🟢 Verde (Sucesso)  |  😁   |
| 3-4  | 🟡 Amarelo (Atenção) |  😐   |
| 1-2  | 🔴 Vermelho (Perigo) |  😞   |

### 📱 Design Responsivo

- Layout centralizado e adaptável
- Funciona perfeitamente em desktop, tablet e mobile
- Interface limpa e moderna com sombras e bordas arredondadas

---

## 🛠 Tecnologias Utilizadas

<table>
  <tr>
    <td align="center"><b>HTML5</b></td>
    <td>
      • Estrutura semântica (<code>form</code>, <code>fieldset</code>, <code>legend</code>, <code>main</code>)<br>
      • Atributos de validação (<code>required</code>, <code>min</code>, <code>max</code>)<br>
      • Acessibilidade aprimorada
    </td>
  </tr>
  <tr>
    <td align="center"><b>CSS3</b></td>
    <td>
      • Flexbox para layouts responsivos<br>
      • Pseudo-classes (<code>:focus</code>, <code>:valid</code>, <code>:invalid</code>)<br>
      • Pseudo-elementos (<code>::before</code>) para ícones decorativos<br>
      • Transições suaves e sombras
    </td>
  </tr>
  <tr>
    <td align="center"><b>Bootstrap 5</b></td>
    <td>
      • Sistema de Grid responsivo<br>
      • Componentes de formulário estilizados<br>
      • Alertas dinâmicos (success, warning, danger)
    </td>
  </tr>
  <tr>
    <td align="center"><b>JavaScript</b></td>
    <td>
      • Manipulação de DOM pura (Vanilla JS)<br>
      • Validação com expressões regulares (Regex)<br>
      • Event handling e prevenção de reload<br>
      • Renderização dinâmica de conteúdo
    </td>
  </tr>
</table>

---

## 🚀 Como Executar

### Pré-requisitos

- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- (Opcional) VS Code com extensão Live Server

### Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/GianlucaAlves/Sistema-de-Coleta-e-Validacao-Node.js-HTML-CSS-Bootstrap.git
```

2. **Acesse a pasta do projeto**

```bash
cd sistema-coleta-feedback
```

3. **Execute o projeto**

   **Opção 1:** Abra o arquivo `index.html` diretamente no navegador

   **Opção 2:** Use o Live Server do VS Code
   - Clique com botão direito no `index.html`
   - Selecione "Open with Live Server"

---

## 🔍 Demonstração

### Fluxo de Uso

1. **Preenchimento** - Usuário insere nome, nota, comentário e categoria
2. **Validação** - Sistema valida todos os campos em tempo real
3. **Feedback** - Mensagem personalizada é exibida com emoji e cor correspondentes

### Comportamento da Validação

```
✅ Nome válido: mínimo 2 caracteres, apenas letras e espaços
✅ Nota válida: número inteiro entre 1 e 5
✅ Comentário: campo obrigatório
✅ Categoria: seleção obrigatória
```

---

## 📂 Estrutura do Projeto

```
📦 sistema-coleta-feedback
 ┣ 📜 index.html      # Estrutura da página e formulário
 ┣ 📜 index.css       # Estilos customizados
 ┣ 📜 index.js        # Lógica de validação e interatividade
 ┗ 📜 README.md       # Documentação do projeto
```

---

## 💡 Aprendizados

Durante o desenvolvimento deste projeto, foram aplicados conceitos importantes como:

- **Validação híbrida** - combinando validação HTML5 nativa com JavaScript
- **Feedback visual** - uso de cores e ícones para melhorar a experiência do usuário
- **Código limpo** - JavaScript vanilla sem dependências desnecessárias
- **Responsividade** - design adaptável usando Flexbox e Bootstrap Grid
- **Acessibilidade** - uso de elementos semânticos e labels associados

---

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/NovaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona NovaFeature'`)
4. Push para a branch (`git push origin feature/NovaFeature`)
5. Abrir um Pull Request

---


## 👨‍💻 Autor

<div align="center">

Feito por Gianluca

</div>

---

<div align="center">
  <sub>⭐ Se este projeto te ajudou, considere dar uma estrela!</sub>
</div>
