function pulaLinha() {
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

for (let linha = 1; linha <= 3; linha++) {
  mostra('**********')

  for (let coluna = 1; coluna <= 10; coluna++) {
    document.write('*')
  }
  pulaLinha()
}
