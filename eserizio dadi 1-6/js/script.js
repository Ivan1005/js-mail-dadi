var numero1 = Math.floor(Math.random()*5)+1;
var numero2 = Math.floor(Math.random()*5)+1;


document.getElementById('giocatore').innerHTML = "dado giocatore: " + numero1;
document.getElementById('computer').innerHTML = "dado computer: " + numero2;

var risultato = "hai perso"

if (numero1 > numero2) {
  risultato = "hai vinto";
}


// SE IL RISULTATO DEL GIOCATORE è UGUALE AL PC VINCE IL BANCO ( VOLUTO APPOSTA)//
document.getElementById('risultato').innerHTML = risultato;
