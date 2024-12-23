const title = document.getElementById("contractTitle");
const crop_type = document.getElementById("cropType");
const Locat = document.getElementById("location");
const duration = document.getElementById("duration");
const area = document.getElementById("areaRequired");
const price = document.getElementById("pricePerAcre");
const description = document.getElementById("description");
// const requirements = document.querySelectorAll(".req");
const landprep = document.getElementById("landPrep");
const sowing = document.getElementById("sowing");
const cultivation = document.getElementById("cultivation");
const harvest = document.getElementById("harvest");
const url = "http://localhost:5000/api/contracts"
const requirementArray = [];

// console.log(title,Locat,crop_type,duration,area,price,description,requirements,landprep,sowing,cultivation,harvest);

// console.log(requirements)

function getRequirements(){
  document.querySelectorAll(".req").forEach((requirement) => {
    requirementArray.push(requirement.value);
  })
}

async function createContract(e){
  e.preventDefault();
  getRequirements();
  const accessToken = JSON.parse(localStorage.getItem("accessToken"));

  try{
    const response = await fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization":`Bearer ${accessToken}`,
      },
      body: JSON.stringify({
       title: title.value,
       crop_type: crop_type.value,
        location: Locat.value,
        duration: duration.value,
        area: area.value,
        price: price.value,
        description: description.value,
        requirements: requirementArray,
        timeline: {
          landprep: landprep.value,
          sowing: sowing.value,
          cultivation: cultivation.value,
          harvest: harvest.value,
        }
      })
    })

    if(response.ok){
      const contract = await response.json();
      console.log(`created contract is : ${contract}`);
      document.getElementById('createContractForm').reset()
      requirementArray.length = 0;
      window.location.href = "index.html";
    }
  }catch(error){
    alert(error.message);
  }
}


function addRequirement() {
  const requirementsList = document.getElementById('requirementsList');
  const newRequirement = document.createElement('div');
  newRequirement.className = 'requirement-item';
  newRequirement.innerHTML = `
      <input type="text" class="req" placeholder="Add requirement">
      <button type="button" class="btn btn-secondary" onclick="addRequirement()">+</button>
  `;
  requirementsList.appendChild(newRequirement);
}

function resetForm() {
  document.getElementById('createContractForm').reset();
}

document.getElementById('createContractForm').addEventListener('submit', (e)=> {
  createContract(e);
});