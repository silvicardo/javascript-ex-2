
//Starting with an array
var registeredUsersMailAddresses = ['michelePapagni@gmail.com',
                                    'fabioForghieri@gmail.com',
                                    'silvicardo@gmail.com'];

//Storing userMessage HTML element
var userMessage = document.getElementById('userMessage');

//Ask the user to login
var loggingUserMail = prompt('Inserisci la tua mail per loggarti');

//Setting a var to track if user is authorized
var authStatus = false;

//Looping through all mail addresses
for (var i = 0; i < registeredUsersMailAddresses.length; i++) {
  /* If loggingUserMail corresponds to our main array at "i"
  current user becomes authorized*/
  if (registeredUsersMailAddresses[i] == loggingUserMail) {
    authStatus = true;
  }
}

//Logging authStatus
console.log('user authorization = ' + authStatus);

//Showing the user its logIn process result
if (authStatus === true) {
  userMessage.innerHTML = 'Access granted, welcome to the jungle!';
  userMessage.style.background = 'green';
} else {
  userMessage.innerHTML = 'Access denied. Maybe next time...';
}
