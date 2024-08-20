const form = document.getElementById("list");
const atividades = [];
const emails = [];
const telefones = [];

let linhas = '';

form.addEventListener("submit", function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById("name-complit");
    const inputEmail = document.getElementById("e-mail");
    const inputTelefone = document.getElementById("phone");

    if (atividades.includes(inputNome.value)) {
        alert(`O contato ${inputNome.value} já está inserido.`);
    } else {
        atividades.push(inputNome.value);
        emails.push(inputEmail.value);
        telefones.push(inputTelefone.value);
        
        let linha = `<tr>`;
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNome.value = '';
    inputEmail.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
