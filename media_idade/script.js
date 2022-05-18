function pulaLinha() {
  document.write('<br>')
  document.write('<br>')
}

function mostra(frase) {
  document.write(frase)
  pulaLinha()
}

let totalFamiliares = parseInt(prompt('Quantidade de familiares?'))

let numero = 1

let totalIdade = 0

while (numero <= totalFamiliares) {
  let idade = parseInt(prompt('Informe a idade do familiar'))
  totalIdade = totalIdade + idade
  numero++
}

let mediaDasIdades = totalIdade / totalFamiliares
mostra('A média das idades dos familiares é ' + mediaDasIdades)
mostra('FIM')
