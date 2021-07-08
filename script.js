// IDS importadas dos arquivos




//----------**TELA DE CADASTRO-----------

let emailCad = document.getElementById("emailCad");

let nomeCad = document.getElementById("nomeCad");

let sobrenomeCad = document.getElementById("sobrenomeCad");

let senha1Cad = document.getElementById("senha1Cad");
let senha2Cad = document.getElementById("senha2Cad");
let botonCad = document.getElementById("btn-Cad");
//let apresentacao = document.querySelector("apresenta");

function cadCliente(){
  if (senha1Cad.value != senha2Cad.value){
      alert("usuário ou senha inválidos")

  }
  else{
  localStorage.setItem("acesso", true);

  window.location.href = "loginn.html";

  }
  localStorage.setItem("emailLoginCliente", emailCad.value);
  localStorage.setItem("senhaLoginCliente", senha2Cad.value);
}







// --------------**TELA DE LOGIN**----------
let botonLogin = document.getElementById("btn-login");
let senhaLogin = document.getElementById("senhaLog");
let emailLogin = document.getElementById("emailLog");

function loginValidate(){

    var emailcadastrado = localStorage.emailLoginCliente;
    var senhacadastrada = localStorage.senhaLoginCliente;

    if (emailLogin.value==emailcadastrado && senhaLogin.value == senhacadastrada ){
    localStorage.setItem("acesso", true);

    window.location.href = "telauser.html";


    }
    
    else {
    alert("usuário ou senha inválidos");
        }

}

// --------------**TELA DE CLIENTE**----------





//recursos importados do html
let btnsalvarEdicao = document.getElementById("btn-salvarEdicao");
let editar = document.getElementById("editarTela");

let btnShowEdition = document.getElementById("btn-ShowEdition");
let radioCorfucinza = document.getElementById("radio-Corfucinza");
let radioCorfuverde = document.getElementById("radio-Corfuverde");
let radioCorfurosa = document.getElementById("radio-Corfurosa");
let radioCorfuazul = document.getElementById("radio-Corfuazul");
let radioCorfobranca = document.getElementById("radio-Corfobranca");
let radioCorfopreta = document.getElementById("radio-Corfobranca");
let boasVindas = document.getElementById("boasVindas");

//declaração de variaveis
var corFontes, corFundos;

// salvar no localStorage as opções marcadas
function salvarEdicao(){
  let nomeClien = document.getElementById("Cnome");

 localStorage.setItem("corfun", corFundos);
 localStorage.setItem("corfon", corFontes);
 localStorage.setItem("nome", nomeClien.value);
 editar.style.display="none"

}
//cor do fundo
function corFundo(cor){

  document.body.style.backgroundColor=cor;
  corFundos = cor;
}

//cor da fonte
function corFonte(cor){

  document.body.style.color=cor;
  corFontes = cor;

}

//botao para aparecer a tela
function editarTe(){

  editar.style.display="block"

}
function entrada(){
  let nomeClien = document.getElementById("Cnome");

  if(localStorage.nome){
    corFontes=localStorage.corfon;
    corFundos=localStorage.corfun;
    nomeClien.value=localStorage.nome;
    corFonte(corFontes);
    corFundo(corFundos);
    boasVindas.innerHTML="Bem vindo "+nomeClien.value+"<hr>";
}

}
 window.addEventListener("load", entrada);




let btn01 = document.getElementById("btn01");
let btn02 = document.getElementById("btn02");
let btn03 = document.getElementById("btn03");
let btn04 = document.getElementById("btn04");
let btn05 = document.getElementById("btn05");
let btn06 = document.getElementById("btn06");
let textoFinal = document.getElementById("textoFinal");



function UltimoButton (){
  if(btn01.click){
    return textoFinal.innerHTML=`Parabéns!!! você acaba de adquirir o curso de 
    emagressimento em 20 dias por um valor de 250 reais  `
  }
}

function UltimoButton01 (){
  if(btn02.click) {
    return textoFinal.innerHTML=`Parabéns!!! você acaba de adquirir o 
    Curso para enriquecer em 20 dias
     por um valor de 500,00 reais  `
  }
}
function UltimoButton02 (){
  if(btn03.click){

    textoFinal.innerHTML=`Parabéns!!! você acaba de adquirir o 
    Curso para vestibular 2022
     por um valor de 2000,00 reais  `
  }
}
function UltimoButton03 (){
  if(btn04.click){
    textoFinal.innerHTML=`Parabéns!!! você acaba de adquirir o 
    Curso para passar em concurso
   por um valor de 1000,00 reais  `
    

  }
}
function UltimoButton04 (){
  if(btn05.click){
    textoFinal.innerHTML=`Parabéns!!! você acaba de adquirir o 
    Curso para investir na bolsa de valores
     por um valor de 2000,00 reais  `

  }
}
function UltimoButton05(){
  if(btn06.click){
    textoFinal.innerHTML=`Parabéns!!! você acaba de adquirir o 
    Curso de daytrade (juro que não é furada)
     por um valor de 2100,00 reais  `

  }

}



// --------------**TELA DE inicio mesmo**----------

let containerr = document.getElementById("containerr");
let btnshowEmpresa = document.getElementById("btn-showEmpresa");
let btnencaminhaLog = document.getElementById("btn-encaminhaLog");

function showLogin(){

  containerr.style.display="block"

}

function encaminharLog(){

  window.location.href = "loginn.html";


}

//----------**TELA DE ENVIO DE EMAIL-----

/*let emailRecuLog = document.getElementById("emailRecuLog");
let btnenvioRecu = document.getElementById("btn-envioRecu");

function envioDeEmailRecu(){

  localStorage.setItem("emailrecu", emailRecuLog.value);
  var emailRecuperacao = localStorage.emailrecu;

const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "testeparaweb1@gmail.com",
      pass: "W3bpr1m31r0"
    }
    
});


transporter.sendMail({
  from: "JMAV-COMPANY <testeparaweb1@gmail.com>",
  to: "avsl@discente.ifpe.edu.br",
  subject: "Olá, somos da JMAV!",
  text: "poderia por gentileza respondeer este email com seu nome e sobrenome para darmos continuidade"

}).then(message => {
    console.log(message);
}).catch(err =>{
    console.log(err);

})

}

let emailRecuLog = document.getElementById("emailRecuLog");
let btnenvioRecu = document.getElementById("btn-envioRecu");



function envioDeEmailRecu(require){
    
    function requere() { 
    const nodemailer = require("nodemailer");
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "testeparaweb1@gmail.com",
      pass: "W3bpr1m31r0"
    }
    
});


transporter.sendMail({
  from: "JMAV-COMPANY <testeparaweb1@gmail.com>",
  to: emailRecuLog.nodeValue,
  subject: "Olá, somos da JMAV!",
  text: "poderia por gentileza respondeer este email com seu nome e sobrenome para darmos continuidade"

}).then(message => {
    console.log(message);
}).catch(err =>{
    console.log(err);

})

}
}*/