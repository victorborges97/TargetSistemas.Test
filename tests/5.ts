const str = "Olá, mundo!";

let strInvertida = "";

for (let i = str.length - 1; i >= 0; i--) {
    strInvertida += str[i];
}

console.log(strInvertida);