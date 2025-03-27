function loadContent(niveau) {
    const contentDiv = document.getElementById('content');
    contentDiv.innerHTML = `
        <h3>${niveau}</h3>
        <p>Voici les cours et exercices corrigés pour le niveau ${niveau}. Sélectionnez un sujet pour plus de détails.</p>
    `;
}


function loadContent(niveau) {
    const contentDiv = document.getElementById('content');

    if (niveau === 'Licence 1') {
        contentDiv.innerHTML = `
            <h3>Cours et Exercices - Licence 1</h3>
            <p>Voici les cours disponibles pour le niveau Licence 1 :</p>
            <ul>
                <li>Introduction à la programmation</li>
                <li>Algèbre et calcul matriciel</li>
                <li>Physique générale</li>
            </ul>
            <p>Exercices corrigés disponibles :</p>
            <ul>
                <li>Exercice 1 - Structures conditionnelles</li>
                <li>Exercice 2 - Calcul matriciel</li>
            </ul>
        `;
    } 
    else if(niveau === 'Licence1')
     {
        contentDiv.innerHTML = `
            <h3>${niveau}</h3>
            <p>Voici les pour le niveau ${niveau}. Sélectionnez un sujet pour plus de détails.</p>
        `;
    }

    else {
        contentDiv.innerHTML = `
            <h3>${niveau}</h3>
            <p>Voici les cours et exercices corrigés pour le niveau ${niveau}. Sélectionnez un sujet pour plus de détails.</p>
        `;
    }
}

