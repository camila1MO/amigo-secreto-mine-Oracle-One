//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//mensagem inicial + variáveis globais

alert("Jogo do amigo secreto");
let listadeAmigos= [];

// texto na tela inicial
function textoInicial(){
    alert("digite o nome dos sorteados!")
}

// criando a lista visivel 
function adicionandoAmigos(){
    let amigos=prompt("digite o nome dos seus amigos>>>\n ");
    
    if(amigos==" "){
       console.log("entrada invalida, digite um nome válido");
    } 
    listadeAmigos.push(amigos);
    console.log(listadeAmigos);
}
//como relaciona html/css com js?????

//função para sortear uma amigo 
function sorteandoAmigos(){
    listadeAmigos=[];
    let indiceLista= Math.floor(Math.random()*listadeAmigos.length);
    let aleatoridades= listadeAmigos[indiceLista];
    console.log(aleatoridades);
}
