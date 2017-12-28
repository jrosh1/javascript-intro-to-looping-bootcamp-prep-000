function forLoop(array){
 array = ["I am 1 strange loop."]
  for(let i = 1; i < 26; i++){
    if (i === 1){
      
    }
    
    array = [...array, "I am ${i} strange loops."]
  }
  return array
}