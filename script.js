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
