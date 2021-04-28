const saida1 = {
    font: "Mercado",
    amount: -650,
    date: "15/05/2021",
    payment: "Débito",
}

const entrada1 = {
    font: "Trabalho",
    amount: 1500,
    date: "01/05/2021",
    payment: "Dinheiro",
}

const saida2 = {
    font: "Roupas",
    amount: -350,
    date: "22/04/2021",
    payment: "Crédito",
}

const entrada2 = {
    font: "Renda Extra",
    amount: 1000,
    date: "25/05/2021",
    payment: "Débito",
}



tableLine = [entrada1, entrada2, saida1, saida2]

newLineTable(tableLine)

function newLineTable(tableLine) {
    html = ""
    for (var i = 0; i < tableLine.length; i++) {
        html += "<tr><td>" + tableLine[i].font + "</td>"
        html += "<td>R$ " + tableLine[i].amount + "</td>"
        html += "<td>" + tableLine[i].date + "</td>"
        html += "<td>" + tableLine[i].payment + "</td>"

        html += "<td class='material-icons' onClick='removeTransaction(" + i + ")'>delete</td>"
        html += "<td class='material-icons' onClick='editTransaction(" + i + ")'>edit</td>"
    }

    const tableFinances = document.getElementById('table-finances')
    tableFinances.innerHTML = html
}


function removeTransaction(i) {
    const deleting = tableLine[i]
    tableLine.splice(i, 1)

    newLineTable(tableLine)
}

function editTransaction(i) {
    const editing = tableLine[i]

    editing.font = prompt("digite o novo nome")
    editing.amount = parseFloat(prompt("digite o novo valor"))
    editing.payment = parseInt(prompt("1 credito 2 debito 3 dinheiro"))
    const payment = editing.payment;

    if (payment == 1) {
        editing.payment = document.querySelector('option') = 1
    }

    newLineTable(tableLine)
}

function addTransaction() {
    document.querySelector('.modalOverlay').classList.add('active')
}

function cancelTransaction() {
    document.querySelector('.modalOverlay').classList.remove('active')
}
