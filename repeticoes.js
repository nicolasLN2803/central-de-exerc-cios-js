// // function exampleFor() {

// //     // // FOR 
// //     // 1- passo: declarar o contador.
// //     // 2- passo : condição (enquanto).
// //     // 3- passp : incremento.

// // //     for (let contador = 1; contador <= 5; contador++) {

// // //         alert(contador);

// // //     }
// // // }



// function exampleWhile() {

//     debugger;
//     let contador = 1;

//     while (contador <= 5) {

//         alert(contador);
//         contador ++;
//     }

// }



// function exampleDoWhile () {

// let contador = 1;

// do {

// alert(contador)
// contador++;

// } while (contador <= 5);

// }

// exampleDoWhile();


function exercicio01for() {

    debugger;
    for (let contador = 1; contador <= 10; contador++) {

        console.log(contador);

    }

}


function exercicio02for() {

    debugger;
    let num = prompt("digite um número");

    for (let contador = 1; contador <= 10; contador++) {

        console.log(contador * num)

    }

}

function exercicio03for() {

    debugger;

    let N = prompt("digite um número")

    {

        let contador = 1;

        while (contador <= N) {

            console.log(contador);
            contador++;
        }

    }

}

function intermediario01for() {

    debugger;

    for (let i = 2; i <= 50; i += 2) {

        console.log(i)
    }


}

function intermediario02for() {

    debugger;

    let numero = Math.floor(Math.random() * (100 - 1) + 1)

    let tentativa;

    while (tentativa != numero) {

        tentativa = prompt("Insira um número: ");

        if (numero > tentativa) {

            alert("Número é maior");

        } else if (numero < tentativa) {

            alert("Número é menor")

        } else {

            alert("Você acertou!!!")
        }

    }

} 

intermediario02for ()
