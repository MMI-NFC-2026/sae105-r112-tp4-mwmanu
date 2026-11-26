// *** ACCORDEON ***
const accordeon = document.querySelector(".accordeon");

accordeon.querySelectorAll("summary").forEach((summary) => {
  summary.addEventListener("click", () => {
    const details = summary.parentElement;
    accordeon.querySelectorAll("details").forEach((det) => {
      if (det !== details) det.open = false;
    });
  });
});
