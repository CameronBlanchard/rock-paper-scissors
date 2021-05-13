

const weapons = ['rock', 'paper', 'scissors']

function getWeapon(weaponName) {
  if (typeof weaponName != "string") {
    throw new Error(`${weaponName} is not a string`)
  }
  let foundWeapon = weapons.find(weapon => weapon == weaponName)
  if (!foundWeapon) {
    throw new Error(`${weaponName} is not found`)
  }
  return foundWeapon
}


function compWeapon() {
  const i = Math.floor(Math.random() * weapons.length)
  const compWeapon = weapons[i]
  return compWeapon
}

function play(foundWeapon) {
  getWeapon(foundWeapon)
  compWeapon()
  if (foundWeapon == 'rock' && compWeapon() == 'scissors') { 
    console.log("win")
    window.alert("You Win!")
  }
  else if (foundWeapon == 'rock' && compWeapon() == 'rock') {
    console.log("tie")
    window.alert("It's a Tie")
  }
  else if (foundWeapon == 'rock' && compWeapon() == 'paper') {
    console.log('lose')
    window.alert("You Lose!")
  }
  else if (foundWeapon == "scissors" && compWeapon() == 'paper') {
    console.log('win')
    window.alert("You Win!")
  }
  else if (foundWeapon == "scissors" && compWeapon() == 'scissors') {
    console.log('tie')
    window.alert("It's a Tie")
  }
  else if (foundWeapon == "scissors" && compWeapon() == 'rock') {
    console.log('lose')
    window.alert("You Lose!")
  }
  else if (foundWeapon == "paper" && compWeapon() == 'rock') {
    console.log('win')
    window.alert("You Win!")
  }
  else if (foundWeapon == "paper" && compWeapon() == 'paper') {
      console.log('tie')
      window.alert("It's a Tie")
    }
  else if (foundWeapon == "paper" && compWeapon() == 'scissors') {
      console.log('lose')
      window.alert("You Lose!")
    }
  }


  
