let navPage = [...document.querySelectorAll("header ul li a")]

navPage.forEach(li => {
  li.addEventListener("click", () => {
    navPage.forEach(e => {
      e.classList.remove("active")
    });
    li.classList.add("active")
  });
});

let workFilter = [...document.querySelectorAll(".work ul li")];
let workImgs = [...document.querySelectorAll(".work .row .img-box")];
workFilter.forEach(tap => {
  tap.addEventListener("click", () => {
    workFilter.forEach(e => {
      e.classList.remove("active");
    });
    tap.classList.add("active");
    workImgs.forEach(e => {
      e.parentElement.style.display = 'none'
    });
    document.querySelectorAll(tap.dataset.category).forEach((el) => {
      el.parentElement.style.display = 'block';
    });
  });
});

workImgs.forEach(img => {
  img.addEventListener("click", () => {
    let overlay = document.createElement("div");
    overlay.className = 'overlay-popup bg-dark bg-opacity-50';
    document.body.append(overlay);
    let popupBox = document.createElement("div");
    popupBox.className = 'popup-box position-fixed justify-content-center align-items-center'
    overlay.append(popupBox);
    let boxHeading = document.createElement("h3");
    boxHeading.append(document.createTextNode(img.dataset.type));
    boxHeading.style.textTransform = "capitalize"
    popupBox.append(boxHeading);
    let boxImg = document.createElement("img");
    boxImg.src = img.children[0].src;
    popupBox.append(boxImg);
    let closeBtn = document.createElement("div");
    closeBtn.append(document.createTextNode("X"));
    closeBtn.className = 'close-btn fw-bold fs-3 position-absolute';
    popupBox.append(closeBtn);
  });
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains('close-btn')) {
    e.target.parentElement.remove();
    document.querySelector(".overlay-popup").remove()
  }
});

let toTop = document.getElementById("toTop");
toTop.addEventListener("mouseover", () => {
  toTop.style.boxShadow = "0 0 10px #fff"
})
toTop.addEventListener("mouseout", () => {
  toTop.style.boxShadow = "none"
})
toTop.onclick = () => {
  toTop.children[0].style.marginBottom = "70px"
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
  setTimeout(() => {
    console.log("Done");
    toTop.children[0].style.marginBottom = "-7px"
  }, 1000);
};

window.onscroll = function () {
  if (scrollY >= 200) {
    document.querySelector("header .navbar").style.backgroundColor = "#19283f"
  } else {
    document.querySelector("header .navbar").style.backgroundColor = "transparent"
  }
  (window.scrollY >= 300) ? toTop.style.right="1rem" : toTop.style.right='-100px'
}