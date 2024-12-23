const username = document.getElementById("name");
const type = document.getElementById("type");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const password = document.getElementById("password");
const url = "http://localhost:5000/api/users/register"


async function singUpUser(e){
  e.preventDefault();
  try{
    const response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       username:username.value,
       type:type.value,
       phone:phone.value,
       email:email.value,
       password:password.value,
      })
    })

    if(response.ok){
      const user = await response.json();
      console.log(`registered user is : ${user}`);
      document.getElementById("registerForm").reset();
      window.location.href = "index.html";
    }
  }catch(error){
    alert(error.message);
  }
}

document.getElementById("registerForm").addEventListener("submit", (e) => {
  singUpUser(e);
});



