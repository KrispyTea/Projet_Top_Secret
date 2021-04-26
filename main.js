let a = "alain"
for (let i=0;i < 5;i++)
    console.log(a, i)

let b =["Tania","Ilyas","Alexis"]
for (let i=0; i < b.length; i++)
    console.log("Bonjour " + b[i])

let nombre = prompt("Veuillez indiquer un nombre:")
for (let i=0; i <= nombre; i+=2)
    console.log(i)

for (let i=0; i <= nombre; i++)
    if (i % 2 == 0) {
        console.log(`Le nombre ${i} est pair`)
    }

let coding = ["Alexis", "Loic", "Mohammed", "Yassin","Issam", "Mihai", "Oussama", "Dorian", "Tania", "Anthony", "Junior", "Kevin", "Andy", "Cheb Khaled", "The Kairi 78", "Arouf gangsta le plus beau de tout les rebeux."]
let paire = []
let impaire = []
for (let i = 0; i < coding.length; i++) {
    let elment = coding[i];
    if (i % 2 == 0) {
        console.log(`${coding[i]} a un index paire`);
    } else if (i % 2 == 1) {
        console.log(`${coding[i]} a un index impair`);
    }
}
coding.forEach(element => {
    let i = coding.indexOf(element);
    if (i % 2 == 0) {
        console.log(`${element} a un index paire`);
        paire.push(element)
    } else if (i % 2 ==1) {
        console.log(`${element} a un index impaire`);
        impaire.push(element)
    }
});
console.log(paire, impaire);

let tab = ["alexis", "loic", "mohammed", "yassin","issam", "mihai", "oussama", "dorian", "tania"];
tab.forEach((element,i) => {
    console.log(element);
    console.log(element.charAt(0));
    console.log(element.charAt(1));
    console.log(element.charAt(1) + element);
    if (i % 2 == 0) {
        console.log(element);
    }
});

tab.forEach((element, i) => {
    if (i % 2 ==1) {
        console.log(element.toUpperCase());
    } else if (i % 2 == 0) {
        console.log(element.charAt(0).toUpperCase() + element.slice(1));
    } 
    if (i % 2 == 1 && element.length > 4) {
        console.log(element);
    } else if (i % 2 == 0 && element.length > 4) {
        console.log(element.charAt(0).toUpperCase());
    }
    if (i % 2 == 0 && elment.length > 4) {
        console.log(element.charAt(0).toUpperCase())
    }
    if (element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n" ) {
        console.log(element);
    }
    if ((element.charAt(0) == "a" || element.charAt(0) == "e" || element.charAt(0) == "m" || element.charAt(0) == "f" || element.charAt(0) == "y" || element.charAt(0) == "n") && element.length > 5 ) {
        console.log(element);
})
