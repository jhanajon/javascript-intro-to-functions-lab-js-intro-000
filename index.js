function shout(string) {
  return string.toUpperCase();
}

function whisper(string) {
  return string.toLowerCase();
}


function logShout(string) {
  //mine did not work
  //console.log.toUpperCase();
  //cheated from solutions - works
  console.log(string.toUpperCase())
}

function logWhisper(string) {
  console.log(string.toLowerCase())
}

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

// switch(string){
//   case 'hello': return "I can't hear you!"
//   //case lowercase: return "I can't hear you!"
//   //break;
//   case 'HELLO': return "YES INDEED!"
//   //break;
//   case "I love you, Grandma.": return "I love you, too."
//   // break;
//   default: return "";
// }
//}
