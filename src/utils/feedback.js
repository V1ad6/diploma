import axios from "axios";

function validateForm(e) {
  e.preventDefault();

  const name = e.target.elements.username.value,
        mail = e.target.elements.mail.value,
        text = e.target.elements.text.value;

  const mailPattern = /(^[a-z0-9_\.]+)\@([a-z]){1,}\.([a-z])/;

  let errorText = "";

  if (name.length <= 3) {
    errorText += "Name should be longer than 3 characters \n";
  } 

  if (!mailPattern.test(mail)) {
    errorText += "Wrong mail \n";
  }

  if (!text) {
    errorText += "Don't leave this field empty \n";
  }

  if (errorText) {
    alert(errorText);
    return false;
  } else {
    return true;
  }
};

function sendFeedback(e) {
  if (!validateForm(e)) {
    return;
  }

  axios.post('http://localhost:3001/sendFeedback', {
    username: e.target.elements.username.value,
    email: e.target.elements.mail.value,
    text: e.target.elements.text.value,
  });

  e.target.reset();
}

export default sendFeedback;