class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }

  enviar() {
    let produto = this.lerDados();

    console.log(produto);
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("nome").value;
    produto.celularProd = document.getElementById("celular").value;
    return produto;
  }

  deletar() {}

  editar() {}
}

var produto = new Produto();
