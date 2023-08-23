//------------------------------------------------------------
function inserirContato() {
  const contato = {
    nome: document.getElementById("nome").value,
    fone: document.getElementById("celular").value,
  };

  const bd_contatos = getLocalStorage();

  bd_contatos.push(contato);

  //armazenar os contatos no LocalStorage
  setLocalStorage(bd_contatos);

  //atualizar apos a inserção
  updateTable();
}
//---------------------STORAGE--------------------------------
function getLocalStorage() {
  return JSON.parse(localStorage.getItem("bd_contatos"));
}
//------------------------------------------------------------
function setLocalStorage(bd_contatos) {
  localStorage.setItem("bd_contatos", JSON.stringify(bd_contatos));
}

//---------------------TABLE----------------------------------
function updateTable() {}

//------------------------------------------------------------
