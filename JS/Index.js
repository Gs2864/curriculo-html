document.getElementById("print-btn").addEventListener("click", () => {
    window.print()
}),
document.getElementById("download-btn").addEventListener("click", () => {
    alert("Funcionalidade de download ser\xE1 implementada em breve!")
}),
document.getElementById("email-btn").addEventListener("click", () => {
    alert("Funcionalidade de envio por email ser\xE1 implementada em breve!")
});

document.querySelector('.book').addEventListener('click', function() {
    this.classList.toggle('open');
    document.querySelector('.overlay').classList.toggle('active');
});

