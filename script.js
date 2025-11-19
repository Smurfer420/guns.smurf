function _copyText() {
  // Resolve the audio path relative to the loaded script file so this works
  // from subfolders (select-Page/, Staff-Experience/, etc.)
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
  // play() can reject if the browser blocks it; ignore that error silently
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
