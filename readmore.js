document.addEventListener("DOMContentLoaded", function () {
  const link = document.getElementById("read-more-link");
  const moreText = document.getElementById("read-more-text");
  const wrapper = document.getElementById("read-more-link-wrapper");
  const arrow = document.getElementById("arrow-placeholder");

  // SVG-Pfeil einfügen (nach unten zeigend)
  arrow.innerHTML = `<svg class="arrow-svg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4 7L9 12L14 7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  link.addEventListener("click", function (e) {
    e.preventDefault();
    moreText.style.display = "inline";
    wrapper.style.display = "none";

    // Collapse-Link erzeugen, falls noch nicht vorhanden
    if (!document.getElementById("read-less-link")) {
      const lessLink = document.createElement("a");
      lessLink.href = "#";
      lessLink.id = "read-less-link";
      lessLink.innerHTML = `<span style="display:inline-block;width:18px;height:18px;vertical-align:middle;" class="arrow-svg">
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4 11L9 6L14 11" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>Weniger anzeigen`;
      lessLink.style.marginLeft = "8px";
      lessLink.style.display = "block";
      lessLink.style.textAlign = "center";
      lessLink.style.marginTop = "16px";
      moreText.appendChild(lessLink);

      lessLink.addEventListener("click", function (ev) {
        ev.preventDefault();
        moreText.style.display = "none";
        wrapper.style.display = "inline";
        lessLink.remove();
      });
    }
  });
});
