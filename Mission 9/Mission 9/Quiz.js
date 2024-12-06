// Ouvrir la Page Correction
function Correction() {
    window.open('Reponses.html', '_blank', 'width=800,height=600'); 
}

// Pour Effecer vos réponses
function Effacer() {
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    

    checkboxes.forEach(function(checkbox) {
        checkbox.checked = false;
    });

    const labels = document.querySelectorAll('label.true');
    labels.forEach(function(label) {
        label.classList.remove('true');  
        label.style.color = '';
    });
}

// Fermer la Page Correction
function ClosePage() {
    window.close('Quiz.html')
}

// Afficher les points obtenus
function Answer() {
    const correctAnswers = [
        '1-optionD', '2-optionA', '3-optionB', '4-optionA', '5-optionC', 
        '6-optionA', '7-optionB', '8-optionC', '9-optionB', '10-optionC'
    ];

    let score = 0;

    // Vérification des réponses
    correctAnswers.forEach((answerId, index) => {
        if (document.getElementById(answerId).checked) {
            score++;
        }
    });

    // Affichage du résultat
    const resultText = score === 10 
        ? "Bravo, Bien Jouez !" 
        : `Vous avez ${score} bonne(s) réponse(s).`;

    document.getElementById('result').innerText = resultText;
}

