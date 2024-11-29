function exercise1(){
    alert(
      "Voici la solution en JavaScript pour cet exercice :\n\n" +
      "// Fonction pour calculer la somme de deux nombres\n" +
      "function somme(a, b) {\n" +
      "  return a + b;\n" +
      "}\n\n" +
      "// Exemple d'utilisation :\n" +
      "const resultat = somme(3, 5);\n" +
      "console.log('La somme est :', resultat);"
    ); 
}

// Fonction qui affiche un message selon que le nombre est entre 1 et 10
function exercise2(){
// Vérification si le nombre est valide
    alert(
      "Voici la solution en JavaScript pour cet exercice :\n\n" +
      "// Fonction pour vérifier si un nombre est entre 1 et 10\n" +
      "function checkNumber(num) {\n" +
      "  if (num > 10) {\n" +
      "    return \"ERROR: Réessayez!\";\n" +
      "  } else if (num < 1) {\n" +
      "    return \"ERROR: Le nombre doit être supérieur ou égal à 1!\";\n" +
      "  } else {\n" +
      "    return `Bravo, bien joué! ${num} est bien entre 1 et 10.`;\n" +
      "  }\n" +
      "}\n\n" +
      "// Exemple d'utilisation :\n" +
      "console.log(checkNumber(5));  // Affiche 'Bravo, bien joué! 5 est bien entre 1 et 10.'\n" +
      "console.log(checkNumber(12)); // Affiche 'ERROR: Réessayez!'\n" +
      "console.log(checkNumber(0));  // Affiche 'ERROR: Le nombre doit être supérieur ou égal à 1!'"
    );
}

function exercise3() {
  alert(
      "Voici la solution en JavaScript pour cet exercice :\n\n" +
      "// Fonction pour trouver le plus petit nombre entre deux valeurs\n" +
      "function findMin(num1, num2) {\n" +
      "  // Comparer les deux nombres et retourner le plus petit\n" +
      "  if (num1 < num2) {\n" +
      "    return num1;\n" +
      "  } else if (num2 < num1) {\n" +
      "    return num2;\n" +
      "  } else {\n" +
      "    return 'Les deux nombres sont égaux.';\n" +
      "  }\n" +
      "}\n\n" +
      "// Exemple d'utilisation :\n" +
      "console.log(findMin(5, 10));  // Affiche 5\n" +
      "console.log(findMin(20, 10)); // Affiche 10\n" +
      "console.log(findMin(15, 15)); // Affiche 'Les deux nombres sont égaux.'"
  );
}

// Fonction pour afficher la solution
function exercise4(){
  alert(
    "Voici la solution en JavaScript pour cet exercice :\n\n" +
    "// Fonction pour compter les voyelles dans une phrase\n" +
    "function countVowels() {\n" +
    "  const input = document.getElementById('userInput').value;\n" +
    "  const vowels = 'aeiouAEIOU';\n" +
    "  let count = 0;\n\n" +
    "  for (let char of input) {\n" +
    "    if (vowels.includes(char)) {\n" +
    "      count++;\n" +
    "    }\n" +
    "  }\n\n" +
    "  const resultDiv = document.getElementById('result');\n" +
    "  if (count > 0) {\n" +
    "    resultDiv.textContent = `Il y a ${count} voyelle(s) dans cette phrase.`;\n" +
    "  } else {\n" +
    "    resultDiv.textContent = 'Aucune voyelle trouvée dans la phrase.';\n" +
    "  }\n" +
    "}"
  );
}
// Fonction pour afficher la solution
function exercise5() {
  alert(
    "Voici la solution en JavaScript pour cet exercice :\n\n" +
    "// Fonction pour jouer à Pierre-Papier-Ciseaux\n" +
    "function playGame(playerChoice) {\n" +
    "  const choices = ['Pierre', 'Papier', 'Ciseaux'];\n" +
    "  const computerChoice = choices[Math.floor(Math.random() * 3)];\n" +
    "  let result;\n\n" +
    "  if (playerChoice === computerChoice) {\n" +
    "    result = 'Égalité ! Vous avez tous les deux choisi ' + playerChoice + '.';\n" +
    "  } else if (\n" +
    "    (playerChoice === 'Pierre' && computerChoice === 'Ciseaux') ||\n" +
    "    (playerChoice === 'Papier' && computerChoice === 'Pierre') ||\n" +
    "    (playerChoice === 'Ciseaux' && computerChoice === 'Papier')\n" +
    "  ) {\n" +
    "    result = 'Bravo ! Vous avez gagné ! ' + playerChoice + ' bat ' + computerChoice + '.';\n" +
    "  } else {\n" +
    "    result = 'Dommage, vous avez perdu. ' + computerChoice + ' bat ' + playerChoice + '.';\n" +
    "  }\n\n" +
    "  document.getElementById('result').textContent = result;\n" +
    "}"
  );
}
// Fonction pour afficher la solution
function exercise5(){
  alert(
    "Voici la solution en JavaScript pour cet exercice :\n\n" +
    "// Fonction pour jouer à Pierre-Papier-Ciseaux\n" +
    "function playGame(playerChoice) {\n" +
    "  const choices = ['Pierre', 'Papier', 'Ciseaux'];\n" +
    "  const computerChoice = choices[Math.floor(Math.random() * 3)];\n" +
    "  let result;\n\n" +
    "  if (playerChoice === computerChoice) {\n" +
    "    result = 'Égalité ! Vous avez tous les deux choisi ' + playerChoice + '.';\n" +
    "  } else if (\n" +
    "    (playerChoice === 'Pierre' && computerChoice === 'Ciseaux') ||\n" +
    "    (playerChoice === 'Papier' && computerChoice === 'Pierre') ||\n" +
    "    (playerChoice === 'Ciseaux' && computerChoice === 'Papier')\n" +
    "  ) {\n" +
    "    result = 'Bravo ! Vous avez gagné ! ' + playerChoice + ' bat ' + computerChoice + '.';\n" +
    "  } else {\n" +
    "    result = 'Dommage, vous avez perdu. ' + computerChoice + ' bat ' + playerChoice + '.';\n" +
    "  }\n\n" +
    "  document.getElementById('result').textContent = result;\n" +
    "}"
  );
}
// Fonction pour afficher la solution dans une alerte
function exercise6() {
  alert(
    "Voici la solution en JavaScript pour cet exercice :\n\n" +
    "// Tableau contenant différentes couleurs\n" +
    "const colors = ['#ff9999', '#99ff99', '#9999ff', '#ffff99', '#ffccff', '#ccffff', '#ffcc99', '#cc99ff'];\n\n" +
    "// Fonction pour changer la couleur d'arrière-plan\n" +
    "function changeColor() {\n" +
    "  const randomColor = colors[Math.floor(Math.random() * colors.length)];\n" +
    "  document.body.style.backgroundColor = randomColor;\n" +
    "}"
  );
}
// Fonction pour afficher la solution dans une alerte
function exercise7(){
  alert(
    "Voici la solution en JavaScript pour cet exercice :\n\n" +
    "// Génère un nombre aléatoire entre 1 et 100\n" +
    "const magicNumber = Math.floor(Math.random() * 100) + 1;\n\n" +
    "// Fonction pour vérifier la devinette\n" +
    "function checkGuess() {\n" +
    "  const userGuess = Number(document.getElementById('guess').value);\n" +
    "  const resultDiv = document.getElementById('result');\n\n" +
    "  if (userGuess === magicNumber) {\n" +
    "    resultDiv.innerHTML = '🎉 Bravo ! Vous avez trouvé le nombre magique : ' + magicNumber;\n" +
    "  } else if (userGuess > magicNumber) {\n" +
    "    resultDiv.innerHTML = 'Trop haut ! Essayez encore.';\n" +
    "  } else {\n" +
    "    resultDiv.innerHTML = 'Trop bas ! Essayez encore.';\n" +
    "  }\n" +
    "}"
  );
}
function exercise8() {
  alert(
    "Voici la solution en JavaScript pour cet exercice :\n\n" +
    "// Déclare une variable pour le compteur\n" +
    "let counter = 0;\n\n" +
    "// Fonction pour incrémenter le compteur\n" +
    "function incrementCounter() {\n" +
    "  counter++;\n" +
    "  document.getElementById('counter').innerText = counter;\n" +
    "}\n\n" +
    "// Cette fonction est liée à un bouton dans le HTML qui appelle incrementCounter() à chaque clic."
  );
}

function exercice9(){
  let chaine = prompt("Entrez une chaîne :");
  alert("En majuscule : " + chaine.toUpperCase());
}

function age(){
  let age = parseInt(prompt("Entrez votre âge:"));
  alert(age >= 18 ? "Vous êtes majeur" : "Vous êtes Mineur.");
}

function checkPrimeNumber() {
    let num = parseInt(prompt ("Entrez un nombre pour vérifier s'il est premier:"));
    let isPrime = num > 1;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    alert(num + (isPrime ? " est un nombre premier." : "  n'est pas un nombre premier"));
  }
