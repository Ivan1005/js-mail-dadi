var mail = prompt("inserisci la mail per l'accesso: ");

var mails = ["mail-1" , "mail-2" , "mail-3" , "mail-4" , "mail-5" , "mail-6"] ;

var giusta = false;


for (var i= 0; i <= mails.length ; i++) {
  if (mail== mails[i]) {
    giusta = true;
  }
}


if (giusta==true) {
  alert("accesso consentito");
} else {
  alert("mail sbagliata");
}
