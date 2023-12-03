
const names = document.getElementById('names');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('pass1');
const confirmPassword = document.getElementById('pass2');
const gender = document.getElementById('gender');
const country = document.getElementById('country');
const address = document.getElementById('address');
const hear = document.getElementById('hear');
const refer = document.getElementById('refer');
const button = document.querySelector('.subTinsedit');



const sendSignUpEmail = async () => {
  const data = {
    email: email.value,
  };
  fetch('https://bitpaycapital.onrender.com/api/signupemailsand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
};

button.onclick = async (event) => {
  event.preventDefault();

  const data = {
    fullName: names.value,
    email: email.value,
    phoneNumber: phone.value,
    password: password.value,
    gender: gender.value,
    country: country.value,
    address: address.value,
  };

  console.log(data);

  fetch('https://the-bitpay-capital-back-end.vercel.app/api/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  .then(response=> response.json())
    .then(response => {
      localStorage.setItem('userId', response.data._id)
          sendSignUpEmail();
      console.log(response.data._id)
      const userId = localStorage.getItem('userId')
      console.log("Local User Id", userId);
      window.location.href = `https://www.accounts-bitpaycapital.com/#/${userId}`;
      
    })
    .catch((error) => {
      console.log(error);
    });
};

