import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const cors = require('cors')

app.use(cors())


const form = document.querySelector('#loginform');
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const users = document.querySelector('#user').value;
    const pass = document.querySelector('#pass').value;

    const auth = getAuth();
signInWithEmailAndPassword(auth, users, pass)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    form.reset();
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

})