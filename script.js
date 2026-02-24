let cardDetails = [
  {
    companyName: "Mobile First Corp",
    position: "React Native Developer",
    positionTimeSalary: "Remote • Full-time • $130,000 - $175,000",
    badge: "NOT APPLIED",
    details: "Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.",
  },
  {
    companyName: "WebFlow Agency",
    position: "Web Designer & Developer",
    positionTimeSalary: "Los Angeles, CA • Part-time • $80,000 - $120,000",
    badge: "NOT APPLIED",
    details: "Create stunning web experiences for high-profile clients. Must have portfolio and experience with modern web design trends.",
  },
  {
    companyName: "DataViz Solutions",
    position: "Data Visualization Specialist",
    positionTimeSalary: "Boston, MA • Full-time • $125,000 - $165,000",
    badge: "NOT APPLIED",
    details: "Transform complex data into compelling visualizations. Required skills: D3.js, React, and strong analytical thinking.",
  },
  {
    companyName: "CloudFirst Inc",
    position: "Backend Developer",
    positionTimeSalary: "Seattle, WA • Full-time • $140,000 - $190,000",
    badge: "NOT APPLIED",
    details: "Design and maintain scalable backend systems using Python and AWS. Work with modern DevOps practices and cloud infrastructure.",
  },
  {
    companyName: "Innovation Labs",
    position: "UI/UX Engineer",
    positionTimeSalary: "Austin, TX • Full-time • $110,000 - $150,000",
    badge: "NOT APPLIED",
    details: "Create beautiful and functional user interfaces for our suite of products. Strong design skills and frontend development expertise required.",
  },
  {
    companyName: "MegaCorp Solutions",
    position: "JavaScript Developer",
    positionTimeSalary: "New York, NY • Full-time • $130,000 - $170,00",
    badge: "NOT APPLIED",
    details: "Build enterprise applications with JavaScript and modern frameworks.We offer competitive compensation, health insurance, and professional development opportunities.",
  },
  {
    companyName: "StartupXYZ",
    position: "Full Stack Engineer",
    positionTimeSalary: "Remote • Full-time • $120,000 - $160,000",
    badge: "NOT APPLIED",
    details: "Join our fast-growing startup and work on our core platform. Experience with Node.js and React required.Great benefits and equity package included.",
  },
  {
    companyName: "TechCorp Industries",
    position: "Senior Frontend Developer",
    positionTimeSalary: "San Francisco, CA • Full-time • $130,000 - $175,000",
    badge: "NOT APPLIED",
    details: "We are looking for an experienced Frontend Developer to build scalable web applications using React andYou will work with a talented team on cutting- edge projects.",
  },
];

let allCard = [];
let interviewList = [];
let rejectedList = [];
let currentStatus = "all-filter-btn";

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let totalSideCount = document.getElementById("side-total");

const allCardSection = document.getElementById("all-card");
const main = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");

function calculateCount() {
  totalCount.innerText = allCard.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;

  if (currentStatus === "all-filter-btn") {
    totalSideCount.innerText = allCard.length;
  } else if (currentStatus === "interview-filter-btn") {
    totalSideCount.innerText = interviewList.length;
  } else if (currentStatus === "rejected-filter-btn") {
    totalSideCount.innerText = rejectedList.length;
  }
}

function toggleStyle(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("text-[#64748B]");
  interviewBtn.classList.add("text-[#64748B]");
  rejectedBtn.classList.add("text-[#64748B]");

  const selected = document.getElementById(id);
  currentStatus = id;

  selected.classList.remove("text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id == "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    totalSideCount.innerText = interviewList.length;
    if (interviewList.length) {
      renderInterview();
    } else {
      renderNoJobAvailable();
    }
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    filteredSection.classList.add("hidden");
    totalSideCount.innerText = allCard.length;
    if (allCard?.length) {
      renderUpdateCard();
    } else {
      renderNoJobAvailable();
    }
  } else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    totalSideCount.innerText = rejectedList.length;
    if (rejectedList.length) {
      renderRejected();
    } else {
      renderNoJobAvailable();
    }
  }
}

main.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    const pNode = event.target.parentNode.parentNode;
    const companyName = pNode.querySelector(".company").innerText;
    const position = pNode.querySelector(".position").innerText;
    const positionTimeSalary = pNode.querySelector(".time-salary").innerText;
    const badge = pNode.querySelector(".s-badge").innerText;
    const details = pNode.querySelector(".details").innerText;

    pNode.querySelector(".s-badge").innerHTML = `<span class="s-badge py-[8px] px-[16px] bg-[#10B981] text-white">INTERVIEWD</span>`;

    const cardInfo = {
      companyName,
      position,
      positionTimeSalary,
      badge,
      details,
    };

    const companyExist = interviewList.find((item) => item.companyName == cardInfo.companyName);
    const updatedAllCard = allCard.map((item) => (item.companyName === cardInfo.companyName ? { ...item, badge: "INTERVIEWD" } : item));
    allCard = updatedAllCard;
    if (!companyExist) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter((item) => item.companyName != cardInfo.companyName);
    if (currentStatus == "rejected-filter-btn") {
      if (rejectedList.length) {
        renderRejected();
      } else {
        renderNoJobAvailable();
      }
      return calculateCount();
    }

    calculateCount();
  } else if (event.target.classList.contains("rejected-btn")) {
    const pNode = event.target.parentNode.parentNode;
    const companyName = pNode.querySelector(".company").innerText;
    const position = pNode.querySelector(".position").innerText;
    const positionTimeSalary = pNode.querySelector(".time-salary").innerText;
    const badge = pNode.querySelector(".s-badge").innerText;
    const details = pNode.querySelector(".details").innerText;

    pNode.querySelector(".s-badge").innerHTML = `<span class="s-badge py-[8px] px-[16px] bg-[#EF4444] text-white">REJECTED</span>`;

    const cardInfo = {
      companyName,
      position,
      positionTimeSalary,
      badge,
      details,
    };
    const updatedAllCard = allCard.map((item) => (item.companyName === cardInfo.companyName ? { ...item, badge: "REJECTED" } : item));
    allCard = updatedAllCard;
    const companyExist = rejectedList.find((item) => item.companyName == cardInfo.companyName);

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter((item) => item.companyName != cardInfo.companyName);
    if (currentStatus == "interview-filter-btn") {
      if (interviewList.length) {
        renderInterview();
      } else {
        renderNoJobAvailable();
      }
      return calculateCount();
    }

    calculateCount();
  }
});

function renderAll() {
  filteredSection.innerHTML = "";
  allCard = [...cardDetails];
  for (let interview of allCard) {
    let div = document.createElement("div");
    div.className = "flex justify-between shadow-sm rounded-md p-[24px]";
    div.innerHTML = `
          <div class="left-side space-y-[20px]">
          <div>
          <h2 class="company text-xl text-[#002C5C] font-bold">${interview.companyName}</h2>
          <p class="position text-xl text-[#64748B]">${interview.position}</p>
          </div>
          <p class="time-salary text-xl text-[#64748B]">${interview.positionTimeSalary}</p>
          <span class="s-badge py-[8px] bg-[#EEF4FF] text-[#002C5C]">${interview?.badge}</span>            
          <p class="details text-xl mt-[16px]">${interview.details}</p>
          <div>
          <button class="btn interview-btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
          <button class="btn rejected-btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
          </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full delete"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
    allCardSection.appendChild(div);
  }
  calculateCount();
}
renderAll();

function renderUpdateCard() {
  allCardSection.innerHTML = "";
  console.log(allCard);
  for (let interview of allCard) {
    let div = document.createElement("div");
    div.className = "flex justify-between shadow-sm rounded-md p-[24px]";
    div.innerHTML = `
          <div class="left-side space-y-[20px]">
          <div>
          <h2 class="company text-xl text-[#002C5C] font-bold">${interview.companyName}</h2>
          <p class="position text-xl text-[#64748B]">${interview.position}</p>
          </div>
          <p class="time-salary text-xl text-[#64748B]">${interview.positionTimeSalary}</p>
           <span class="s-badge ${interview?.badge === "REJECTED" ? "py-[8px] px-[16px] bg-[#EF4444]  text-white" : interview?.badge === "INTERVIEWD" ? "py-[8px] px-[16px] bg-[#10B981] text-white" : "py-[8px] bg-[#EEF4FF] text-[#002C5C]"}">${interview.badge}</span>                       
          <p class="details text-xl mt-[16px]">${interview.details}</p>
          <div>
          <button class="btn interview-btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
          <button class="btn rejected-btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
          </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full delete"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
    allCardSection.appendChild(div);
  }
  calculateCount();
}

main.addEventListener("click", function (event) {
  const deleteBtn = event.target.closest(".delete");
  if (!deleteBtn) return;

  const pNode = deleteBtn.parentNode.parentNode;
  const companyName = pNode.querySelector(".company").innerText;

  if (currentStatus === "all-filter-btn") {
    allCard = allCard.filter((data) => data.companyName !== companyName);
    cardDetails = cardDetails.filter((data) => data.companyName !== companyName);

    interviewList = interviewList.filter((data) => data.companyName !== companyName);
    rejectedList = rejectedList.filter((data) => data.companyName !== companyName);

    renderUpdateCard();
  } else if (currentStatus === "interview-filter-btn") {
    interviewList = interviewList.filter((data) => data.companyName !== companyName);

    allCard = allCard.map((data) => (data.companyName === companyName ? { ...data, badge: "NOT APPLIED" } : data));

    if (interviewList.length) {
      renderInterview();
    } else {
      renderNoJobAvailable();
    }
  } else if (currentStatus === "rejected-filter-btn") {
    rejectedList = rejectedList.filter((data) => data.companyName !== companyName);

    allCard = allCard.map((data) => (data.companyName === companyName ? { ...data, badge: "NOT APPLIED" } : data));

    if (rejectedList.length) {
      renderRejected();
    } else {
      renderNoJobAvailable();
    }
  }

  calculateCount();
});

function renderInterview() {
  filteredSection.innerHTML = "";
  for (let interview of interviewList) {
    let div = document.createElement("div");
    div.className = "flex justify-between shadow-sm rounded-md p-[24px]";
    div.innerHTML = `
            <div class="left-side space-y-[20px]">
            <div>
              <h2 class="company text-xl text-[#002C5C] font-bold">${interview.companyName}</h2>
              <p class="position text-xl text-[#64748B]">${interview.position}</p>
            </div>
            <p class="time-salary text-xl text-[#64748B]">${interview.positionTimeSalary}</p>
            <span class="s-badge py-[8px] px-[16px] bg-[#10B981] text-white">INTERVIEWED</span>
            <p class="details text-xl mt-[16px]">${interview.details}</p>
            <div>
              <button class="btn interview-btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
              <button class="btn rejected-btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
            </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full delete"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";
  for (let rejected of rejectedList) {
    let div = document.createElement("div");
    div.className = "flex justify-between shadow-sm rounded-md p-[24px]";
    div.innerHTML = `
            <div class="left-side space-y-[20px]">
            <div>
              <h2 class="company text-xl text-[#002C5C] font-bold">${rejected.companyName}</h2>
              <p class="position text-xl text-[#64748B]">${rejected.position}</p>
            </div>
            <p class="time-salary text-xl text-[#64748B]">${rejected.positionTimeSalary}</p>
            <span class="s-badge py-[8px] px-[16px] bg-[#EF4444] text-white">REJECTED</span>            
            <p class="details text-xl mt-[16px]">${rejected.details}</p>
            <div>
              <button class="btn interview-btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
              <button class="btn rejected-btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
            </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full delete"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}

function renderNoJobAvailable() {
  filteredSection.innerHTML = "";
  let div = document.createElement("div");
  div.className = "shadow-sm rounded-md p-[24px]";
  div.innerHTML = `
            <div class="left-side flex flex-col justify-center items-center space-y-[20px]">
            <img src="/jobs.png" alt="job" class="mt-[111px]"/>
            <h2 class= "text-xl text-[#002C5C] font-semibold">No jobs available</h2>
            <p class= "text-[#64748B] mb-[111px]">Check back soon for new job opportunities</p>
            </div>
        `;
  filteredSection.appendChild(div);
}
calculateCount();
