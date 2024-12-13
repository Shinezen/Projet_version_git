// Fonction pour ajouter une nouvelle ligne de facture
function ajouterLigne() {
    // Récupérer les éléments par leurs IDs
    let tbody = document.getElementById('facture-body');
    let modeleLigne = document.getElementById('modeleLigne');
    let lastLigne = document.getElementById('lastLigne');

    // Cloner la ligne modèle
    const newRow = modeleLigne.cloneNode(true);

    // Supprimer l'ID du clone pour éviter les conflits
    newRow.removeAttribute('id');

    // Insérer la nouvelle ligne avant la dernière ligne
    tbody.insertBefore(newRow, lastLigne);
}

// Fonction pour remplir automatiquement les champs de la facture avec des données fictives
function remplir_auto() {
    // Sélectionne toutes les lignes de la facture
    const rows = document.querySelectorAll('#facture-body .row');
    
    // Remplir chaque ligne avec des données aléatoires
    rows.forEach((row, index) => {
        
        // Choisir une description aléatoire
        row.querySelector('.desc').value = `desc${index + 1}`;
        
        // Choisir une quantité aléatoire entre 1 et 10
        row.querySelector('.qte').value = Math.floor(Math.random() * 10) + 1;
        
        // Choisir un prix aléatoire entre 1 et 100
        row.querySelector('.prix').value = Math.floor(Math.random() * 100) + 1;
    });
}

// Fonction pour calculer le total de la facture
function calculer() {
    
    // Sélectionne toutes les lignes de la facture
    const rows = document.querySelectorAll('#facture-body .row');
    
    // Variable pour accumuler le sous-total
    let sousTotal = 0;
    
    // Parcourt toutes les lignes pour calculer les totaux de chaque
    rows.forEach(row => {
        
        // Récupère la quantité et le prix, et calcule le total de la ligne
        const qte = parseFloat(row.querySelector('.qte').value) || 0;
        const prix = parseFloat(row.querySelector('.prix').value) || 0;
        const total = qte * prix;
        
        // Remplir le champ total de la ligne avec le total calculé
        row.querySelector('.total').value = total.toFixed(2);

        // Ajouter le total de la ligne au sous-total général
        sousTotal += total;
    });
    
    // Affiche le sous-Total dans l'élément prévu
    document.getElementById('sousTotal').textContent = sousTotal.toFixed(2);

    // Récupère les valeurs de remise, taxe et frais d'expédition
    let remise = parseFloat(document.getElementById('remise').value) || 0;
    let sousTotalRemise = sousTotal - (sousTotal * remise / 100);
    document.getElementById('sousTotalRemise').textContent = sousTotalRemise.toFixed(2);
    
    // Calcul de la taxe à partir du sous-total après remise
    let taxe = sousTotalRemise * 0.1 ; // 10% de taxe
    document.getElementById('taxe').textContent = taxe.toFixed(2);
    
    // Affiche le total général dans l'élément prévu
    document.getElementById('totalFinal').textContent = totalFinal.toFixed(2);
}

// Fonction pour réinitialiser la facture (annuler toutes les modifications)
function annuler() {
    
    // Réinitialiser le corps de la table à une ligne vide par défaut
    document.querySelectorAll('facture-body').forEach(row => {
        row.querySelector('.desc').value = '';
        row.querySelector('.qte').value = 0;
        row.querySelector('.prix').value = 0;
        row.querySelector('.total').value = 0;
    });
    // Réinitialiser les valeurs des champs de montant total et sous-total
    document.getElementById("sousTotal").textContent = "0";
    document.getElementById("totalGeneral").textContent = "0";

    // Réinitialiser les champs de remise, taxe et frais d'expédition aux valeurs par défaut
    document.getElementById('remise').value = '0';
    document.getElementById('sousTotalRemise').textContent = '0';
    document.getElementById('taxe').textContent = '10';
}


