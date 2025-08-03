//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
//mensagem inicial + variáveis globais

alert("Jogo do amigo secreto");
let listadeAmigos= [];
let amigos;

// texto na tela inicial
function textoInicial(){
    alert("digite o nome dos sorteados!")
}

// criando a lista visivel 
function adicionandoAmigos(){
     amigos=document.getElementById("amigo").value;
    
    if(amigos==" "){
       console.log("entrada invalida, digite um nome válido");
       return;
    } 
    listadeAmigos.push(amigos);
    document.getElementById("amigo").value=" ";
    listadoUsuário();
}
//como relaciona html/css com js?????

//função para sortear uma amigo 
function sorteandoAmigos(){
    //listadeAmigos=[];
    if (listadeAmigos.length > 0){
        console.log("lista válida");
        let indiceLista= Math.floor(Math.random()*listadeAmigos.length);
        let aleatoridades= listadeAmigos[indiceLista];
        //console.log(aleatoridades);
        const resultado=document.getElementById("resultado");
        resultado.innerHTML=" ";
        console.log(resultado);
    }
    else{
        console.log("lista inválida, digite o nome dos seus amigos");
        return;
    }
   
}

function listadoUsuário(){
    let listinha=document.getElementById("listaAmigos");
    listinha.innerHTML=" ";


for(let amigos of listadeAmigos){
    let itemLista=document.createElement("li");
    itemLista.textContent=amigos;
    listinha.appendChild(itemLista);
}
}

textoInicial();
adicionandoAmigos();
sorteandoAmigos();
listadoUsuário();
