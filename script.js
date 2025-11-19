function _copyText() {
  const scriptEl =
    document.currentScript ||
    (function () {
      const scripts = document.getElementsByTagName("script");
      return scripts[scripts.length - 1];
    })();
  const scriptSrc = scriptEl && scriptEl.src ? scriptEl.src : "";
  const scriptBase = scriptSrc.replace(/script\.js(?:\?.*)?$/, "");
  const audioPath = scriptBase
    ? scriptBase + "assets/ding.mp3"
    : "assets/ding.mp3";

  const sound = new Audio(audioPath);
  sound.play().catch(() => {});

  navigator.clipboard.writeText("Smurfer420");

  const popup = document.getElementById("copy-popup");
  if (popup) {
    popup.style.opacity = "1";

    setTimeout(() => {
      popup.style.opacity = "0";
    }, 2500);
  }
}
