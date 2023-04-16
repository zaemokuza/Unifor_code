function particao(a, baixo, alto) {
  let pivo = a[alto];
  let i = baixo - 1;
  for (let j = baixo; j < alto; j++) {
    if (a[j] < pivo) {
      i++;
      let temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  }
  let temp = a[i + 1];
  a[i + 1] = a[alto];
  a[alto] = temp;

  return i + 1;
}

function quicksort(a, baixo, alto) {
  if (baixo < alto) {
    let parte = particao(a, baixo, alto);
    quicksort(a, baixo, parte - 1);
    quicksort(a, parte + 1, alto);
  }
}

function ordenar() {
  const input = document.getElementById("text").value.trim();
  if (input === "") {
    document.getElementById("output").innerHTML =
      "Por favor, insira uma lista de números inteiros";
    return;
  }

  const a = input.split(" ").map(Number);
  quicksort(a, 0, a.length - 1);

  document.getElementById("output").innerHTML =
    "A ordenação dos elementos é: " + a.join(" ");
}
