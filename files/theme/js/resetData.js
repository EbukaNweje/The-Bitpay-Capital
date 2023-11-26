
const email = document.getElementById('email')
const button = document.getElementById('forgetPwdBtn')
console.log(button);

console.log(password);

button.onclick = async (event) => {
  event.preventDefault();

  const data = {
    email: email.value,
  };

  console.log(data);

  fetch('https://the-bitpay-capital-back-end.vercel.app/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error);
    });
};