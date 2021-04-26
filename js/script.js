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

// function saveTransaction(i) {
//     const save = tableLine[i]

//     tableLine.push({
//         font: prompt("Digite o local"),
//         amount: parseFloat(prompt("Quanto gastou ou recebeu")),
//         date: prompt("Data"),
//         payment: prompt("Digite 1 para Crédito | 2 para Débito | 3 para Dinheiro"),
//     })

//     newLineTable(tableLine)
//     closeModal();

// }


function addTransaction() {
    document.querySelector('.modalOverlay').classList.add('active')
}

function cancelTransaction() {
    document.querySelector('.modalOverlay').classList.remove('active')
}

// const Form = {
//     font: document.querySelector('select.font'),
//     amount: document.querySelector('input.value'),
//     date: document.querySelector('input.date'),
//     payment: document.querySelector('select.payment'),

//     getValues() {
//         return {
//             font: Form.font.value,
//             amount: Form.amount.value,
//             date: Form.date.value,
//             payment: Form.payment.value
//         }
//     },

//     validadeFields() {
//         const {
//             font,
//             amount,
//             date,
//             payment
//         } = Form.getValues()

//         if (font.trim() === "" ||
//             amount.trim() === "" ||
//             date.trim() === "" ||
//             payment.trim() === "") {
//             throw new Error("Por favor, preencha todos os campos")
//         }
//     },

//     formatValues() {
//         let {
//             font,
//             amount,
//             date,
//             payment
//         } = Form.getValues()

//         amount = Utils.formatAmount(amount)

//         date = Utils.formatDate(date)


//         return {
//             font,
//             amount,
//             date,
//             payment
//         }
//     },

//     clearFields() {
//         Form.font.value = "",
//         Form.amount.value = "",
//         Form.date.value = "",
//         Form.payment.value = ""
//     },

//     submit(event) {
//         event.preventDefault()

//         try {
//             Form.validadeFields()

//             const transaction = Form.formatValues()

//             addTransaction.add(transaction)

//             Form.clearFields()

//             closeModal();
//         } catch (error) {
//             alert(error.message)
//         }
//     }
// }