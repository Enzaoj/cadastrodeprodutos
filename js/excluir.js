const tabela = document.getElementById("texcluir");
let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
let parametros = new URLSearchParams(window.location.search);
let index = parametros.get('index');
let cadastro = cadastros[index];

if (cadastro) {
    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td>${cadastro.codigo}</td>
        <td>${cadastro.produto}</td>
        <td>${cadastro.descricao}</td>
        <td>${cadastro.preco}</td>
        <td><img src="/midias/${cadastro.foto}.jpg"></td>
    `;

    tabela.appendChild(linha);

    setTimeout(() => {
        let apagar = window.confirm("Deseja apagar esse registro?");

        if (apagar) {
            cadastros.splice(Number(index), 1);

            localStorage.setItem('cadastros', JSON.stringify(cadastros));
        }

        window.location.href = '/html/lista.html';
    }, 100);
}