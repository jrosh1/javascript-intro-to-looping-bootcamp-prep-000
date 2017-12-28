function forLoop(array){
  for(let i = 1; i < 26; i++){
    array = array.push("I am ${i} strange loops")
  }
  return array
}