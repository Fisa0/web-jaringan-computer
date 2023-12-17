// Toggle class active untuk jilbab menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika jilbab menu di klik
document.querySelector("#jilbab-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle Class active untuk shopping cart
const shoppinglingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = () => {
  shoppinglingCart.classList.tonggle("active");
  e.preventDefault();
};

// Klik di luar elemen
const jb = document.querySelector("#jilbab-menu");
const sb = document.querySelector("#search-butoon");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", function (e) {
  if (!jb.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  if (!sc.contains(e.target) && !shoppinglingCart.contains(e.target)) {
    shoppinglingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal = document.querySelector("#item-detail-modal");

const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.Style.display = "flex";
    e.preventDefault();
  };
});

// Klik tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

//Klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};
