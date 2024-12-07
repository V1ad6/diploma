const form = $(".feedback");

form.submit((e) => {
  e.preventDefault();

  const name = form.find("input[name=username]").val(),
        mail = form.find("input[name=mail]").val(),
        text = form.find("textarea").val();

  const mailPattern = /(^[a-z0-9_\.]+)\@([a-z]){1,}\.([a-z])/;

  let errorText = "";

  if (name.length < 3) {
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
  }

  $.ajax({
    url: "../src/php/report.php",
    method: "post",
    data: form.serialize(),
    success: () => {
      form.trigger("reset");
  
      $(".send-alert").addClass("send-alert_visible");
      setTimeout(() => {
        $(".send-alert").removeClass("send-alert_visible");
      }, 2000);
    }
  });
});