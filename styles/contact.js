let form = document.querySelector(".form");

form.addEventListener("submit", (event) => {
  if (
    (form.name.value == "") |
    (form.email.value == "") |
    (form.feedback.value == "")
  ) {
    console.warn(
      "You must enter all the necessary information to submit this form"
    );
    event.preventDefault();
    return;
  }
  console.log(
    "---------------------- Feedback Submission ----------------------"
  );
  console.log(`Name: ${form.name.value}`);
  console.log(`Email: ${email.value}`);
  console.log(`Name: ${feedback.value}`);
  event.preventDefault();
});
