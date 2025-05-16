const accordionContent = document.querySelectorAll(".accordion-content");

accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");

  header.addEventListener("click", () => {
    const isOpen = item.classList.contains("is-open");
    removeOpenedContent(index);

    if (!isOpen) {
      item.classList.add("is-open");
      let description = item.querySelector(".accordion-content-description");
      description.style.height = `${description.scrollHeight}px`;
      item.querySelector("i").classList.replace("fa-plus", "fa-minus");
    }
  });
});

function removeOpenedContent(currentIndex) {
  accordionContent.forEach((item, index) => {
    if (index !== currentIndex) {
      item.classList.remove("is-open");
      let description = item.querySelector(".accordion-content-description");
      description.style.height = "0px";
      let icon = item.querySelector("i");
      if (icon.classList.contains("fa-minus")) {
        icon.classList.replace("fa-minus", "fa-plus");
      }
    }
  });
}
