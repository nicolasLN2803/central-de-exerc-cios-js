// let numero = prompt("Digite um número:");

// if (numero > 0) {

//     console.log("Positivo.")

// } else {

//     if (numero < 0) {

//         console.log("Negativo")
//     } else {

//     console.log("É zero.")

// } exemplo



function exercicioCondicionais01() {

    debugger;

    let numero = prompt("Digite sua idade:");

    if (numero >= 18) {

        alert("Você é maior de idade");

    } else {

        if (numero < 18)

            alert(" Você é menor de idade");
    }

    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())

}





function exercicioCondicionais02() {

    debugger;

    let numero = prompt("Digite um número")

    if (numero > 0) {
        alert("O número é positivo")
    }
    else {
        if (numero < 0) {
            alert("O número é negativo");
        }
    }
    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())
}


function exercicioCondicionais03() {

    debugger;

    let numero = prompt("Digite sua nota:");

    if (numero >= 60) {

        alert("Você foi aprovado!!")

    } else

        if (numero < 60)

            alert("Você foi reprovado.");
    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())
}


function exercicioCondicionais04() {

    debugger;

    let numero = prompt("Digite um número")

    if (numero > 0)

        alert("Número é positivo")

    else {

        if (numero < 0) {

            alert("Negativo")
        } else {

            alert("É zero.")

        }
    }
    gerarLog("Exercício executado às: " + new Date().toLocaleDateString())
}


function exercicioCondicionais05() {

    debugger;

    let numero = prompt("Digite sua idade")

    if (numero <= 12) {
        alert("Você é uma criança");
    }


    if (numero <= 17 && numero >= 13) {

        alert("Você é um adoslecente");
    }

    if (numero >= 18) {
        alert("Você é um adulto");
    }
    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())
}


function exercicioCondicionais06() {

    debugger;

    let numero = prompt("Digite um número")

    let = resto = numero % 2

    if (resto === 0) {
        alert("O número é par")

    } else {

        alert("O número é impar")

    }
    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())
}




function intermediarioCondicionais01() {
    debugger;

    let n1 = Number(prompt("Digite um número"))
    let n2 = Number(prompt(" Digite um número"))

    let operacao = prompt("Digite uma operação")

    let resultado

    switch (operacao) {
        case "+":
            resultado = n1 + n2;
            break;
        case "-":
            resultado = n1 - n2;
            break;
        case "*":
            resultado = n1 * n2;
            break;
        case "/":
            resultado = n1 / n2;
            break;

    }

    alert(resultado)

    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())

}


function intermediarioCondicionais02() {

    let n1 = prompt("Digite um número")
    let n2 = prompt("Digite um número")
    let n3 = prompt("Digite um número")

    let maior

    if (n1 >= n2 && n1 >= n3) { maior = n1 }
    else if (n2 >= n1 && n2 >= n3) { maior = n2 }
    else { maior = n3 }

    alert("número maior é " + maior)

    gerarLog("Exercício de maioridade executado às: " + new Date().toLocaleDateString())

}





function gerarLog(textoDoLog) {

    let container = document.querySelector(".logs-container");

    let paragraph = document.createElement("p"); // <p></p>

    paragraph.innerHTML = textoDoLog; // <p>texto</p>

    container.appendChild(paragraph);

}
















