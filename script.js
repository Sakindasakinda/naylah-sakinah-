document.addEventListener("DOMContentLoaded", function() {
    const pesanCinta = document.getElementById('pesan-cinta');

    setTimeout(() => {
        pesanCinta.style.color = '#ff4500';
        pesanCinta.textContent = "Hatiku selalu bersamamu, Ojan.";
    }, 3000);
});
