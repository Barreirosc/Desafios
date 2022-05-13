let pilotName = prompt('Qual nome do piloto')
let shipSpeed = 0

let newShipSpeed = prompt('Qual velocidade você gostaria de acelerar a nave?')

let confirmSpeed = confirm('Estamos acelerando para ' + newShipSpeed + 'Km/s')

if (confirmSpeed) {
  shipSpeed = newShipSpeed
}

if (shipSpeed <= 0) {
  alert(
    'A nava está parada. Considere aumentar a velocidade para que possamos partir'
  )
} else if (shipSpeed < 40) {
  alert('A nave está devagar. Aumente a velocidade!')
} else if (shipSpeed < 80) {
  alert('Parece uma boa velocidade para manter')
} else if (shipSpeed < 100) {
  alert('Velocidade alta. Considere diminuir')
} else {
  alert('Velocidade perigosa. Controle automático ativado')
}

alert('Piloto: ' + pilotName + '\nVelocidade: ' + shipSpeed + ' Km/s')
