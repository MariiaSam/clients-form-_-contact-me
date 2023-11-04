const form = document.querySelector(".js-question");

form.addEventListener("submit", handlerQuestion);

function handlerQuestion(evt) {
  evt.preventDefault();

    // const { question, email, phone, userName } = evt.currentTarget.elements;
    // const request = {
    //   name: userName.value,
    //   email: email.value,
    //   phone: phone.value,
    //   comment: question.value,}
    //   console.log(request)}


    const formData = new FormData(evt.currentTarget);
    const request = {};
  
    formData.forEach((value, key) => (request[key] = value));
    serviceQuestion(request)
    .then(() => alert("Success"))
    .catch(() => alert("Error"));
  
    evt.currentTarget.reset();
  }
  
  function serviceQuestion(data) {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    };
    
    return fetch("http://127.0.0.1:3000/api/question", options)
    .then((resp) => {
      if (!resp.ok) {
        throw new Error(resp.statusText);
      }
      return resp.json();
    });
  }
