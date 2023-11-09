document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      alert("Please fill in all the required fields.");
      return;
    }

    emailjs.init("X7hi38rFzoQGWv1PX");

    const emailParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs
      .send("service_0o5ixli", "template_e9suo63", emailParams)
      .then(function (response) {
        console.log("Email sent successfully:", response);
        alert("E-mail submitted successfully!");
        form.reset();
      })
      .catch(function (error) {
        console.error("Email send error:", error);
        alert("Error sending email. Please try again later. Error message: " + error.text);
      });
  });
});
