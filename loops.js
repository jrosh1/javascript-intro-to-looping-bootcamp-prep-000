function forLoop(array){
  for(var i = 1; i < 26; i++){
    array = array.push("I am ${i} strange loops")
  }
  return array
}