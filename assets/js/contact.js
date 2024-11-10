// Inizializzazione di EmailJS
(function () {
    emailjs.init("2DTnHWKg236Kyn9fm"); // Inserisci il tuo User ID EmailJS qui
  })();
  
  // Gestione dell'invio del form
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
  
      emailjs.sendForm("service_14e5rhc", "template_ctosjtl", this).then(
        function () {
          alert("Messaggio inviato con successo!");
        },
        function (error) {
          alert("Errore nell'invio del messaggio: " + JSON.stringify(error));
        }
      );
    });
  