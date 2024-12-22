const loginButton = document.querySelector(".btn-outline");
const signUpButton = document.querySelector(".btn-primary");
let isLoggedIn;


//login button
loginButton.addEventListener("click", () => {
  isLoggedIn = localStorage.getItem('accessToken');
  isLoggedIn ? logOut() : window.location.href = "login.html";
});

function logOut() {
  localStorage.removeItem("accessToken");
  updateLoginButton();
}

function updateLoginButton() {
  isLoggedIn = localStorage.getItem("accessToken");
  loginButton.textContent = isLoggedIn ? "Logout" : "Login";
}

//signUp button
signUpButton.addEventListener("click",()=>{
  window.location.href = "signup.html";
})
updateLoginButton();


