export const Modal = {
    modalWrapper: document.querySelector(".modal-wrapper"),
    modalMessage: document.querySelector(
      ".modal-wrapper .modal-card h2 span"
    ),
    modalBtnClose: document.querySelector(
      ".modal-wrapper .modal-card h2 .close"
    ),

    open() {
        Modal.modalWrapper.classList.add("hide");
    },
    close() {
        Modal.modalWrapper.classList.remove("hide");
    }
}

Modal.modalBtnClose.onclick = function () {
    Modal.close();
};

window.addEventListener('keydown', handleKeydown);

function handleKeydown (event) {
    if (event.key == 'Escape') {
        Modal.close();
    }
}