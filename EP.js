function openModal(img) {
    var modal = document.getElementById("modal");
    var modalImg = document.getElementById("modal-img");
    modal.style.display = "flex";
    modalImg.src = img.src;
}

function closeModal() {
    var modal = document.getElementById("modal");
    modal.style.display = "none";
}

window.onclick = function(event) {
    var modal = document.getElementById("modal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

document.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const scrollPosition = window.scrollY + window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    if (scrollPosition >= documentHeight - 100) {
        footer.classList.add('show-footer');
    } else {
        footer.classList.remove('show-footer');
    }
});
