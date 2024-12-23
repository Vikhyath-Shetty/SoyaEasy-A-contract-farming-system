const loginButton = document.querySelector(".btn-outline");
const signUpButton = document.querySelector(".btn-primary");
let isLoggedIn;
let contracts = [];

const url = "http://localhost:5000/api/contracts";

//login button
loginButton.addEventListener("click", () => {
  isLoggedIn = localStorage.getItem('accessToken');
  isLoggedIn ? logOut() : window.location.href = "login.html";
});

//logout
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


//fetching contracts
async function getContracts() {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response.ok) {
      contracts = await response.json();
      renderContracts();
      console.log(contracts);
    } else {
      alert("failed to fetch");
    }
  } catch (error) {
    alert("failed to fetch contracts");
    console.error(error);
  }
};
getContracts();


//rendering the contracts
function renderContracts(){
  contracts.forEach((contract)=>{
    document.querySelector(".contracts-grid")
    .innerHTML += `<div data-id = ${contract._id} class="contract-card">
                <div class="contract-header">
                    <span class="contract-type">${contract.title}</span>
                    <span class="contract-status status-active">${contract.state}</span>
                </div>
                <div class="contract-details">
                    <div class="detail-item">
                        <span class="detail-label">Location:</span>
                        <span class="detail-value">${contract.location}</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Duration:</span>
                        <span class="detail-value">${contract.duration} months</span>
                    </div>
                    <div class="detail-item">
                        <span class="detail-label">Area Required:</span>
                        <span class="detail-value">${contract.area} acres</span>
                    </div>
                </div>
                <div class="contract-footer">
                    <span class="price">&#x20B9 ${contract.price.toLocaleString()}/acre</span>
                    <button class="btn btn-primary">View Details</button>
                </div>
            </div>`
  })
  
}


