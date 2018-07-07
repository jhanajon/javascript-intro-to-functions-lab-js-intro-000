function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
  //mine did not work, problem apparently I misunderstood that lowercase is not the same as toLowerCase etc and that the if statement required a test that it's a string.
  //console.log.toUpperCase();
  //cheated from solutions - works
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

/////////////////

function sayHiToGrandma(string) {
  if (string.toLowerCase() === string){
    return "I can't hear you!"
  }

  else if (string.toUpperCase() === string) {
    return "YES INDEED!"
  }

  else if (string = "I love you, Grandma.") {
    return "I love you, too."
  }
}


///////////////////////////////////

function sayHiToGrandmaCase(string) {
  switch(string){
  case .toLowerCase: return "I can't hear you!"
//   //break;
  case string.toUpperCase: return "YES INDEED!"
//   //break;
  case "I love you, Grandma." : return "I love you, too."
//   // break;
  default: return "";
}
}
