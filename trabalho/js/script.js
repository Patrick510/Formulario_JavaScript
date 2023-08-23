//----------------------------VARIAVEIS-------------------------------------
var id = 1;
var arrayContatos = [];
//------------------------ENVIO DOS DADOS------------------------------------
function enviar() {
  let produto = this.lerDados();

  if (this.validar(produto) == true) {
    this.adicionar(produto);
  }

  this.listar();
  this.clearval();

  console.log(produto);
}
//---------------------LISTAGEM--------------------------------
function listar() {}
//----------------------ADICIONANDO OS DADOS----------------------------
function adicionar(produto) {}
//---------------------LENDO OS DADOS--------------------------
function lerDados() {
  let produto = {};

  produto.id = this.id;
  produto.nomeCont = document.getElementById("nome").value;
  produto.fone = document.getElementById("fone").value;

  return produto;
}
//----------------------VALIDAÇÃO DOS INPUTS-----------------------
function validar() {
  const produto = lerDados();
  let msg = "";
  if (produto.nomeCont == "") {
    msg += "- Informe nome do produto \n";
  }

  if (produto.fone == "") {
    msg += "- Informe o celular \n";
  }

  if (msg != "") {
    alert(msg);
    return false;
  }

  return true;
}
//-------------------------LIMPAR OS INPUTS-------------------------
function clearval() {}
//------------------DELETA A LINHA DA TABELA-------------------------
function deletar(id) {}
//-------------------------------------------------------------------
