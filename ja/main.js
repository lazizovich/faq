let items = document.querySelectorAll("ul.accardions>li");

items.forEach((item) => {
  item.addEventListener("click", () => {
    items.forEach((item2) => {
      item2.classList.remove("active");
    });
    item.classList.add("active");
  });
});
