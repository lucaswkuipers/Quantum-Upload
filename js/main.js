//#region Selectors

//#endregion Selectors

//#region Event Listeners

//#endregion Event Listeners

//#region Functions
// #region  //* Override default scroll-to-bookmark behavior
let anchorlinks = document.querySelectorAll('a[href^="#"]');
for (let item of anchorlinks) {
  // relitere
  item.addEventListener("click", (e) => {
    let hashval = item.getAttribute("href");
    let target = document.querySelector(hashval);
    target.scrollIntoView({
      behavior: "smooth",
    });
    history.pushState(null, null, hashval);
    e.preventDefault();
  });
}
// #endregion

// #region //* Hide-Show Arrows on Scrolling
var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("up-arrow").style.top = "10%";
    document.getElementById("down-arrow").style.top = "100%";

    // Fade out arrow after one second
    document.getElementById("up-arrow").style.opacity = "50%";
    setTimeout(() => {
      document.getElementById("up-arrow").style.opacity = "0%";
    }, 1500);
  } else {
    document.getElementById("up-arrow").style.top = "-100%";
    document.getElementById("down-arrow").style.top = "80%";

    // Fade out arrow after one second
    document.getElementById("down-arrow").style.opacity = "50%";
    setTimeout(() => {
      document.getElementById("down-arrow").style.opacity = "0%";
    }, 1500);
  }
  prevScrollpos = currentScrollPos;
};
// #endregion

$("#input-images").imageUploader({
  extensions: [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".svg",
    ".JPG",
    ".JPEG",
    ".PNG",
    ".GIF",
    ".SVG",
  ],
  mimes: ["image/jpeg", "image/png", "image/gif", "image/svg+xml"],
  maxSize: undefined,
  label: "Arraste aqui, ou clique para escolher a imagem",
  maxFiles: undefined,
});

/*
// #region //* Preview Image Upload
function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $("#selected-image").attr("src", e.target.result).width(150);
    };

    reader.readAsDataURL(input.files[0]);
  }
}

// #endregion

// #region //* Allow Drop
function allowDrop(ev) {
  ev.preventDefault();
}
// #endregion

// #region //* Drag
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
// #endregion

// #region //* Drop
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
// #endregion
*/
//#endregion Functions
