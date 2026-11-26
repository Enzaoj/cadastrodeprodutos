const tabela = document.getElementById("tabela");
const cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];   

function alterarCadastro(index) {
    window.location.href = `/html/alterar.html?index=${index}`;
}

function excluirCadastro(index) {
    window.location.href = `/html/excluir.html?index=${index}`;
}

cadastros.forEach((cadastro, index) => {
    const linha = document.createElement('tr');

    linha.innerHTML = `
        <td>${cadastro.codigo}</td>
        <td>${cadastro.produto}</td>
        <td>${cadastro.descricao}</td>
        <td>${cadastro.preco}</td>
        <td id="altexc">
            <button class="balterar" onclick="alterarCadastro(${index})">Alterar</button>
            <button class="bexcluir" onclick="excluirCadastro(${index})">Excluir</button>
        </td>
    `;

    tabela.appendChild(linha);

});