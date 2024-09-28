const text = "Hey, my lovely butterfly (Just don't forget to click on tap to play on ri8 top corner to play the music), From the moment I saw you, I was drawn toour captivating eyes and charming smile. Your presence lights up the room, and I feel grateful to have been in your orbit. I wanted to confess my feelings to you, even if it may seem sudden. You shine so brightly, like the moon, and deserve to be treated like royalty. I apologize if this makes you feel awkward, but I wanted to be honest about my feelings. You're a unique and precious gem, deserving of kindness, respect, and adoration. To whoever captures your heart next, I hope they treat you like the real-life princess you are. Remember, you're a shining star, and your light should never be dimmed. Keep sparkling, my lovely butterfly, and know you'll always have a special place in my heart. Now click on @CLICK ME at top ri8 corner of this page. Thanks…"
   const paragraph = text.split("");

let i = 0;

function dashOut(arr) {
  if (i < arr.length) {
    console.log(arr[i]);
    document.querySelector(".textCont").textContent += arr[i];

    i++;
    console.log("The i count: " + i);
    setTimeout(function () {
      dashOut(arr);
    }, interval(arr[i]));
  }
}

function interval(letter) {
  console.log(letter);
  if (letter == ";" || letter == "." || letter == ",") {
    return Math.floor(Math.random() * 500 + 500);
  } else {
    return Math.floor(Math.random() * 130 + 5);
  }
}

function startFromBegin() {
  i = 0;
  dashOut(paragraph);
}

startFromBegin();
