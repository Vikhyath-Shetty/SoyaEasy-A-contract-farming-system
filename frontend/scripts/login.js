const email = document.getElementById("email");
const password = document.getElementById("password");
const url = "http://localhost:5000/api/users/login";

const loginUser = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });

    if (response.ok) {
      const data = await response.json();
      localStorage.setItem("accessToken", JSON.stringify(data.accessToken));
      // console.log(data.accessToken);
      document.getElementById("signinForm").reset();
      window.location.href = "index.html";
    } else {
      alert("Sign in failed");
    }
  } catch (error) {
    alert("Something went wrong");
    console.error(error);
  }
};

document.getElementById("signinForm").addEventListener("submit", (e) => {
  loginUser(e);
});


