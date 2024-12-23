const username = document.getElementById("name");
const land = document.getElementById("land-size");
const experience = document.getElementById("experience");
const information = document.getElementById("message");
let url = "";
const accessToken = JSON.parse(localStorage.getItem("accessToken"));



function getId(){
  const urlParams = new URLSearchParams(window.location.search);
  const productId = urlParams.get("id");
  return productId;
}


function buildUrl(){
  url = `http://localhost:5000/api/contracts/${getId()}`;
}


async function getContract() {
  buildUrl();
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
    });

    if(response.ok) {
      const contract = await response.json();
      renderContract(contract);
      // console.log(contract);
    } 
  } catch (error) {
    alert("failed to fetch contract");
    console.error(error);
  }
};

function renderContract(contract){
  document.querySelector(".contract-info")
  .innerHTML = `<div class="contract-header">
                    <h1 class="contract-title">${contract.title}</h1>
                    <span class="status-badge active">${contract.state}</span>
                </div>

                <div class="key-details">
                    <div class="detail-group">
                        <div class="detail-label">Location</div>
                        <div class="detail-value">${contract.location}</div>
                    </div>
                    <div class="detail-group">
                        <div class="detail-label">Duration</div>
                        <div class="detail-value">${contract.duration} months</div>
                    </div>
                    <div class="detail-group">
                        <div class="detail-label">Area Required</div>
                        <div class="detail-value">${contract.area.toLocaleString()} acres</div>
                    </div>
                    <div class="detail-group">
                        <div class="detail-label">Price per Acre</div>
                        <div class="detail-value">&#x20B9;${contract.price.toLocaleString()}</div>
                    </div>
                </div>

                <div class="description">
                    <h3>Contract Description</h3>
                    <p>${contract.description}</p>
                </div>

                <div class="requirements">
                    <h3>Requirements</h3>
                    <ul>
                       ${contract.requirements.map(requirement => `<li>${requirement}</li>`).join('')}
                    </ul>
                </div>

                <div class="timeline">
                    <h3>Contract Timeline</h3>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h4>Month 1: Land Preparation</h4>
                            <p>${contract.timeline.landprep}</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h4>Month 2: Sowing</h4>
                            <p>${contract.timeline.sowing}</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h4>Months 3-5: Cultivation</h4>
                            <p>${contract.timeline.cultivation}</p>
                        </div>
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-content">
                            <h4>Month 6: Harvest</h4>
                            <p>${contract.timeline.harvest}</p>
                        </div>
                    </div>
                </div>`
}


getContract();



// <li>Minimum 50 acres of cultivable land</li>
// <li>Access to irrigation facilities</li>
// <li>Experience in wheat farming</li>
// <li>Ability to follow prescribed farming practices</li>
// <li>Proper documentation of land ownership/lease</li>