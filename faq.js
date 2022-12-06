const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];



let accordianBody = document.querySelector('h1');

function createFaq(question, answer, i) {

  let faq = document.createElement('div');
  faq.className = "faq"

  let faqHeader = document.createElement('div');
  faq.appendChild(faqHeader).className = "faq_header";

  let faqHeader2 = document.createElement('div');
  faq.appendChild(faqHeader2).className = "faq_header";

  let faqQuestion = document.createElement('h3');
  faqQuestion.textContent = question;
  faqHeader.appendChild(faqQuestion).className = "q";

  let showHideBtn = document.createElement('h3');
  showHideBtn.textContent = "+";
  faqHeader.appendChild(showHideBtn).className = "show_btn";
  showHideBtn.id = "btn" + i;

  let faqAnswer = document.createElement('h3');
  faqAnswer.textContent = "";
  faqHeader2.appendChild(faqAnswer).className = "a";
  faqAnswer.id="a"+i;

  let accordionBody = document.querySelector(".accordian_body");
  accordionBody.appendChild(faq);

}


for (let i = 0; i < faqData.length; i++) {
  createFaq(faqData[i].question, faqData[i].answer, i);
}



function showFaq(i, btn) {
  let answers = document.querySelectorAll(".a");
  console.log(btStatus[i])
  if(btStatus[i]==true)
  { 
    answers[i].textContent=faqData[i].answer; 
  }
  else {
  document.getElementById("a"+i).innerHTML="";
  }
}

function btnStatusUpdate(i, bt) {
  if(btStatus[i]==false) {
  btStatus[i] = true
  console.log(btStatus[i],i)
  showFaq(i,bt)
  }
  else {
  btStatus[i] =false
  showFaq(i,bt)
  }
}


const bts = document.getElementsByClassName("show_btn");
const btStatus = []

for (let i = 0; i < bts.length; i++) {
  const bt = document.getElementById("btn" + i);
 btStatus.push(false);
  console.log("in for")
  bt.addEventListener("click", function(){
    btnStatusUpdate(i, bt)});
}
