const quoteText = document.querySelector(".quote"),
quoteBtn = document.querySelector("button"),
authorName = document.querySelector(".author .name"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
facebookBtn = document.querySelector(".facebook");

// Generating random quotes when clicking button
function randomQuote() {
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote..";
  //Fetching random quotes from API and parsing it into JS object
  fetch("https://api.quotable.io/random").then(response => 
    response.json()).then(result=> {
    quoteText.innerText = result.content;
    authorName.innerText = result.author;
    quoteBtn.innerText = "New Quote";
    quoteBtn.classList.remove("loading");
  });
}

//Add eventlistener
//when we click "New Quote" button
quoteBtn.addEventListener("click", randomQuote);
//When we click on sound icon
soundBtn.addEventListener("click", ()=>{
  //the speechSynthesisUtterance is a web speech api that represents a speech request
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} said by ${authorName.innerText}`);
  //speak method of speechSynthesis speaks the utterance
  speechSynthesis.speak(utterance);
});
//When we click on copy icon
copyBtn.addEventListener("click",()=> {
  //copying the quote Text
  //writeText() property writes the specified text strings to the system clipboard
  navigator.clipboard.writeText(quoteText.innerText);
});
//when we click on facebook icon
facebookBtn.addEventListener("click",()=>{
  let fbUrl = `https://www.facebook.com/sharer/sharer.php?url=${quoteText.innerText}`;
  window.open(fbUrl,"_blank");
});
