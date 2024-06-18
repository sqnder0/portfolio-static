import flipCards from './tools.json' with {type: 'json'};
const greetingSpan = document.querySelectorAll('#greetingSpan');
const s1 = document.getElementById('greeting');
const s2 = document.getElementById('about');
const s3 = document.getElementById('toolkit');
const s4 = document.getElementById('s4');
const s5 = document.getElementById('contact');
const s1box = document.getElementById('s1Box');
const body = document.body;
const contactForm = document.getElementById('contactForm')
const flipCardsGrid = document.getElementById('tools');
let cards = "";
function greetUser(){
    let greetings = ['Hi', 'Hello', 'Howdy', 'Hey', 'Hey there'];
    let randomIndex = Math.floor(Math.random()*greetings.length);
    let i = 0;
    while(i<greetingSpan.length){
        greetingSpan[i].innerText = greetings[randomIndex];
        i++;
    };
    
};
greetUser();

s1box.addEventListener("click", () =>{
    s2.scrollIntoView();
});

for(var i = 0; i < flipCards.length; i++){
    let card = flipCards[i];
    let cardHtml = `<a class="toolItemContainer" target="_blank "><div class="toolItem" id="${card.id}"">
    <div class="toolItemFront">
        <img class="toolImg" src="${card.path}">
        <h3 class="toolTitle">${card.name}</h3>
    </div>
    <div class="toolItemBack">
    <p class="toolDescription">${card.innerText}</p>
    </div>
    </div>
    </a>`;
    cards += cardHtml;
};
flipCardsGrid.innerHTML = cards;

const toolItemContainer = document.getElementsByClassName('toolItemContainer');
for(var i = 0; i < toolItemContainer.length; i++){
    let card = toolItemContainer[i]
    if (card.firstChild.id != "python" || "react"){
        card.href = 'https://wikipedia.org/wiki/'.concat(card.firstChild.id)}
    else if(card.firstChild.id == "python"){
        card.href = 'https://wikipedia.org/wiki/'.concat(card.firstChild.id).concat('_(programming_language)')
    }
    else if(card.firstChild.id == "react"){
        card.href = 'https://wikipedia.org/wiki/'.concat(card.firstChild.id).concat('_(JavaScript_library)')
    };

    ;}
function isInviewport(element){
    const rect = element.getBoundingClientRect();
    if(rect.top <= window.innerHeight/2 && rect.top >= -1*window.innerHeight/2){
        window.location.hash = element.id;
    }
    };
function updateURL() {
    var sectionId = document.querySelector('section[id]').id;
    if (sectionId) {
    }
};
window.addEventListener('DOMContentLoaded', () => {
    updateURL();
});
document.body.addEventListener('wheel', (event) => {
    isInviewport(s1);
    isInviewport(s2);
    isInviewport(s3);
    isInviewport(s5);
});

contactForm.addEventListener("submit", (form) => {
    form.preventDefault();
    const elements = contactForm.children;
    const data ={};
    for(let i = 0 ; i < elements.length ; i++){
        let item = elements.item(i);
        data[item.name] = item.value;
    }
    const mailto = `mailto:${data.email}?subject=${data.fname} from ${data.cname}&body=${data.details}%0D%0A
    %0D%0A
    %0D%0A
    Extra details:%0D%0A
    company: ${data.cname}%0D%0A
    name: ${data.fname} ${data.lname}%0D%0A
    phone number: ${data.phone}%0D%0A
    %0D%0A
    %0D%0A
    This email was send from Sander's portfolio.`
    alert(`Opening mail...
(press ok to continue)`)
    window.location.href = mailto
})