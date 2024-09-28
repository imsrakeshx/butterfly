const text =
  "Hey hii Butterfly my pretty girl(Just don't forget to click on tap to play on ri8 top corner), 💕 from the moment I laid eyes on you, I was swept away by your beauty. 😍 I know it may seem crazy, but I couldn't help the way I felt. Your captivating eyes, your radiant smile, and that adorable dimple... they all stole my heart.❤ I know we've never met in person, but I feel a deep connection to you. I imagine what it would be like to hold your hand, to look into your eyes, and to see your smile up close. 😊 It's as if I've known you my whole life. I am not naive, I know you've had many admirers, and I'm probably just another one in a long line of confessions. 😊 But I'm already out of that competition, I know I don't stand a chance. Still, I had to take a chance, no matter how small, to tell you how I feel. Even if I'm not the one you choose, I'll always cherish the thought of you. You deserve all the love and happiness in the world, Butterfly. 💗 And I promise to be there for you not just in the good times, but in the tough ones too. You'll always have a friend in me, and who knows, maybe someday that friendship will blossom into something more.Until then, know that you're always on my mind and in my heart. 💭 Keep shining because u r not less than a moon.My job here is done, and now it's time for me to bid adieu! 🙋‍♂ I don't know what the future holds, but I do know that life is full of ups and downs. 🌟To whoever captures your heart next, make sure that they treat you like the royalty you are - a real-life princess! 👑 They should shower you with love, care, and a bouquet full of sweet gestures. 💐 Forget-me-nots, cornflowers, and white lilies would be the perfect way to make you feel special. 💕 P.S. I'm super sorry if I made you feel uncomfortable or if you didn't quite enjoy this. 🙈 I'm a bit of a clumsy coder (I had to watch YouTube tutorials to make this happen 😂), but I hope you know it's coming from a good place. As like Rohit in Mismatched series, I'm also just a silly boy in love 🙊 Warmly, Your well-wisher 💌 now click on [ @CLICK ME ] button at the top of this page. Thanks... "
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