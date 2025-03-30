
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


function loadContent(niveau) {
    const contentDiv = document.getElementById('content');

    if (niveau === 'Licence 3') {
        contentDiv.innerHTML = `
            <h3>Cours - Licence 3</h3>
            <p>Cliquer sur un cours pour visualiser :</p>
            <ul>
                <li><a href="../cours/algo.pdf" target="_blank" onclick="disableLink(this)">Algorithme Avancée</a></li>
                <li><a href="../cours/bd.pdf" target="_blank" onclick="disableLink(this)">BASE DE DONNÉE</a></li>
                <li><a href="../cours/genie.pdf" target="_blank" onclick="disableLink(this)">GENIE LOGICIEL</a></li>
                <li><a href="../cours/maintenance.pdf" target="_blank" onclick="disableLink(this)">Maintenance</a></li>
                <li><a href="../cours/formerise.pdf" target="_blank" onclick="disableLink(this)">MERISE</a></li>
                <li><a href="../cours/theorie.pdf" target="_blank" onclick="disableLink(this)">THÉORIE DES LANGAGES</a></li>
                <li><a href="../cours/ro.pdf" target="_blank" onclick="disableLink(this)">RECHERCHE OPÉRATIONNELLE</a></li>
                <li><a href="../cours/reseau.pdf" target="_blank" onclick="disableLink(this)">FONDAMENTEAUX RÉSEAUX</a></li>
            </ul>
        `;
    } else if (niveau === 'Licence3') {
        contentDiv.innerHTML = `
            <h3>TD & Examen Corriger- Licence 3</h3>
            <p>Cliquer sur un exos pour visualiser :</p>
            <ul>
                <li><a href="../exos/algo.pdf" target="_blank" onclick="disableLink(this)">Algorithme Avancée</a></li>
                <li><a href="../exos/genie.pdf" target="_blank" onclick="disableLink(this)">GENIE LOGICIEL</a></li>
                <li><a href="../exos/formerise.pdf" target="_blank" onclick="disableLink(this)">MERISE</a></li>
                <li><a href="../exos/theorie.pdf" target="_blank" onclick="disableLink(this)">THÉORIE DES LANGAGES</a></li>
                <li><a href="../exos/ro.pdf" target="_blank" onclick="disableLink(this)">RECHERCHE OPÉRATIONNELLE</a></li>
                <li><a href="../exos/reseau.pdf" target="_blank" onclick="disableLink(this)">FONDAMENTEAUX RÉSEAUX</a></li>
            </ul>
        `;
    } else {
        contentDiv.innerHTML = `
            <p  
            style="display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 100%; 
            text-align: center;">
                Aucun document n'est disponible pour le moment !.
            </p>
        `
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
