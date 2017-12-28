function forLoop(array){
 array = ["I am 1 strange loop."]
  for(let i = 2; i < 26; i++){
    array.push("I am ${i} strange loops.")
  }
  return array
}