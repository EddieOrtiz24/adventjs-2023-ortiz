

const giftIds = [2, 1, 3, 5, 3, 2]
//const firstRepeatedId = findFirstRepeated(giftIds)
//console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

const giftIds2 = [1, 2, 3, 4]
//const firstRepeatedId2 = findFirstRepeated(giftIds2)
//console.log(firstRepeatedId2) // -1
// Es -1 ya que no se repite ningún número

const giftIds3 = [5, 1, 5, 1]
//const firstRepeatedId3 = findFirstRepeated(giftIds3)
//console.log(firstRepeatedId3) // 5
let elementoUnico = [];

const comparadorArreglos = (array) => {

  if ((new Set(array).size < array.length)== true){
        for (let i = 0; i < array.length; i++){
          if(elementoUnico.includes(array[i])){
             console.log(array[i])
             
        } else{
          elementoUnico.push(array[i])
          console.log(elementoUnico)
        }
  } 
  }
  else{return console.log("en el arreglo " + array + " no se repite nada " + -1)}

}

comparadorArreglos(giftIds)
comparadorArreglos(giftIds2)
comparadorArreglos(giftIds3)
   //length.giftIds2, length.giftIds3
