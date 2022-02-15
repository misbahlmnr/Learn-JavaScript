// const container = document.querySelector(".container");
// const imgJumbo = container.querySelector(".jumbo");
// const thumb = container.querySelectorAll(".thumbnail img");

// thumb.forEach((th) => {
//   th.addEventListener("click", (e) => {
//     let attr = th.getAttribute("src");
//     imgJumbo.setAttribute("src", attr);
//   });
// });

const container = document.querySelector(".container"),
  jumbo = document.querySelector(".jumbo"),
  thumb = document.querySelectorAll(".thumb");
container.addEventListener("click", function (e) {
  if (e.target.className == "thumb") {
    jumbo.src = e.target.src;
    jumbo.classList.add("fade");
    setTimeout(function () {
      jumbo.classList.remove("fade");
    }, 500);

    thumb.forEach(function (thumb) {
      thumb.className = "thumb";
    });
    e.target.classList.add("active");
  }
});
