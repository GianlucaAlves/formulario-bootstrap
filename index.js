const form = document.getElementById('feedback-form');
const mensagemDiv = document.getElementById('mensagem-feedback');
const mensagemTexto = document.getElementById('mensagem-texto');
const btnFechar = document.getElementById('mensagem-fechar');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const nome = document.getElementById('nome-input').value.trim();
  const nomeRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ\s]{2,}$/;
  const nota = Number(document.getElementById('nota-input').value);
  const categoria = document.getElementById('categoria-select').value;
  const comentario = document.getElementById('textarea-comentario').value.trim();

  let valido = true;


  document.getElementById('erro-nome').classList.add('d-none');
  document.getElementById('erro-nota').classList.add('d-none');
  document.getElementById('erro-comentario').classList.add('d-none');
  document.getElementById('erro-categoria').classList.add('d-none');


  if (!nome || !nomeRegex.test(nome)) {
    document.getElementById('erro-nome').classList.remove('d-none');
    valido = false;
  }

  if (!nota || nota < 1 || nota > 5) {
    document.getElementById('erro-nota').classList.remove('d-none');
    valido = false;
  }

  if (!comentario) {
    document.getElementById('erro-comentario').classList.remove('d-none');
    valido = false;
  }

  if (!categoria) {
    document.getElementById('erro-categoria').classList.remove('d-none');
    valido = false;
  }

  if (!valido) {
    return; 
  }

  mensagemDiv.className = 'alert';

  if (nota >= 5) {
    mensagemDiv.classList.add('alert-success');
  } else if (nota >= 3) {
    mensagemDiv.classList.add('alert-warning');
  } else {
    mensagemDiv.classList.add('alert-danger');
  }

  let emoji = '🙂';
  if (nota >= 5) {
    emoji = '😁';
  } else if (nota >= 3) {
    emoji = '😐';
  } else {
    emoji = '😞';
  }

  mensagemTexto.textContent =
    `Obrigado pelo feedback, ${nome}! Categoria: ${categoria}. Nota: ${nota}. ${emoji}`;

  mensagemDiv.classList.remove('d-none');
});
