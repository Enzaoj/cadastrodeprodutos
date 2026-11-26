const forms = document.getElementById("formalt");
let parametros = new URLSearchParams(window.location.search);
let index = parametros.get('index');
let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
let cadastro = cadastros[index];

document.getElementById("msmcodigo").textContent = cadastro.codigo;
document.getElementById("altproduto").value = cadastro.produto;
document.getElementById("altdescricao").value = cadastro.descricao;
document.getElementById("altpreco").value = cadastro.preco;
document.getElementById("altfoto").value = cadastro.foto;


forms.addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = document.getElementById("msmcodigo").textContent;
    const descricao = document.getElementById("altdescricao").value;
    const produto = document.getElementById("altproduto").value;
    const preco = Number(document.getElementById("altpreco").value);
    const foto = document.getElementById("altfoto").value;

    if (produto.length < 5) {
        mensagem.textContent = "O nome do produto deve ter 5 ou mais caracteres.";
        return;
    }
    else if (isNaN(preco)) {
        mensagem.textContent = "O preço deverá ser um número.";
        return;
    }
    else if (foto.length > 10) {
        mensagem.textContent = "O campo da foto não deve exceder 10 caracteres.";
        return;
    }
    else {
        let parametros = new URLSearchParams(window.location.search);
        let index = parametros.get('index');
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
        let cadastro = cadastros[index];  

        cadastros[index] = {
        codigo: codigo,
        produto: produto,
        descricao: descricao,
        preco: preco,
        foto: foto
        }
        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        window.location.href = '/html/lista.html';
    }
});