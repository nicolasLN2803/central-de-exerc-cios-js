// function exemplofilter () {

// let numeros = [1,2,93,-18,3,58,6,-7,8,79,10]

// let numerosFiltrados = numeros.filter (numero => numero > 5);

// console.log("numeros filtrados: " + numerosFiltrados);


// } exemplofilter ()


function exercícioFilter01 () {

let numeros = [5, 2, 98, 3, -12, 20, 7, 23, 11];

let numerosMaioresQueDez = numeros.filter (numero => 10);

console.log("Números maiores que dez são: " + numerosMaioresQueDez);

} 

function exercícioFilter02 () {

let nomes = ["Cristina", "Mauro", "Claúdia", "César", "Robson-Bambu"];

let nomesComC = nomes.filter(nome => nome.startsWith("C"))

console.log(" Nomes que começam com C: " + nomesComC);

} 

function intermediarioFilter01 () {

let produtos = [

{nome: "Teclado", preco: 120 },
{nome: "Mouse", preco: 40 },
{nome: "Fones de ouvido ", preco: 30 },
{nome: "MousePad", preco: 80}

];

let produtosBaratos = produtos.filter ( produto => produto.preco < 50) ;

alert(JSON.stringify(produtosBaratos));

}  

function exemploFind() {

let produtos = [

{ id: 1, nome: "Teclado", preco: 100 },
{ id: 2, nome: "Mouse", preco: 50 },
{ id: 3, nome: "Monitor", preco: 700 }

]

let produtoFiltrado = produtos.find (produto => produto.preco == 700);

console.log(produtoFiltrado);

}

function exercícioFind01 () {

let nomes = [ "João", "Carlos", "Amanda", "Arthur", " Doug", "Bianca"]  

let nomesComA = nomes.filter(nome => nome.startsWith("A"));

console.log("Nomes com a letra A: " + nomesComA);


} 

function exercícioFind02 () {

    let listaDeUsuarios = [
        { id: 1, nome: "Alice" },
        { id: 2, nome: "Bruno" },
        { id: 3, nome: "Carla" }
      ];
      
      const usuarioEncontrado = listaDeUsuarios.find(usuario => usuario.id == 2);
      
      console.log(usuarioEncontrado); 


} 

function  exemploMap () {

    let numeros = [1, 2, 3, 4, 5];

    let numerosDobrados = numeros.map(numero => numero * 2);

    console.log("O dobro dos números são: " + numerosDobrados);

} 

function exercicioMap01 () {

let palavras = ["olá", "mundo", "javascript"];

let palavrasExclamadas = palavras.map(palavra => palavra + "! ");

console.log("As palavras exclamas ficam assim: " + palavrasExclamadas);

} 

function exemploMap02 () {

let nomes =  ["ana", "Ariel", "Yan"]

let nomesMaiusculos = nomes.map(nome => nome + "Colaborador")

console.log("Os colaboradores são: " + nomesMaiusculos);

}