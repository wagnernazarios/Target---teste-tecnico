let str = "Abacaxi";
let contagemStr = 0;

for (let i = 0; i < str.length; i++) {
  if (str[i] == "a" || str[i] == "A") {
    contagemStr++;
  }
}

console.log(` Existem ${contagemStr} "a" na string`);
