function obterContatos() {
  const contatos = localStorage.getItem("contatos");
  return contatos ? JSON.parse(contatos) : [];
}

function salvarContatos(contatos) {
  localStorage.setItem("contatos", JSON.stringify(contatos));
}

function adicionarContato() {
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value
  const telefone = document.getElementById("telefone").value;

  if (nome && email && telefone) {
    const contatos = obterContatos();
    contatos.push({ nome, email, telefone });
    salvarContatos(contatos);
    exibirContatos();
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
  } else {
    alert("Preencha todos os campos!");
  }
}

function exibirContatos() {
  const contatos = obterContatos();
  const listaContatos = document.getElementById("listaContatos");
  listaContatos.innerHTML = "";

  contatos.forEach((contato, id) => {
    const contatoItem = document.createElement("div");
    contatoItem.className = "contato-item";
    contatoItem.innerHTML = `
      <div class="contato-item-info">
        <span>Nome:  ${contato.nome}</span>
        <span>Email:  ${contato.email}</span>
        <span>Telefone:  ${contato.telefone}</span>
      </div>
      <button onclick="excluirContato(${id})">Excluir</button>
    `;
    listaContatos.appendChild(contatoItem);
  });
}

function excluirContato(id) {
  const contatos = obterContatos();
  contatos.splice(id, 1);
  salvarContatos(contatos);
  exibirContatos();
}

window.onload = exibirContatos;
