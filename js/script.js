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

function saveTransaction() {
    var font = document.getElementById("font");
    var amount = document.getElementById("amount");
    var date = document.getElementById("date");
    var payment = document.getElementById("payment");

    var data = JSON.parse(localStorage.getItem("dataNewFinance"));

    if (data == null) {
        localStorage.setItem("dataNewFinance", "[]");
        data = [];
    }

    var newFinance = {
        font: font.value,
        amount: amount.value,
        date: date.value,
        payment: payment.value,
    }

    data.push(newFinance);
    cancelTransaction()
    closeModal()

    font.value = "";
    amount.value = "";
    date.value = "";
    payment.value = "";
    localStorage.setItem("dataNewFinance", JSON.stringify(data));


    cardScore = newFinance.amount.replace(",", ".");

    for (i = 0; i < newFinance.amount; i++) {
        var total = newFinance.amount[i];

        cardSub = "<p>" + total + "</p>"

    }
    var cards = document.querySelector(".cardIncome")
    cards.innerHTML = cardSub

    tableLine.push({
        font: newFinance.font,
        amount: newFinance.amount,
        date: newFinance.date,
        payment: newFinance.payment,
    })

    newLineTable(tableLine)
    localStorage.clear()
}

function containerCard() {
    var sum = 0;
    var sub = 0;
    var total = 0;

    for (i = 0; i < tableLine.length; i++) {
        if (tableLine[i].amount > 0) {
            sum += tableLine[i].amount;

        } else if (tableLine[i].amount < 0) {
            sub -= tableLine[i].amount;
        }
        total = sum - sub;
    }

    cardIncome = "<p style='color: green'>R$ " + sum + "</p>"

    var card = document.querySelector(".cardIncome");
    card.innerHTML = cardIncome

    cardExpense = "<p style='color: rgb(182, 9, 9)'>R$ " + sub + "</p>"

    var card = document.querySelector(".cardExpense");
    card.innerHTML = cardExpense

    cardTotal = "<p>R$ " + total + "</p>"

    var card = document.querySelector(".cardTotal");
    card.innerHTML = cardTotal
}

containerCard()

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

function closeModal() {
    document.querySelector('.modalOverlay').classList.remove('active')
}
