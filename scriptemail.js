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
}
