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

// Afficher les points
function Results() {
    let score = 0;
    let resultText = '';
    
    // Vérification des réponses de la question 1
    if (document.getElementById('optionD').checked) {
        score++;
    }
    
    // Vérification des réponses de la question 2
    if (document.getElementById('optionA').checked) {
        score++;
    }
    
    // Vérification des réponses de la question 3
    if (document.getElementById('optionB').checked) {
        score++;
    }
    // Vérification des réponses de la question 4
    if (document.getElementById('optionC').checked) {
        score++;
    }
    // Vérification des réponses de la question 5
    if (document.getElementById('optionA').checked) {
        score++;
    }
    // Vérification des réponses de la question 6
    if (document.getElementById('optionB').checked) {
        score++;
    }
    // Vérification des réponses de la question 7
    if (document.getElementById('optionC').checked) {
        score++;
    }
    // Vérification des réponses de la question 8
    if (document.getElementById('optionB').checked) {
        score++;
    }
    // Vérification des réponses de la question 9
    if (document.getElementById('optionC').checked) {
        score++;
    }
    // Vérification des réponses de la question 10
    if (document.getElementById('optionB').checked) {
        score++;
    }

    // Affichage du résultat
    if (score === 10) {
        resultText = "Bravo, Bien Jouez !";
    } else {
        resultText = `Vous avez ${score} bonne(s) réponse(s).`;
    }

    document.getElementById('result').innerText = resultText;
}
