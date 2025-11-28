let version = "1.4.1";

document.addEventListener("DOMContentLoaded", function () {
  // Set version
  const versionText = document.getElementById("version");
  versionText.innerText = version;

  // Quality toggle functionality
  const qualityBtn = document.getElementById("quality-btn");
  const bgImage = document.getElementById("bg_image");
  const bgVideo = document.getElementById("bg_video");

  // Load saved quality preference
  let isVideo = localStorage.getItem("qualityPreference") === "high";

  // Apply saved preference on load
  const applyQuality = (useVideo) => {
    if (useVideo) {
      bgImage.style.display = "none";
      bgVideo.style.display = "block";
      qualityBtn.textContent = "High Quality";
    } else {
      bgVideo.style.display = "none";
      bgImage.style.display = "block";
      qualityBtn.textContent = "Low Quality";
    }
  };

  applyQuality(isVideo);

  qualityBtn.addEventListener("click", () => {
    isVideo = !isVideo;
    applyQuality(isVideo);
    // Save preference to localStorage
    localStorage.setItem("qualityPreference", isVideo ? "high" : "low");
  });
});

function _copyText() {
  // Play sound effect
  const sound = new Audio("assets/ding.mp3");
  sound.play().catch(() => {});

  // Copy to clipboard
  navigator.clipboard.writeText("Smurfer420");

  // Show popup
  const popup = document.getElementById("copy-popup");
  if (popup) {
    popup.style.opacity = "1";
    setTimeout(() => {
      popup.style.opacity = "0";
    }, 2500);
  }
}
