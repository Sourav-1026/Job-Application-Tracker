let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");
let totalSideCount = document.getElementById("side-total");

// console.log(totalCount);
// console.log(interviewCount);
// console.log(rejectedCount);

const allCardSection = document.getElementById("all-card");
const main = document.querySelector("main");
const filteredSection = document.getElementById("filtered-section");

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");

// const count = allCardSection.children.length;
// console.log(count);

function calculateCount() {
  totalCount.innerText = allCardSection.children.length;
  totalSideCount.innerText = allCardSection.children.length;
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

calculateCount();

function toggleStyle(id) {
  allBtn.classList.remove("bg-[#3B82F6]", "text-white");
  interviewBtn.classList.remove("bg-[#3B82F6]", "text-white");
  rejectedBtn.classList.remove("bg-[#3B82F6]", "text-white");

  allBtn.classList.add("text-[#64748B]");
  interviewBtn.classList.add("text-[#64748B]");
  rejectedBtn.classList.add("text-[#64748B]");

  const selected = document.getElementById(id);

  selected.classList.remove("text-[#64748B]");
  selected.classList.add("bg-[#3B82F6]", "text-white");

  if (id == "interview-filter-btn") {
    allCardSection.classList.add("hidden");
    // rejectedBtn.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
    totalSideCount.innerText = interviewList.length;
  } else if (id == "all-filter-btn") {
    allCardSection.classList.remove("hidden");
    // rejectedBtn.classList.add("hidden");
    filteredSection.classList.add("hidden");
    totalSideCount.innerText = allCardSection.children.length;
  } else if (id == "rejected-filter-btn") {
    allCardSection.classList.add("hidden");
    // interviewBtn.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
    totalSideCount.innerText = rejectedList.length;
  }
}

main.addEventListener("click", function (event) {
  if (event.target.classList.contains("interview-btn")) {
    // const pNode = event.target.closest(".card");
    const pNode = event.target.parentNode.parentNode;
    //   console.log(event.target.parentNode.parentNode);
    const companyName = pNode.querySelector(".company").innerText;
    //   console.log(companyName);
    const position = pNode.querySelector(".position").innerText;
    const positionTimeSalary = pNode.querySelector(".time-salary").innerText;
    const badge = pNode.querySelector(".s-badge").innerText;
    const details = pNode.querySelector(".details").innerText;

    // const badge = pNode.querySelector(".s-badge");
    pNode.querySelector(".s-badge").innerHTML = `<span class="s-badge py-[8px] px-[16px] bg-[#10B981] text-white">INTERVIEWD</span>`;
    // badge.className = "s-badge py-[8px] px-[16px] bg-[#10B981] text-white";

    const cardInfo = {
      companyName,
      position,
      positionTimeSalary,
      badge,
      details,
    };

    const companyExist = interviewList.find((item) => item.companyName == cardInfo.companyName);

    // status.classList.remove("bg-[#EEF4FF]");

    if (!companyExist) {
      interviewList.push(cardInfo);
    }

    calculateCount();
    renderInterview();

    // console.log(interviewList);
  } else if (event.target.classList.contains("rejected-btn")) {
    const pNode = event.target.parentNode.parentNode;
    //   console.log(event.target.parentNode.parentNode);
    const companyName = pNode.querySelector(".company").innerText;
    //   console.log(companyName);
    const position = pNode.querySelector(".position").innerText;
    const positionTimeSalary = pNode.querySelector(".time-salary").innerText;
    const badge = pNode.querySelector(".s-badge").innerText;
    const details = pNode.querySelector(".details").innerText;

    // const badge = pNode.querySelector(".s-badge");
    pNode.querySelector(".s-badge").innerHTML = `<span class="s-badge py-[8px] px-[16px] bg-[#EF4444] text-white">REJECTED</span>`;
    // badge.className = "s-badge py-[8px] px-[16px] bg-[#10B981] text-white";

    const cardInfo = {
      companyName,
      position,
      positionTimeSalary,
      badge,
      details,
    };

    const companyExist = rejectedList.find((item) => item.companyName == cardInfo.companyName);

    // status.classList.remove("bg-[#EEF4FF]");

    if (!companyExist) {
      rejectedList.push(cardInfo);
    }

    calculateCount();
    renderRejected();
  }
});

function renderInterview() {
  filteredSection.innerHTML = "";
  for (let interview of interviewList) {
    console.log(interview);
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
              <button class="btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
              <button class="btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
            </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}

function renderRejected() {
  filteredSection.innerHTML = "";
  for (let rejected of rejectedList) {
    console.log(rejected);
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
              <button class="btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
              <button class="btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
            </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
    filteredSection.appendChild(div);
  }
}
