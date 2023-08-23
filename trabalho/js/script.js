function inserirContato() {
  const contato = {
    nome: document.getElementById("nome").value,
    fone: document.getElementById("celular").value,
  };

  const bd_contatos = getLocalStorage();

  bd_contatos.push(contato);
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_contatos"));
}
