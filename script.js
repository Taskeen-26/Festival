var audio = document.getElementById("myAudio");
audio.play();
var btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  var audio = document.getElementById("myAudio");
  audio.play();
  var name = prompt("Enter your name please?");

  var img = document.getElementById("img");
  img.src = "./images/calendar.jpg";
  img.setAttribute("id", "img2");
  var imgContainer = document.querySelector(".image-container");
  var child1 = document.getElementById("greet");
  var child2 = document.getElementById("welcome");
  var child3 = document.getElementById("btn");
  imgContainer.removeChild(child1);
  imgContainer.removeChild(child2);
  imgContainer.removeChild(child3);
  var image = document.getElementById("img2");
  var opacity = 0;
  var interval = setInterval(function () {
    if (opacity >= 1) {
      clearInterval(interval);
    } else {
      opacity += 0.01;
      image.style.opacity = opacity;
    }
  }, 50);

  var text = document.createElement("p");
  text.innerHTML =
    "<b>On this special day<b>✨, I pray🤲🏻 that Allah SWT accepts all your good deeds🤝, forgives your transgressions, and eases the suffering of all people 🫂around the world🌏.";

  imgContainer.appendChild(text);
  text.style.position = "absolute";
  text.style.top = "30%";
  text.style.left = "50%";
  text.style.fontFamily = "cursive";
  text.style.fontStyle = "oblique";
  text.style.fontsize = "100%";
  text.style.color = "teal";
  text.style.animation = "moveDown 5s ease-out infinite";
  text.style.animationIterationCount = "1";

  text.style.opacity = "0"; // start with 0 opacity
  setTimeout(() => {
    text.style.opacity = "1"; // show caption after 2 seconds
  }, 2000);
  console.log(text);
  var button = document.createElement("button");
  button.innerText = "  Touch Ameen💫";
  button.style.position = "absolute";
  button.style.top = "70%";
  button.style.left = "70%";
  button.style.transform = "translate(-50%, -50%)";
  button.style.padding = "12px 24px";
  button.style.backgroundColor = "#d880a2";
  button.style.color = "#fff";
  button.style.border = "none";
  button.style.borderRadius = "4px";
  button.style.fontSize = "16px";
  button.style.cursor = "pointer";
  button.style.fontFamily = "cursive";
  button.style.border = " 5px solid rgb(244, 137, 37)";

  imgContainer.appendChild(button);
  button.style.opacity = "0"; // start with 0 opacity
  setTimeout(() => {
    button.style.opacity = "1"; // show caption after 2 seconds
  }, 4000);

  //   ------------------last image-----------------------------------

  button.addEventListener("click", function () {
    var hero = document.createElement("img");
    hero.src = "./images/peach bg.jpg";
    hero.setAttribute = ("id", "hero");

    var image = document.getElementById("img2");
    var imgContainer = document.querySelector(".image-container");
    imgContainer.removeChild(text);
    imgContainer.removeChild(button);
    imgContainer.removeChild(img);
    imgContainer.appendChild(hero);
    var opacity = 0;
    var interval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += 0.01;
        hero.style.opacity = opacity;
        hero.style.animation = "shake 5s";
      }
    }, 50);

    var anime = document.createElement("h1");
    anime.innerHTML = "Eid-ul-Fitr Mubarak!";
    anime.setAttribute = ("id", "anime");
    console.log(anime);
    anime.style.position = "absolute";
    anime.style.top = "42%";
    anime.style.left = "35%";
    anime.style.height = "40%";
    anime.style.width = "20%";
    anime.style.opacity = "70%";
    anime.style.transitionTimingFunction = "linear";
    anime.style.width = "300px";
    anime.style.alignContent = "center";

    anime.style.transition = "color 0.5s ease";

    imgContainer.appendChild(anime);

    var user = document.createElement("h2");
    user.innerHTML = "💐" + name + "💐";

    user.style.position = "absolute";
    user.style.top = "52%";
    user.style.left = "45%";
    user.style.height = "40%";
    user.style.width = "20%";
    user.style.opacity = "70%";
    user.style.transitionTimingFunction = "linear";
    user.style.width = "300px";
    user.style.alignContent = "center";
    user.style.color = "#2573ae";

    user.style.transition = "color 0.7s ease";

    imgContainer.appendChild(user);

    var opacity = 0;
    var interval = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(interval);
      } else {
        opacity += 0.01;
        anime.style.opacity = opacity;
        user.style.opacity = opacity;
      }
    }, 1000);

    var move = document.createElement("img");
    move.src = "./images/eid-mubarak-eid-mubarak2022.gif";
    imgContainer.appendChild(move);
    move.style.position = "absolute";
    move.style.position = "absolute";
    move.style.top = "52%";
    move.style.left = "105%";
    move.style.height = "40%";
    move.style.width = "20%";
    move.style.opacity = "70%";
  });
});

function adjustFooter() {
  var bodyHeight = document.body.offsetHeight;
  var windowHeight = window.innerHeight;
  var footerHeight = document.getElementsByTagName("footer")[0].offsetHeight;
  if (bodyHeight < windowHeight) {
    document.getElementsByTagName("footer")[0].style.position = "fixed";
    document.getElementsByTagName("footer")[0].style.bottom = "0";
    document.getElementsByTagName("footer")[0].style.width = "100%";
  } else {
    document.getElementsByTagName("footer")[0].style.position = "static";
  }
}
window.onload = function () {
  adjustFooter();
  window.addEventListener("resize", adjustFooter);
};
