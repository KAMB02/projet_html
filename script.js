
function showHomeContent() {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h3>Bienvenue sur notre site de cours et exercices</h3>
        <p><br>Sélectionnez un niveau académique à gauche pour afficher les cours et exercices correspondants ici.</p>
        <p>Vous pouvez également consulter les TD et examens corrigés.</p>
        <p>Nous vous souhaitons une bonne navigation !</p>
        <p>Pour toute question ou suggestion, n'hésitez pas à nous contacter via la section "Nous suivre" à droite.</p>
        <p>Nous sommes là pour vous aider dans votre apprentissage.</p>
        <p>Merci de votre visite !</p>
        <p>Nous espérons que vous trouverez les ressources utiles pour vos études.</p>
        <p>Bonne chance dans vos études et à bientôt !</p>    `;
}


function showPDF(pdfPath) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <iframe 
            src="${pdfPath}#toolbar=0&navpanes=0&scrollbar=0" 
            width="100%" 
            height="462px" 
            scrollbar="false"
            border="0"
            style="border: none;">
        </iframe>
    `;
}
function loadContent(niveau) {
    const contentDiv = document.getElementById('content');

    if (niveau === 'Licence 3') {
        contentDiv.innerHTML = `
            <h3>Cours - Licence 3</h3>
            <p>Cliquer sur un cours pour visualiser :</p>
            <ul>
                <li><a href="#" onclick="showPDF('../cours/algo.pdf')">Algorithme Avancée</a></li>
                <li><a href="#" onclick="showPDF('../cours/bd.pdf')">BASE DE DONNÉE</a></li>
                <li><a href="#" onclick="showPDF('../cours/genie.pdf')">GENIE LOGICIEL</a></li>
                <li><a href="#" onclick="showPDF('../cours/maintenance.pdf')">Maintenance</a></li>
                <li><a href="#" onclick="showPDF('../cours/formerise.pdf')">MERISE</a></li>
                <li><a href="#" onclick="showPDF('../cours/theorie.pdf')">THÉORIE DES LANGAGES</a></li>
                <li><a href="#" onclick="showPDF('../cours/ro.pdf')">RECHERCHE OPÉRATIONNELLE</a></li>
                <li><a href="#" onclick="showPDF('../cours/reseau.pdf')">FONDAMENTEAUX RÉSEAUX</a></li>
            </ul>
        `;
    } 
    else if (niveau === 'Licence3') {
        contentDiv.innerHTML = `
            <h3>TD & Examen Corrigé - Licence 3</h3>
            <p>Cliquer sur un exercice pour visualiser :</p>
            <ul>
                <li><a href="#" onclick="showPDF('../exos/algo.pdf')">Algorithme Avancée</a></li>
                <li><a href="#" onclick="showPDF('../exos/genie.pdf')">GENIE LOGICIEL</a></li>
                <li><a href="#" onclick="showPDF('../exos/formerise.pdf')">MERISE</a></li>
                <li><a href="#" onclick="showPDF('../exos/theorie.pdf')">THÉORIE DES LANGAGES</a></li>
                <li><a href="#" onclick="showPDF('../exos/ro.pdf')">RECHERCHE OPÉRATIONNELLE</a></li>
                <li><a href="#" onclick="showPDF('../exos/reseau.pdf')">FONDAMENTEAUX RÉSEAUX</a></li>
            </ul>
        `;
    } 
    else {
        contentDiv.innerHTML = `
            <p  
            style="display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100%; 
            text-align: center;">
                Aucun document n'est disponible pour le moment !
            </p>
        `;
    }

    // Stylisation du contenu
    contentDiv.style.backgroundColor = '#f0f0f0';
    contentDiv.style.color = '#333';

    contentDiv.style.padding = '20px';
    contentDiv.style.borderRadius = '15px';
    contentDiv.style.lineHeight = '2';
    contentDiv.style.fontSize = '10px';
    contentDiv.style.marginBottom = '20px';
    contentDiv.style.fontWeight = 'bold';
    contentDiv.style.textTransform = 'uppercase';
    contentDiv.style.boxSizing = 'border-box';
    contentDiv.style.borderRadius = '10px';
    contentDiv.style.textAlign = 'left';
    contentDiv.style.fontSize = '13px';

}

function disableLink(link) {
    // Désactiver le lien après le clic
    link.style.pointerEvents = 'none'; // Désactive l'événement de clic
    link.style.color = '#ccc'; // Change la couleur pour indiquer qu'il est désactivé
    link.textContent += " (Sélectionné)"; // Ajoute une indication visuelle
}
