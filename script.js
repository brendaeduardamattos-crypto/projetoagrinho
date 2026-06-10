let registros = [];

function adicionarRegistro() {

    const descricao =
        document.getElementById("descricao").value;

    const valor =
        Number(document.getElementById("valor").value);

    const tipo =
        document.getElementById("tipo").value;

    if (!descricao || valor <= 0) {
        alert("Preencha os campos corretamente.");
        return;
    }

    registros.push({
        descricao,
        valor,
        tipo
    });

    atualizarTabela();
    atualizarResumo();

    document.getElementById("descricao").value = "";
    document.getElementById("valor").value = "";
}

function atualizarTabela() {

    const tabela =
        document.getElementById("tabelaRegistros");

    tabela.innerHTML = "";

    registros.forEach(registro => {

        tabela.innerHTML += `
            <tr>
                <td>${registro.descricao}</td>
                <td>${registro.tipo}</td>
                <td>R$ ${registro.valor.toFixed(2)}</td>
            </tr>
        `;
    });
}

function atualizarResumo() {

    const receitas = registros
        .filter(r => r.tipo === "receita")
        .reduce((soma, r) => soma + r.valor, 0);

    const despesas = registros
        .filter(r => r.tipo === "despesa")
        .reduce((soma, r) => soma + r.valor, 0);

    const lucro = receitas - despesas;

    document.getElementById("totalReceitas").innerText =
        `R$ ${receitas.toFixed(2)}`;

    document.getElementById("totalDespesas").innerText =
        `R$ ${despesas.toFixed(2)}`;

    document.getElementById("lucroTotal").innerText =
        `R$ ${lucro.toFixed(2)}`;
}