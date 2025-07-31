let emoji = document.getElementById("emoji");
let genBtn = document.getElementById("genbtn");

let emojiDisplay = [
 "The best way to get started is to quit talking and begin doing.",
      "Don't let yesterday take up too much of today.",
      "It's not whether you get knocked down, it's whether you get up.",
      "If you are working on something exciting, it will keep you motivated.",
      "Success is not in what you have, but who you are.",
      "Dream bigger. Do bigger.",
      "Your time is limited, so don’t waste it living someone else’s life.",
      "Great things never come from comfort zones.",
      "Push yourself, because no one else is going to do it for you."
];

genBtn.addEventListener("click",function(){
    let ran=Math.floor(Math.random()*emojiDisplay.length);
    emoji.textContent=emojiDisplay[ran];
});