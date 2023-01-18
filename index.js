function cipher (texto, desplazamiento) { 
    const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     desplazamiento = (desplazamiento % 26 + 26) %26;
    return texto.replace(/[A-Z]/ig, c=> letras[(letras.indexOf(c)+desplazamiento)%26]);    
  }  

  module.exports = cipher;