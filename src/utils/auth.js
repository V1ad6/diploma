import axios from "axios";
//import * as passwordHash from 'password-hash';

function validate(e) {
  e.preventDefault();

  const name = e.target.elements.username.value,
        mail = e.target.elements.mail.value,
        password = e.target.elements.password.value;

  const mailPattern = /(^[a-z0-9_\.]+)\@([a-z]){1,}\.([a-z])/;

  let errorText = "";

  if (name.length <= 3) {
    errorText += "Name should be longer than 3 characters \n";
  } 

  if (!mailPattern.test(mail)) {
    errorText += "Wrong mail \n";
  }

  if (password.length <= 6) {
    errorText += "Password should be longer than 6 characters \n";
  } 

  if (errorText) {
    alert(errorText);
    return false;
  } else {
    return true;
  }
};

export function register(e) {
  if (!validate(e)) {
    return;
  }

  // const hashedPass = passwordHash.generate(e.target.elements.password.value);

  // axios.post('http://localhost:3001/addUser', {
  //   username: e.target.elements.username.value,
  //   email: e.target.elements.mail.value,
  //   password: hashedPass,
  // });

  e.target.reset();
}

export function login(e) {

} 