document.getElementById('Sunday-service-label').addEventListener('click', () => {
    window.location.href = '#Sunday_service-img-container';
})

document.getElementById('Tuesday-service-label').addEventListener('click', () => {
    window.location.href = '#Tuesday_service-img-container';
})

document.getElementById('Healing-service-label').addEventListener('click', () => {
    window.location.href = '#Healing_service-img-container';
})

// Get the header element
const header = document.getElementById("header");

// Get the offset position of the header
const sticky = header.offsetTop;

// Add or remove the "sticky" class when you scroll
window.onscroll = function() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
