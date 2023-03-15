const num1 = prompt("rentrer 1er num")
 if (num1 < 0 || num1 >10) {
     console.error('erreur')
 }else {
     for (let i = num1; i >= 0; i--) {
         console.log(i)
     }
 }