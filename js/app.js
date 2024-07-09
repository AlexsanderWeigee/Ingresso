function comprar() {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = parseInt(document.getElementById("qtd").value);

    if (qtd > 0) {
        if (tipo == "pista") {
            comprarPista(qtd);
        } else if (tipo == "superior") {
            comprarSuperior(qtd);
        } else {
            comprarInferior(qtd);
        }
    } else {
        alert("Digite uma quantidade valida!");
    }
    limpar();
}

function comprarPista(qtd) {
    let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
    if (qtd > qtdPista) {
        alert("Quantidade indisponível para tipo pista");
    } else {
        qtdPista = qtdPista - qtd;
        document.getElementById("qtd-pista").textContent = qtdPista;
        alert("Compra realizada com sucesso!");
    }
}

function comprarSuperior(qtd) {
    let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
    if (qtd > qtdSuperior) {
        alert("Quantidade indisponível para tipo pista");
    } else {
        qtdSuperior = qtdSuperior - qtd;
        document.getElementById("qtd-superior").textContent = qtdSuperior;
        alert("Compra realizada com sucesso!");
    }
}

function comprarInferior(qtd) {
    let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    if (qtd > qtdInferior) {
        alert("Quantidade indisponível para tipo pista");
    } else {
        qtdInferior = qtdInferior - qtd;
        document.getElementById("qtd-inferior").textContent = qtdInferior;
        alert("Compra realizada com sucesso!");
    }
}

function limpar() {
    document.getElementById("qtd").value = " ";
}