function showPDF(pdfPath) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <iframe 
            src="${pdfPath}#toolbar=0&navpanes=0&scrollbar=0" 
            width="100%" 
            height="600px" 
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
            <div class="cours-grid">
                ${[
                  { nom: "Algorithme Avancée", chemin: "../cours/algo.pdf" },
                  { nom: "BASE DE DONNÉE", chemin: "../cours/bd.pdf" },
                  { nom: "GENIE LOGICIEL", chemin: "../cours/genie.pdf" },
                  { nom: "Maintenance", chemin: "../cours/maintenance.pdf" },
                  { nom: "MERISE", chemin: "../cours/formerise.pdf" },
                  { nom: "THÉORIE DES LANGAGES", chemin: "../cours/theorie.pdf" },
                  { nom: "RECHERCHE OPÉRATIONNELLE", chemin: "../cours/ro.pdf" },
                  { nom: "FONDAMENTEAUX RÉSEAUX", chemin: "../cours/reseau.pdf" }
                ]
                  .map(
                    ({ nom, chemin }) => `
                    <div class="cours-item">
                        <div class="cours-title">${nom}</div>
                        <div class="cours-link">
                            <a href="#" onclick="showPDF('${chemin}')">Voir le PDF</a>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
    } 
    else if (niveau === 'Licence3') {
        contentDiv.innerHTML = `
            <h3>TD & Examen Corrigé - Licence 3</h3>
            <p>Cliquer sur un exercice pour visualiser :</p> 
            <div class="cours-grid">
                ${[
                  { nom: "ALGORITHME AVANCE", chemin: "../exos/algo.pdf" },
                  { nom: "BASE DE DONNÉE", chemin: "../exos/bd.pdf" },
                  { nom: "GENIE LOGICIEL", chemin: "../exos/genie.pdf" },
                  { nom: "MAINTENANCE", chemin: "../exos/maintenance.pdf" },
                  { nom: "MERISE", chemin: "../exos/formerise.pdf" },
                  { nom: "THÉORIE DES LANGAGES", chemin: "../exos/theorie.pdf" },
                  { nom: "RECHERCHE OPÉRATIONNELLE", chemin: "../exos/ro.pdf" },
                  { nom: "FONDAMENTEAUX RÉSEAUX", chemin: "../exos/reseau.pdf" }
                ]
                  .map(
                    ({ nom, chemin }) => `
                    <div class="cours-item">
                        <div class="exo-title">${nom}</div>
                        <div class="cours-link">
                            <a href="#" onclick="showPDF('${chemin}')">Voir le PDF</a>
                        </div>
                    </div>
                `
                  )
                  .join("")}
            </div>
        `;
    } 
    
    else {
        contentDiv.innerHTML = `
            <p  
            style="display: flex; 
            justify-content: center; 
            align-items: center; 
            height: 50%; 
            text-align: center;">
                Aucun document n'est disponible pour le moment !
            </p>
        `;
    }

    // Stylisation du contenu général
    contentDiv.style.backgroundColor = '#f0f0f0';
    contentDiv.style.color = '#333';
    contentDiv.style.padding = '20px';
    contentDiv.style.borderRadius = '15px';
    contentDiv.style.lineHeight = '1.6';
    contentDiv.style.fontSize = '13px';
    contentDiv.style.marginBottom = '20px';
    contentDiv.style.textAlign = 'left';
}
