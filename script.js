function _copyText() {
  const sound = new Audio("assets/ding.mp3");
  sound.play();
  navigator.clipboard.writeText("Smurfer420");

  const popup = document.getElementById("copy-popup");
  popup.style.opacity = "1";

  setTimeout(() => {
    popup.style.opacity = "0";
  }, 2500);
}
