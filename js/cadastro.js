function codigo (){
    let codigo = "";
    for (let i = 0; i < 4; i++){
        let algarismo = Math.floor(Math.random() * 10);
        codigo = codigo+algarismo;
    }
    let codigovalue = document.getElementById("codigovalue");
    codigovalue.textContent = codigo;
}

const form = document.getElementById("form");
const fotovalor = document.getElementById("foto");

fotovalor.addEventListener('input', (event) => {
    const div = document.getElementById("imagem");
    const fotos = ["67marsch", "banana", "bolo", "brocolis", "file", "picles"];
    
    const valor = event.target.value.trim().toLowerCase();

    div.innerHTML = '';

    if (fotos.includes(valor)) {
        const img = document.createElement('img');
        img.src = `/midias/${valor}.jpg`;
        img.alt = valor;
        div.appendChild(img);
    }
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const codigo = document.getElementById("codigovalue").textContent;
    const descricao = document.getElementById("descricao").value;
    const produto = document.getElementById("produto").value;
    const preco = Number(document.getElementById("preco").value);
    const foto = document.getElementById("foto").value;

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
        let cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];

        cadastros.push({
            codigo: codigo,
            produto: produto,
            descricao: descricao,
            preco: preco,
            foto: foto
        });

        localStorage.setItem('cadastros', JSON.stringify(cadastros));
        window.location.href = '/html/lista.html';
    }
});