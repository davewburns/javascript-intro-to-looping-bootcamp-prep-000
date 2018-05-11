function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) { 
    //return "I am " +i+ "strange loop."
    array.push("I am 1 strange loop.")
  } else {
    //return "I am " +i+ "strange loops"
    array.push("I am "+i+" strange loops.")
  }
}return array
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n)
    n--
  }
}

function doWhileLoop(array) {
  
}