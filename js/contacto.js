//https://developers.google.com/gmail/api/quickstart/js
//Fuente: https://www.sitepoint.com/sending-emails-gmail-javascript-api/
/*
var clientId = "759411052161-9ljnhtachts38s1ive8nodvlbp936b7e.apps.googleusercontent.com";
var apiKey = "AIzaSyCLMG-re7FbGQ_0u7DSxCpqBPJQqDJfYGE";

var scopes =
  'https://www.googleapis.com/auth/gmail.readonly '+
  'https://www.googleapis.com/auth/gmail.send';

function handleClientLoad() {
  gapi.client.setApiKey(apiKey);
  window.setTimeout(checkAuth, 1);
}

function checkAuth() {
  gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: true
  }, handleAuthResult);
}

function handleAuthClick() {
  var auth = gapi.auth.authorize({
    client_id: clientId,
    scope: scopes,
    immediate: false
  }, handleAuthResult);
  return false;

}

function handleAuthResult(authResult) {
  if(authResult && !authResult.error) {
    loadGmailApi();
  } else {
    $('#modal2').openModal();
    handleAuthClick();
  }
}

function loadGmailApi() {
  gapi.client.load('gmail', 'v1');
}

//Funcion para enviar mensaje
function sendMessage(headers_obj, message, callback)
{
  var email = '';
  for(var header in headers_obj)
    email += header += ": "+headers_obj[header]+"\r\n";
    console.log(email);
  email += "\r\n" + message;
  if (gapi.client.gmail === undefined) {
      $('#modal2').openModal();
  }else {
    var sendRequest = gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': window.btoa(email).replace(/\+/g, '-').replace(/\//g, '_')
      }
    });
    return sendRequest.execute(callback);
  }
}
*/
//Funcion para abrir modal cuando se envie el mensaje
function gracias(){
  document.getElementById("contacto").reset(); //Limpia los campos del contacto
  $('#modal1').openModal();
}

function enviado(){
  console.log("enviado");
}
//Funcion para cerrar modal cuando se seleccione eo bonton ok
$(".modal-close").click(function(event) {
  /* Act on the event */
  $('#modal1').closeModal();
});

//Funcion que toma los datos para enviar

$("form").submit(function(event) {
  /*var subject1 = {},
    subject2 = {},
    mensaje1 = "",
    mensaje2 = "";
  /* Act on the event */
  var form = $(this).serialize();
  /*form.forEach(function(item){
    if (item.name === "nombre") {
          subject2.Subject = "Cartagonova Contacto";
          subject1.To = "info.cartagonovarock@gmail.com";
          mensaje2 = "Hola " + item.value + " Hemos recibido tu mensaje, pronto nos pondremos en contacto contigo.";
    }else if (item.name === "asunto") {
        subject1.Subject = item.value;
    }else if (item.name === "email") {
        subject2.to = item.value;
    }else if (item.name === "mensaje"){
        mensaje1 = item.value;
    }
  });
  sendMessage(subject1, mensaje1, gracias);
  //sendMessage(subject2, mensaje2, gracias);
  //event.preventDefault();*/


  $.ajax({
    type: 'POST',
    url: $(form).attr('action'),
    data: formData,
    success: function(response){
      console.log(response);
      gracias();
    },
    error: function(response){
      console.log(response);
    }
  });
  return false;
});
