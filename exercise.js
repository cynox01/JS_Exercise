


//l'aire' d'un circle
export function AireCircle(r) {
    return Math.PI * (r * r);//multiplique r * r et apres le pour pi pour donner le resultat
}



//Premier Dimanche
export function premierDimanche () {
    for (let year = 2014; year <= 2050; year++) {
        let d = new Date(year, 0, 1);
        if (d.getDay() === 0) {
            console.log('Le premier jour de ' + year + ' est un dimanche');
        }
    }
}




//Fibonnacci

const number = parseInt(prompt('Enter the number of terms: '));
let n1 = 0, n2 = 1, nextTerm;

console.log('Fibonacci Series:');

for (let i = 1; i <= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}




// code cesar

export function cesar(str, amount) {

    if (amount < 0)
        return cesar(str, amount + 26);

    // variable pour stocker le résultat
    let res = '';
    // Parcourir chaque caractére
    for (let i = 0; i < str.length; i++) {
        // Récupérer le caractére que nous allons ajouter
        let c = str[i];
        // Vérifier si c'est une lettre
        if (c.match(/[a-z]/i)) {
            // Récupérer son code
            let code = str.charCodeAt(i);
            // Lettres majuscules
            if ((code >= 65) && (code <= 90))
                c = String.fromCharCode(((code - 65 + amount) % 26) + 65);
            // Lettres minuscules
            else if ((code >= 97) && (code <= 122))
                c = String.fromCharCode(((code - 97 + amount) % 26) + 97);
        }
        // Ajouter le caractére
        res += c;
    }
    // Résultat
    return res;
}









