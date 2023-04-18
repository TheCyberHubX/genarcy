const carouselText = [
  {text: "Began Development", color: "red"},
  {text: "Changed The Theme.", color: "red"},
  {text: "I changed a lot of the website.", color: "red"},
  {text: "further development", color: "red"},
  {text: "lots of changes to the home screen and n-gon is hosted on the website.", color: "red"},
  {text: "Added Alot of more games...Check them out", color: "red"},
  {text: "Added of Texture", color: "red"},
  {text: "began development", color: "red"},
  {text: "money?!", color: "red"},
  {text: "ddddddddddddddddddd", color: "red"},
  {text: "grrrrrrr", color: "red"},
  {text: "Made the game 1 be hosted on the website", color: "red"},
  {text: "Adding more games soon", color: "red"}
]

// use this a a templete  {text: "text", color: "red"}

$( document ).ready(async function() {
  carousel(carouselText, "#feature-text")
});

async function typeSentence(sentence, eleRef, delay = 15 ){
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return;
}

async function deleteSentence(eleRef) {
  const sentence = $(eleRef).html();
  const letters = sentence.split("");
  let i = 0;
    $(eleRef).append("<br>");
  }

async function carousel(carouselList, eleRef) {
    var i = 0;
    while(true) {
      updateFontColor(eleRef, carouselList[i].color)
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(250);
      await deleteSentence(eleRef);
      i++
      if(i >= carouselList.length) {return;}
    }
}

function updateFontColor(eleRef, color) {
  $(eleRef).css('color', color);
}

function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

