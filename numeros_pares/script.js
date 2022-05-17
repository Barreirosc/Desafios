function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

let inicial = 2

while (inicial <= 100) {
  mostra(inicial)
  inicial = inicial + 2
}

mostra('FIM')
