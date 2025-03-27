// Fonction pour le formulaire "Cours"
function navigateToCours() {
    const selectElement = document.getElementById("options");
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

// Fonction pour le formulaire "TD & Examens corrigés"
function navigateToExos() {
    const selectElement = document.getElementById("exos");
    const selectedValue = selectElement.value;
    if (selectedValue) {
        window.location.href = selectedValue;
    }
}

console.log("salut")
