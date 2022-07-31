let tentativasDeAcertos = 4;
let listDinamica = [];
let palavraSecretaDicas;
let palavraSecretaSorteada;
let letraPalavrasecreta;
let useiDica;
let qualDec =50;
console.log(tentativasDeAcertos)

const palavrasSorteadas = [
    palavra001= {
        nome: "CAMISETA",
        dicas: "ROUPAS"
    },

    palavra002= {
        nome: "CAMISA",
        dicas: "ROUPAS"
    },

    palavra003= {
        nome: "BODY",
        dicas: "ROUPAS"
    },

    palavra004= {
        nome: "REGATA",
        dicas: "VERÃO"
    },

    palavra005= {
        nome: "JAQUETA",
        dicas: "INVERNO"
    },

    palavra006= {
        nome: "MOLETOM",
        dicas: "ROUPAS"
    },

    palavra007= {
        nome: "CALÇA",
        dicas: "ROUPAS"
    },

    palavra008= {
        nome: "BLAZER",
        dicas: "FRIO"
    },

    palavra009= {
        nome: "SAIA",
        dicas: "ROUPAS"
    },

    palavra010= {
        nome: "GRAVATA",
        dicas: "SOCIAL"
    },
]

palavraSecreta()
function palavraSecreta(){
    const indexPalavras = parseInt(Math.random() * palavrasSorteadas.length)
   
    palavraSecretaSorteada = palavrasSorteadas[indexPalavras].nome;
    palavraSecretaDicas = palavrasSorteadas[indexPalavras].dicas;
    letraPalavrasecreta = palavraSecretaSorteada.split("")
    console.log(palavraSecretaSorteada)
    console.log(palavraSecretaDicas)
    console.log(letraPalavrasecreta)

}

exibirNaTela();
function exibirNaTela(){
    const palavraNaTela = document.getElementById("palava-secreta");
    palavraNaTela.innerHTML = "";

    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if (listDinamica[i] == undefined){
            listDinamica[i] = "&nbsp;" 
            palavraNaTela.innerHTML = palavraNaTela.innerHTML + "<div id='jogo'> "+ listDinamica[i] +" </div>" 
        }
        else{
            palavraNaTela.innerHTML = palavraNaTela.innerHTML + "<div id='jogo'> "+ listDinamica[i] +" </div>"
        }
    } 
   
}

function verificaEscolhida(letra){
    if(tentativasDeAcertos > 0)
    {        
        mudarLetra("tecla-" + letra);
        comparaListas(letra);
        exibirNaTela();
    }
}  

function mudarLetra(letra){ // trocar a cor do botão e a cor da letra quando selecionado
    document.getElementById(letra).style.background = "#fed130"; // escolher outra cor
    document.getElementById(letra).style.color = "#0c0c2c"; // escolher outra cor
}

function comparaListas(letra){ 
    const pos = palavraSecretaSorteada.indexOf(letra); 
  
 
    if(pos < 0){ 
        tentativasDeAcertos--
        mudaImg()
        resetJogo()
        console.log(pos)
        
        // verificar tentativas
        
    }
    else{
        for(i = 0; i < palavraSecretaSorteada.length; i++)
        {
            if(palavraSecretaSorteada[i] == letra){
                listDinamica[i] = letra;
            }
        }
    }
    let vitoria = true; //ganhar
    for(i = 0; i < palavraSecretaSorteada.length; i++){
        if(palavraSecretaSorteada[i] != listDinamica[i]){
            vitoria = false;
        }
    }

    if(vitoria == true){
    {
        //mensagem na tela
        tentativasDeAcertos = 0;
        let resetCer=document.getElementById('tecla-ren')
resetCer.innerHTML = '<button id="btn-Reiniciar" onclick="window.location.reload()">Jogar Novamente</button>'

var resetCerbt = document.querySelector('#btn-Reiniciar')
resetCerbt.setAttribute('onclick', 'window.location.reload()')}
    }
 if(vitoria == true && qualDec == 50 ){
    alert("Parabéns, você ganhou 50% de desconto, Utilize o cupom CABIDE50")
 }
 if(vitoria == true && qualDec == 40 ){
    alert("Parabéns, você ganhou 40% de desconto, Utilize o cupom CABIDE40")
 }

 if(vitoria == true && qualDec == 30 ){
    alert("Parabéns, você ganhou 30% de desconto. Utilize o cupom CABIDE30")
 }

 if(vitoria == true && qualDec == 20 ){
    alert("Parabéns, você ganhou 20% de desconto, Utilize o cupom CABIDE20")
 }

 if(vitoria == true && qualDec == 10 ){
    alert("Parabéns, você ganhou 10% de desconto, Utilize o cupom CABIDE10")
 }
}

function mudaImg(){
let imgDes = document.querySelector('#imagem') 
if( tentativasDeAcertos == 3 || tentativasDeAcertos>3 && useiDica ==1){
    imgDes.setAttribute('src','./img/40%.png')
    qualDec = 40
}

if( tentativasDeAcertos == 2 || tentativasDeAcertos==3 && useiDica==1){
    imgDes.setAttribute('src','./img/30%.webp')
    qualDec = 30
}
if( tentativasDeAcertos == 1 || tentativasDeAcertos ==2 && useiDica==1 ){
    imgDes.setAttribute('src','./img/20%.jpg')
    qualDec = 20
}
if( tentativasDeAcertos == 0 || tentativasDeAcertos ==1 && useiDica==1 ){
    imgDes.setAttribute('src','./img/10%.jpg')
    qualDec = 10

        alert("Você não acertou a palavra secreta. Mas aqui você não sai perdendo.. Você ganhou 10% de desconto por participar, utilize o cupom CABIDE10")
}

}

function testaDica(){
    let imgDes = document.querySelector('#imagem') 
    if(palavraSecretaDicas.length>0 && tentativasDeAcertos>3){
    imgDes.setAttribute('src','./img/40%.png')}

    if(palavraSecretaDicas.length>0 && tentativasDeAcertos==3){
        imgDes.setAttribute('src','./img/30%.webp')}

        if(palavraSecretaDicas.length>0 && tentativasDeAcertos==2){
            imgDes.setAttribute('src','./img/20%.jpg')}
            
            if(palavraSecretaDicas.length>0 && tentativasDeAcertos==1){
                imgDes.setAttribute('src','./img/10%.jpg')}

                if(palavraSecretaDicas.length>0){
                    useiDica = 1;
                }}



//Jogar novamente quando errar a palavra
function resetJogo(){

if( tentativasDeAcertos<=0){
var reset=document.getElementById('tecla-ren')
reset.innerHTML = '<button id="btn-Reiniciar" onclick="window.location.reload()">Jogar Novamente</button>'

var resetBt = document.querySelector('#btn-Reiniciar')
resetBt.setAttribute('onclick', 'window.location.reload()')

}}



//Onde chamamos a dica apenas uma vez
 function chamardica(){
    testaDica()
    var dica = document.getElementById('dicatext')
    dica.innerText = palavraSecretaDicas
   
 }