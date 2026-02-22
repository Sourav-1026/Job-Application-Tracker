let interviewList = [];
let rejectedList = [];

let totalCount = document.getElementById("total-count");
let interviewCount = document.getElementById("interview-count");
let rejectedCount = document.getElementById("rejected-count");

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
  interviewCount.innerText = interviewList.length;
  rejectedCount.innerText = rejectedList.length;
}

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
    const status = pNode.querySelector(".s-badge").innerText;
    const details = pNode.querySelector(".details").innerText;

    const cardInfo = {
      companyName,
      position,
      positionTimeSalary,
      status,
      details,
    };

    const companyExist = interviewList.find((item) => item.companyName == cardInfo.companyName);
    pNode.querySelector(".s-badge").innerHTML = `<span class="s-badge py-[8px] px-[16px] border border-[#10B981] text-[#10B981]">INTERVIEWD</span>
`;
    // status.classList.remove("bg-[#EEF4FF]");

    if (!companyExist) {
      interviewList.push(cardInfo);
    }
    renderInterview();

    console.log(interviewList);
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
              <h2 class="company text-xl text-[#002C5C] font-bold">Mobile First Corp</h2>
              <p class="position text-xl text-[#64748B]">React Native Developer</p>
            </div>
            <p class="time-salary text-xl text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
            <button class="btn bg-[#EEF4FF] text-[#002C5C]">NOT APPLIED</button>
            <p class="details text-xl">Build cross-platform mobile applications using React Native. Work on products used by millions of users worldwide.</p>
            <div>
              <button class="btn border border-[#10B981] text-[#10B981]">INTERVIEW</button>
              <button class="btn border border-[#EF4444] text-[#EF4444]">REJECTED</button>
            </div>
          </div>
          <div class="right-side">
            <span class="btn w-[50px] h-[50px] rounded-full"><i class="fa-regular fa-trash-can"></i></span>
          </div>
        `;
  }
}
