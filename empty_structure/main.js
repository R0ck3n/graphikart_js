let number = Math.floor(Math.random() * 10) + 1;

console.log(number)

const isRight = () =>{
    window.alert('gg wp')
}
const guess = ()=>{
for (let i = 0; i < 3; i++) {
    const essai = Number(prompt('Devinez le chiffre de 1 à 10'))

    if (i === 2) window.alert('you lose')
    else if (essai < number) window.alert('need upper number')
    else if (essai > number) window.alert('need lower number')
    else if (essai === number) {
        isRight()
        break
    }

}
}


guess()