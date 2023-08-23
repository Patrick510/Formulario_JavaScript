//----------------------------VARIAVEIS-------------------------------------
var id = 1;
var arrayContatos = [];
//------------------------ENVIO DOS DADOS------------------------------------
function enviar() {
  let produto = this.lerDados();

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
function validar() {}
//-------------------------LIMPAR OS INPUTS-------------------------
function clearval() {}
//------------------DELETA A LINHA DA TABELA-------------------------
function deletar(id) {}
//-------------------------------------------------------------------
