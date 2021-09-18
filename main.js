window.onload = () => {
  const form = document.getElementById("form");

  console.log(form);
  function validation(event) {
    event.preventDefault();

    var fullname = document.getElementById("fullname").value;

    var mail = document.getElementById("mail").value;

    var phone = document.getElementById("phone").value;
    console.log(phone);
    var message = document.getElementById("message").value;

    var error_message = document.getElementById("error_message");

    var text;
    const regPhone = /^\+(?:[0-9] ?){6,14}[0-9]$/g;
    const regMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    if (fullname === "" && phone === "" && mail === "" && message === "") {
      alert("vide!!!!!");
    } else if (!regMail.test(mail)) {
      text = "please enter a valid mail";
      error_message.innerHTML = text;

      return;
    } else if (regPhone.test(phone)) {
      text = "please enter a valid phone";
      error_message.innerHTML = text;
      return;
    } else if (message.length > 142) {
      text = "please Enter  minumum 147 character";
      error_message.innerHTML = text;
      return;
    }
  }
  form.addEventListener("submit", (event) => validation(event));




fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
      name: "user1",
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  }).then(async (res, req) => {
      console.log(res.status)
      const data = await res.json()
      console.log(data)
  }).catch((error) => console.log(error));
};

