/**
 * Scales a fixed-width <degree-map> down so it fits its content column, and
 * lets the reader expand it to fill the screen at (up to) full size. Mirrors
 * how the theme handles images: shrink-to-fit inline, full size on demand.
 */
function initFrame(frame) {
  const scaleWrap = frame.querySelector(".degree-map-frame__scale");
  const content = scaleWrap && scaleWrap.firstElementChild;
  if (!scaleWrap || !content) return;

  let naturalWidth = 0;
  let naturalHeight = 0;

  function apply() {
    if (!naturalWidth || !naturalHeight) return;
    const availableWidth = frame.clientWidth || naturalWidth;
    const scale = Math.min(1, availableWidth / naturalWidth);
    content.style.transform = `scale(${scale})`;
    scaleWrap.style.width = `${naturalWidth * scale}px`;
    scaleWrap.style.height = `${naturalHeight * scale}px`;
  }

  new ResizeObserver((entries) => {
    const box = entries[0].contentBoxSize && entries[0].contentBoxSize[0];
    naturalWidth = box ? box.inlineSize : content.offsetWidth;
    naturalHeight = box ? box.blockSize : content.offsetHeight;
    apply();
  }).observe(content);

  new ResizeObserver(apply).observe(frame);

  scaleWrap.addEventListener("click", () => {
    if (document.fullscreenElement === frame) {
      document.exitFullscreen();
    } else {
      frame.requestFullscreen().catch(() => {});
    }
  });

  frame.addEventListener("fullscreenchange", () => {
    frame.classList.toggle("is-fullscreen", document.fullscreenElement === frame);
    apply();
  });
}

document.querySelectorAll(".degree-map-frame").forEach(initFrame);
