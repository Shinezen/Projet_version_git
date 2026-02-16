const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modalContainer = document.getElementById("modalOverlay");

openModal.onclick = (e) => {
  e.preventDefault();
  modalOverlay.style.display = "flex";
};

closeModal.onclick = () => {
  modalOverlay.style.display = "none";
};

modalOverlay.onclick = (e) => {
  if (e.target === modalOverlay) {
    modalOverlay.style.display = "none";
  }
};


