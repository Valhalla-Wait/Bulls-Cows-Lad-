const btn = document.querySelector('#btn')



function createSecretNum() {          //Генерация загаданного числа
  
  function random(min, max) {         
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let arrNum = []
  let numLength = random(3, 6);
  for (let i = 0; i < numLength; i++) {
    let num = random(0, 9)
    let steps = 1
    for (let j = 0; j < steps; j++) {
      if (arrNum.includes(num)) {
        num = random(0, 9)
        steps++
      }else{
        arrNum.push(num)
        break
      }
      
    }
    
  }
  return arrNum = arrNum.join('')
}



const validate = (num) => {         //Проверка введенных данных
  let numLength = num.length
  if (numLength >= 3 && numLength <= 6) {
    let checkNum = num.match(/^\d+$/)
    if (checkNum) {
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}





const game = (secretNum, repeatCount) => {                //Игра
  if (repeatCount == 0) {
    confirm('Вы проиграли :(')
    return
  }
  let answer = prompt('Угадайте число')  //Число пользователя
  let arrSecr = secretNum.split('')

  if(answer){
    if (validate(answer)) {
      let arrNumsTruePos = []            //Массив с цифрами на своих местах
      let arrNumsFalsePos = []           //Массив с цифрами не на своих местах
  
  
      arrNums = answer.split('')
      for (let i = 0; i < arrNums.length; i++) {
        for (let j = 0; j < arrSecr.length; j++) {
          if (arrNums[i] == arrSecr[j]) {
            if(arrNums.indexOf(arrNums[i]) == arrSecr.indexOf(arrSecr[j])) {
              arrNumsTruePos.push(i)
            }else{
              arrNumsFalsePos.push(i)
            }
          }else{
            continue
          }
          
        }
      }
  
      if (arrNumsTruePos.length == arrSecr.length && arrSecr.length == arrNums.length)  {
        confirm('Поздравляем! Вы угадали!')
        return
      }else{
        alert(`Cовпавших цифр не на своих местах - ${arrNumsFalsePos.length}, цифр на своих местах - ${arrNumsTruePos.length}
        Осталось попыток: ${--repeatCount}`)
        game(secretNum, repeatCount)
      }
    
    }else{
      alert('Данные введены не корректно')
      game(secretNum, repeatCount)
    }
  }else{
    return
  }
  
}





const startGame = () => {           //Запуск игры
  repeatCount = 10                  //Установите свое кол-во попыток (по ум. 10)
  let num = createSecretNum()
  game(num, repeatCount)
}



btn.addEventListener('click', startGame)





