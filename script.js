// Configuration des données (évite la duplication)
const COURS_DATA = {
    'Licence 3': {
      title: "Cours - Licence 3",
      items: [
        { nom: "Algorithme Avancée", chemin: "../cours/algo.pdf" },
        { nom: "BASE DE DONNÉE", chemin: "../cours/bd.pdf" },
        { nom: "GENIE LOGICIEL", chemin: "../cours/genie.pdf" },
        { nom: "Maintenance", chemin: "../cours/maintenance.pdf" },
        { nom: "MERISE", chemin: "../cours/formerise.pdf" },
        { nom: "THÉORIE DES LANGAGES", chemin: "../cours/theorie.pdf" },
        { nom: "RECHERCHE OPÉRATIONNELLE", chemin: "../cours/ro.pdf" },
        { nom: "FONDAMENTEAUX RÉSEAUX", chemin: "../cours/reseau.pdf" }
      ]
    },
    'Licence3': { // Note: Tu as une incohérence entre 'Licence 3' et 'Licence3'
      title: "TD & Examen Corrigé - Licence 3",
      items: [
        { nom: "ALGORITHME AVANCE", chemin: "../exos/algo.pdf" },
        { nom: "BASE DE DONNÉE", chemin: "../exos/bd.pdf" },
        { nom: "GENIE LOGICIEL", chemin: "../exos/genie.pdf" },
        { nom: "MAINTENANCE", chemin: "../exos/maintenance.pdf" },
        { nom: "MERISE", chemin: "../exos/formerise.pdf" },
        { nom: "THÉORIE DES LANGAGES", chemin: "../exos/theorie.pdf" },
        { nom: "RECHERCHE OPÉRATIONNELLE", chemin: "../exos/ro.pdf" },
        { nom: "FONDAMENTEAUX RÉSEAUX", chemin: "../exos/reseau.pdf" }
      ]
    }
  };
  
  // Fonction pour afficher un PDF
  function showPDF(pdfPath) {
      const contentDiv = document.getElementById('content');
      contentDiv.innerHTML = `
          <div class="pdf-container">
              <iframe 
                  src="${pdfPath}#toolbar=0&navpanes=0&scrollbar=0" 
                  width="100%" 
                  height="600px" 
                  style="border: none;"
                  title="Visualiseur de PDF">
              </iframe>
              <button class="back-button" onclick="loadContent('Licence 3')">
                  ← Retour à la liste
              </button>
          </div>
      `;
  }
  
  // Fonction pour générer le HTML d'un item
  function generateItemHTML(item, isExo = false) {
      return `
          <div class="cours-item">
              <div class="${isExo ? 'exo-title' : 'cours-title'}">${item.nom}</div>
              <div class="cours-link">
                  <button class="pdf-button" onclick="showPDF('${item.chemin}')">
                      Voir le PDF
                  </button>
              </div>
          </div>
      `;
  }
  
  // Fonction principale pour charger le contenu
  function loadContent(niveau) {
      const contentDiv = document.getElementById('content');
      
      // Réinitialisation du style
      contentDiv.style.cssText = `
          background-color: #f0f0f0;
          color: #333;
          padding: 20px;
          border-radius: 15px;
          line-height: 1.6;
          font-size: 13px;
          margin-bottom: 20px;
          text-align: left;
          min-height: 300px;
      `;
  
      // Vérification des données disponibles
      if (!COURS_DATA[niveau]) {
          contentDiv.innerHTML = `
              <div class="no-content">
                  <p>Aucun document n'est disponible pour le moment !</p>
              </div>
          `;
          return;
      }
  
      const { title, items } = COURS_DATA[niveau];
      const isExo = niveau === 'Licence3';
      
      contentDiv.innerHTML = `
          <h3>${title}</h3>
          <p>Cliquez sur un ${isExo ? 'exercice' : 'cours'} pour visualiser :</p>
          <div class="cours-grid">
              ${items.map(item => generateItemHTML(item, isExo)).join('')}
          </div>
      `;
  }
  
  // Ajout d'un gestionnaire d'événement pour le chargement initial
  document.addEventListener('DOMContentLoaded', () => {
      // Charge 'Licence 3' par défaut au chargement si nécessaire
      // loadContent('Licence 3');
  });
