function test_age(){
    let age = prompt("quelle est votre age ?")
    if (age<14)
       {
            document.write("Attention accès refusé, vous êtes mineur");
            document.body.style.background="crimson";
       }
       else
       {
            document.write("carré, vous êtes Majeur");
            document.body.style.backgroundColor="forestgreen";
       }
}
function affichage(){
    
    let prénom = prompt("saisir votre prénom");
    let nom = prompt("saisir votre nom");
    document.write ('<div style="border:5px solid blue; width:400px; height:300px; margin:auto;font-size:2em;">');
    document.write("hello "+ prénom +"   "+ nom);
    document.write("</div>");
}

function test_couleur() {
    let couleur = prompt("Donner un couleur")
    if (couleur == "crimson") {
        document.body.style.backgroundColor= "crimson"
        
    }
    else if (couleur == "aqua") {
        document.body.style.backgroundColor= "aqua"
    }
    else if (couleur == "forestgreen") {
        document.body.style.backgroundColor= "forestgreen"
    }

    else {
        document.write("Couleur inexistant")
    }
}

function calcul_moyenne() {
     var n1 = prompt("Donner la première note :");
     var n2 = prompt("Donner la deuxième note :");
     var n3 = prompt("Donner la troisième note :");

     var somme = Number(n1) + Number(n2) + Number(n3);

     document.write("Voici la somme : " + somme + "<br>");
     var moyenne = somme/3;

     document.write("Voici la moyenne : "+ moyenne +" <br>");
     document.body.style.backgroundColor= "burlywood";
     document.write("Voici la moyenne : "+ moyenne +" <br>");
        if (moyenne<9)
        {
             document.write("Défaillant");
             document.body.style.background="crimson";
        }
        else if (moyenne>10)
        {
             document.write("Passable");
             document.body.style.backgroundColor="green";
        }
        else if (moyenne>14)
        {
            document.write("Admis");
            document.body.style.backgroundColor="aqua";
        }
}
