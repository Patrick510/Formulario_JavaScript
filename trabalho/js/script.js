class Produto {
  constructor() {
    this.id = 1;
    this.arrayProdutos = [];
  }

  enviar() {
    let produto = this.lerDados();
    console.log(produto);
  }

  adicionar() {
    this.arrayProdutos.push(produto);
    this.id++;
  }

  lerDados() {
    let produto = {};

    produto.id = this.id;
    produto.nomeProduto = document.getElementById("nome");
    produto.celularProd = document.getElementById("celular");
    return produto;
  }

  deletar() {}

  editar() {}
}

var produto = new Produto();
