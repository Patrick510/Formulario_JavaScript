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
function updateTable() {
  //clean table

  const bd_contatos = getLocalStorage();

  bd_contatos.forEach(newRow);
}

//------------------------------------------------------------
function newRow(contato, index) {
  const line = document.createElement("tr");

  line.innerHTML = ` 
  <td>${index}</td>
  <td>${contato.nome}</td>
  <td>${contato.fone}</td>
  <td>
    <span class="material-symbols-outlined">
      delete
    </span>
`;

  document.querySelector("#tbContato>tbody").appendChild(line);
}
//------------------------------------------------------------
function deletarCont() {}
